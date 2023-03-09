let contentType = 1
export default function myRequest(options) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: options.url, //接口地址：前缀+方法中传入的地址
			method: options.method || 'GET', //请求方法：传入的方法或者默认是“GET”
			data: options.data || {}, //传递参数：传入的参数或者默认传递空集合 
			header: {
				'content-type':'application/json'//自定义请求头信息 
			},
			success: (res) => {
				if(res.statusCode === 200){
					resolve(res)
				}else if(res.statusCode === 401){
					uni.showToast({
						title:'未登录或登录状态已超时,statusCode:'+res.code,
						icon:"none",
						duration:1500
					})
				}else if(res.statusCode === 304){
					uni.showToast({
						title:'目标服务不存在,statusCode:'+res.code,
						icon:"none",
						duration:1500
					})
				}else{
					uni.showToast({
						title:'发生未知错误,statusCode:'+res.code,
						icon:"none",
						duration:1500
					})
				}
				
			},
			// 这里的接口请求，如果出现问题就输出接口请求失败
			fail: (err) => {
				console.log("错误信息:",err)
				reject(err)
			}
		})
	})
}