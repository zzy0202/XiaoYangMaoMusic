import request from "@/api/index";

// 获取验证码
const getVerifyCode = (params) => {
	return request({
		url: '/captcha/sent',
		method: "GET",
		withCredentials: true, //关键
		params,
	})
}

//登录
const login = (params) => {
	return request({
		url: '/login/cellphone',
		method: "GET",
		withCredentials: true, //关键
		params,
	})
}

const getLoginStatus = (params) => {
	return request({
		url: '/login/status',
		method: "GET",
		withCredentials: true, //关键

	})
}

const getUser = (params) => {
	return request({
		url: '/user/account',
		method: "GET",
		params,
		// params,
	})
}

export {
	getVerifyCode, login, getLoginStatus, getUser,
}
