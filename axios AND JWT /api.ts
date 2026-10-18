import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:3000"
});

api.interceptors.request.use((config)=>{
    console.log(config);

    const token = localStorage.getItem("user");
    if(token){
        config.headers.authorization = `Bearer ${token}`;
    }
    return config
})

api.interceptors.response.use(
    (response)=>{
        return response;
    },
    (error)=>{
        if(error.response.status == 201){
            console.log("登录过期");
        }
        return Promise.reject(error);
    }
)



export default api;
