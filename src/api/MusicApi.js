import request from "@/api/index";

//获取轮播图
const getBanner = (params) => {
	return request({
		url: "/banner",
		method: "GET",
		params,
	})
}

//获取推荐新歌
const getNewSongRecommend = (params) => {
	return request({
		url: "/personalized/newsong",
		method: "GET",
		params,
	})
}

//获取推荐歌单
const getRecommendSongList = (params) => {
	return request({
		url: '/top/playlist',
		method: "GET",
		params,
	})
}

export {
	getBanner, getNewSongRecommend, getRecommendSongList
}
