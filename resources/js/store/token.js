import { defineStore } from 'pinia'
import { ref, computed } from 'vue';
import { APIInstance } from '@/axios';

export const useTokenStore = defineStore('token', () => {
    const token_name = "token";
    const token = ref();

    const isAuth = computed(() => token.value ? true : false);

    function setToken(new_token){
        token.value = new_token;
        localStorage.setItem(token_name, new_token);
        APIInstance.defaults.headers.common['Authorization'] = `Bearer ${new_token}`;
    }

    function getToken(){
        return token.value;
    }

    function deleteToken(){
        token.value = null;
        localStorage.removeItem(token_name);
        delete APIInstance.defaults.headers.common['Authorization'];
    }

    if(localStorage.getItem(token_name)){
        setToken(localStorage.getItem(token_name));
    }

    return {isAuth, setToken, getToken, deleteToken};
})