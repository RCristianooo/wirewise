import { createContext, useContext, useState } from "react";
import toast, { Toaster }  from 'react-hot-toast'
import axios from "axios";
import { server } from "../main";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [btnLoading, setBtnLoading] = useState(false);

    async function loginUser(email, navigate) {
        setBtnLoading(true);
        try {
            const { data } = await axios.post(`${server}/api/user/login`, { email });

            toast.success(data.message);
            localStorage.setItem("verifyToken", data.verifyToken);
            navigate("/verify");
            setBtnLoading(false);
        } catch (error) {
            const errorMessage = error?.response?.data?.message || "An unexpected error occurred. Please try again later.";
            toast.error(errorMessage);
            setBtnLoading(false);
        }
    }
    return (
        <UserContext.Provider value={{ loginUser, btnLoading }}>
            {children}
            <Toaster />
        </UserContext.Provider>
    );
};

export const UserData = () => useContext(UserContext);