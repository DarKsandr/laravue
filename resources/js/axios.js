import axios from "axios";
import { token } from "@/token";

const APIInstance = () => axios.create({
    headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token.value}`,
    }
});

export {APIInstance}