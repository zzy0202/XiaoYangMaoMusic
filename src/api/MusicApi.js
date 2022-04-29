import request from "@/api/index";

//获取轮播图
const getBanner = (params) => {
	return request({
		url: "/banner",
		method: "GET",
		params,
	})
}

export {
	getBanner,
}
