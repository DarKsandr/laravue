<template>
    <div>
        <ul>
            <li v-for="user in users" :key="user.id">
                <div><b>ID: </b>{{user.id}}</div>
                <div><b>Email: </b>{{user.email}}</div>
                <div><b>Name: </b>{{user.name}}</div>
            </li>
        </ul>
    </div>
</template>
<script setup>
    import { onMounted, ref } from 'vue';
    import {APIInstance} from '@/axios';
    const users = ref([]);

    async function getUsers(){
        APIInstance.get("/api/user").then((res) => {
            users.value = res.data;
        });
    }

    onMounted(getUsers);
</script>
<style>
    
</style>