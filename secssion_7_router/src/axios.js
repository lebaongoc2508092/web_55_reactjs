import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: "https://randomuser.me",
});

// let startTime = 0;
// axiosInstance.interceptors.request.use((config) => {
//     startTime = Date.now();
//     return config;
// });
// axiosInstance.interceptors.response.use((config) => {
//         const receivedTime = Date.now() - startTime;
//         console.log (receivedTime);

// })

export default axiosInstance;