import axios from "axios";

export const axiosInstance = axios.create(
    {
        baseURL: import.meta.env.VITE_DASHBOARD_URL,
        timeout: 5000,
        timeoutErrorMessage: "Long processing for that request!",
        withCredentials: true
    }
) 