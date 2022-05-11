const axios = require('axios');
import store from "@/store";

let request = axios.create({
	baseURL: "https://netease-cloud-music-api-azure-zeta.vercel.app/",
})

request.interceptors.request.use((config) => {
	if (store.state.user) {
		config.params = {
			...config.params,
			cookie: encodeURIComponent(store.state.user.cookie),
			realIP:'116.25.146.177',
		}
	} else {
		config.params = {
			...config.params,
			cookie: '1',
			realIP:'116.25.146.177'
		}
	}
	return config;
})

request.interceptors.response.use((response) => {
	if (response.status === 200) {
		return response.data;
	}

}, error => {
	return Promise.reject(error);
})

export default request;
