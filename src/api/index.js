const axios = require('axios');

let request = axios.create({
	baseURL:"https://netease-cloud-music-api-azure-zeta.vercel.app/",
})

request.interceptors.response.use((response)=>{
	if(response.status===200) {
		return response.data;
	}
	else {
		return response;
	}
},error => {
	return Promise.reject(error);
})

export default request;
