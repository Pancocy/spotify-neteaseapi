import myRequest from "../service"



//请求轮播图
export  function getCaroul(data){
	return myRequest({
		url:'/api/banner',
		method:'GET',
		data
	})
}
//请求发现
export function getExplore(){
	return myRequest({
		url:'/api/homepage/dragon/ball',
		method:'GET'
	})
}

//请求歌单
export function getAlbum(data){
	return myRequest({
		url:'/api/personalized',
		method:'GET',
		data
	})
}

//请求电台数据
export function getRadio(){
	return myRequest({
		url:'/api/personalized/djprogram',
		method:'GET'
	})
}
