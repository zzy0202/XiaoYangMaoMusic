const axios = require('axios');
import store from "@/store";
let request = axios.create({
	baseURL: "https://netease-cloud-music-api-azure-zeta.vercel.app/",
})

request.interceptors.request.use((config)=>{
	if(store.state.user) {
		config.params = {
			...config.params,
			cookie:encodeURIComponent(store.state.user.cookie),
		}
	}
	else {
		config.params = {
			...config.params,
			cookie:'',
		}
	}
	return config;
})

request.interceptors.response.use((response) => {
	if (response.status === 200) {
		return response.data;
	} else {
		return response;
	}
}, error => {
	return Promise.reject(error);
})

export default request;
