import axios from "axios";
import { useTokenStore } from "@/store/token";

const defaultInstance = axios.create();

const APIInstance = axios.create({
    headers: {
        Accept: "application/json",
    }
});
APIInstance.interceptors.response.use(response => response, reject => {
    const token = useTokenStore();
    if(reject.response.status == '401'){
        token.deleteToken();
    }
    return Promise.reject(reject);
})

export {defaultInstance, APIInstance}