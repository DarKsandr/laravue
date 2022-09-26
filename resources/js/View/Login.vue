<template>
    <div>
        <form @submit.prevent="login">
            <b>Email:</b>
            <input type="email" v-model="email" required>
            <b>Password:</b>
            <input type="password" v-model="password" required>
            <input type="submit" value="Войти">
        </form>
    </div>
</template>
<script setup>
    import { ref } from 'vue';
    import {token} from '@/token'
    import axios from 'axios';
    import { useRouter } from 'vue-router';

    const email = ref();
    const password = ref();

    const router = useRouter()

    async function login(){
        axios.post('/api/login', {
            email: email.value,
            password: password.value,
        }).then(res => {
            token.value = res.data.token
            router.push('/');
        });
    }
</script>
<style>
    
</style>