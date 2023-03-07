if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$3 = {
    __name: "index",
    setup(__props) {
      let time = vue.ref("");
      let bannerList = vue.ref([]);
      let explorList = vue.ref([]);
      let albumList = vue.ref([]);
      vue.onBeforeMount(() => {
        time = new Date().toString();
        uni.request({
          url: `/api/banner?${time}`,
          data: {
            type: 2
          },
          method: "GET",
          success: (res) => {
            bannerList.value = res.data.banners;
          }
        });
        uni.request({
          url: "/api/homepage/dragon/ball",
          method: "GET",
          success: (res) => {
            explorList.value = res.data.data;
          }
        });
        uni.request({
          url: "/api/personalized",
          data: {
            limit: 10
          },
          method: "GET",
          success: (res) => {
            albumList.value = res.data.result;
          }
        });
      });
      const formatDate = () => {
        let val = parseInt(time.slice(16, 18));
        if (val > 12) {
          return "晚上好";
        } else if (val < 12) {
          return "早上好";
        }
      };
      const scroll = () => {
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content-home" }, [
          vue.createCommentVNode(" 顶部 "),
          vue.createElementVNode("view", { class: "header" }, [
            vue.createElementVNode("view", { class: "title" }, [
              vue.createElementVNode(
                "h3",
                null,
                "欢迎," + vue.toDisplayString(formatDate()),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "funcs" }, [
              vue.createElementVNode("ul", null, [
                vue.createElementVNode("li", null, [
                  vue.createElementVNode("img", {
                    src: "/static/homeIcon/bell.svg",
                    alt: ""
                  })
                ]),
                vue.createElementVNode("li", null, [
                  vue.createElementVNode("img", {
                    src: "/static/homeIcon/time.svg",
                    alt: ""
                  })
                ]),
                vue.createElementVNode("li", null, [
                  vue.createElementVNode("img", {
                    src: "/static/homeIcon/setting.svg",
                    alt: ""
                  })
                ])
              ])
            ])
          ]),
          vue.createCommentVNode(" 轮播图 "),
          vue.createElementVNode("view", { class: "swiper-pics" }, [
            vue.createElementVNode("swiper", {
              class: "swiper",
              circular: "",
              autoplay: "true",
              interval: "true",
              duration: "500"
            }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(vue.unref(bannerList), (item) => {
                  return vue.openBlock(), vue.createElementBlock("swiper-item", {
                    key: item.bannerId
                  }, [
                    vue.createElementVNode("view", { class: "swiper-item" }, [
                      vue.createElementVNode("img", {
                        src: item.pic,
                        alt: item.alg
                      }, null, 8, ["src", "alt"])
                    ])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            vue.createCommentVNode(" 发现 "),
            vue.createElementVNode("view", { class: "recommend" }, [
              vue.createElementVNode("ul", null, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(vue.unref(explorList), (item) => {
                    return vue.openBlock(), vue.createElementBlock("li", {
                      key: item.id
                    }, [
                      vue.createElementVNode("img", {
                        src: item.iconUrl,
                        alt: item.homepageMode
                      }, null, 8, ["src", "alt"]),
                      vue.createElementVNode(
                        "h4",
                        null,
                        vue.toDisplayString(item.name),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ]),
            vue.createCommentVNode(" 歌单 "),
            vue.createElementVNode("view", { class: "albums" }, [
              vue.createElementVNode("h3", null, "根据你的喜好推荐"),
              vue.createElementVNode(
                "scroll-view",
                {
                  class: "scroll-view_H",
                  "scroll-x": "true",
                  onScroll: scroll,
                  "scroll-left": "120"
                },
                [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(vue.unref(albumList), (item) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: "scroll-view-item_H",
                        key: item.id
                      }, [
                        vue.createElementVNode("img", {
                          src: item.picUrl,
                          alt: item.alg
                        }, null, 8, ["src", "alt"]),
                        vue.createElementVNode(
                          "p",
                          null,
                          vue.toDisplayString(item.name),
                          1
                          /* TEXT */
                        )
                      ]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ],
                32
                /* HYDRATE_EVENTS */
              )
            ])
          ])
        ]);
      };
    }
  };
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-1cf27b2a"], ["__file", "H:/uni-app/hello-uni/pages/index/index.vue"]]);
  const _sfc_main$2 = {};
  function _sfc_render$1(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("div", { class: "about" }, " about ");
  }
  const PagesIndexSearch = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "H:/uni-app/hello-uni/pages/index/search.vue"]]);
  const _sfc_main$1 = {};
  function _sfc_render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("div", null, " library ");
  }
  const PagesIndexLibrary = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "H:/uni-app/hello-uni/pages/index/library.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/index/search", PagesIndexSearch);
  __definePage("pages/index/library", PagesIndexLibrary);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "H:/uni-app/hello-uni/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
