import { computed, ref } from 'vue';

const tokenRef = ref(localStorage.getItem("token") || null);

const token = computed({
    get() {
        return tokenRef.value;
    },
    set(new_token) {
        if(new_token === null){
            localStorage.removeItem("token")
        } else {
            localStorage.setItem("token", new_token);
        }
        tokenRef.value = new_token;
    }
})

export {token};