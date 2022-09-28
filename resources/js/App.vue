<template>
    <div>
        <header>
            <router-link to="/">Home</router-link>
            <router-link to="/login" v-if="!token.isAuth">Login</router-link>
            <router-link to="/register" v-if="!token.isAuth">Register</router-link>
            <router-link to="/users" v-if="token.isAuth">Users</router-link>
            <a href="#" @click="logout" v-if="token.isAuth">Logout</a>
        </header>
        <router-view></router-view>
    </div>
</template>
<script setup>
    import {useTokenStore} from '@/store/token'
    import { useRouter } from 'vue-router';
    import {APIInstance} from '@/axios';

    const router = useRouter()
    const token = useTokenStore()

    async function logout(){
        APIInstance.post('/api/logout').then(res => {
            token.deleteToken();
            router.push('/');
        });
    }
</script>
<style>
header{
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
}
</style>