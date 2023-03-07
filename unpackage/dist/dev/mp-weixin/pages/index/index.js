"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let time = common_vendor.ref("");
    common_vendor.onBeforeMount(() => {
      time = new Date().toString();
    });
    const formatDate = () => {
      let val = parseInt(time.slice(16, 18));
      if (val > 12) {
        return "晚上好";
      } else if (val < 12) {
        return "早上好";
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(formatDate())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "H:/uni-app/hello-uni/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
