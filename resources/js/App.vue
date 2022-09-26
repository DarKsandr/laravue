<template>
    <div>
        <header>
            <router-link to="/">Home</router-link>
            <router-link to="/login" v-if="!token">Login</router-link>
            <router-link to="/register" v-if="!token">Register</router-link>
            <router-link to="/users" v-if="token">Users</router-link>
            <a href="#" @click="logout" v-if="token">Logout</a>
        </header>
        <router-view></router-view>
    </div>
</template>
<script setup>
    import {token} from '@/token'
    import { useRouter } from 'vue-router';
    import {APIInstance} from '@/axios';

    const router = useRouter()

    async function logout(){
        const API = APIInstance();
        API.post('/api/logout').then(res => {
            token.value = null;
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