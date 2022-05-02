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

//获取音乐搜索内容
const getSearchList = (params) => {
	return request({
		url: '/search',
		method: "GET",
		params,
	})
}

//获取歌曲url
const getSongUrl = (params) => {
	return request({
		url: '/song/url',
		method: "GET",
		params,
	})
}

//获取歌曲歌词
const getSongLyric = (params) => {
	return request({
		url: '/lyric',
		method: "GET",
		params,
	})
}

//获取歌曲详情
const getSongDetails = (params) => {
	return request({
		url: '/song/detail',
		method: "GET",
		params,
	})
}

//获取歌单里的所有歌曲
const getSongListMusic = (params) => {
	return request({
		url: '/playlist/detail',
		params,
		method: "GET",
	})
}

export {
	getBanner,
	getNewSongRecommend,
	getRecommendSongList,
	getSearchList,
	getSongUrl,
	getSongLyric,
	getSongDetails,
	getSongListMusic,
}
