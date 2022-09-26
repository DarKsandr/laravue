<template>
    <div>
        <form @submit.prevent="register">
            <div>
                <b>Name:</b>
                <input type="text" v-model="name" required>
            </div>
            <div>
                <b>Email:</b>
                <input type="email" v-model="email" required>
            </div>
            <div>
                <b>Password:</b>
                <input type="password" v-model="password" required>
            </div>
            <div>
                <input type="submit" value="Регистрация">
            </div>
        </form>
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { token } from '@/token';
import { useRouter } from 'vue-router';

const name = ref();
const email = ref();
const password = ref();
const router = useRouter();

function register() {
    axios.post('/api/register', {
        name: name.value,
        email: email.value,
        password: password.value,
    }).then(res => {
        token.value = res.data.token;
        router.push('/');
    }).catch(res => {
        alert(res.response.data.message);
    });
}
</script>
<style>

</style>