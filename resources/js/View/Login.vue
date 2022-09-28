<template>
    <div>
        <form @submit.prevent="login">
            <div>
                <b>Email:</b>
                <input type="email" v-model="email" required>
            </div>
            <div>
                <b>Password:</b>
                <input type="password" v-model="password" required>
            </div>
            <div>
                <input type="submit" value="Войти">
            </div>
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useTokenStore } from '@/store/token'
import {defaultInstance} from '@/axios';
import { useRouter } from 'vue-router';

const email = ref();
const password = ref();
const router = useRouter()
const token = useTokenStore()

async function login() {
    defaultInstance.post('/api/login', {
        email: email.value,
        password: password.value,
    }).then(res => {
        token.setToken(res.data.token);
        router.push('/');
    });
}
</script>
<style>

</style>