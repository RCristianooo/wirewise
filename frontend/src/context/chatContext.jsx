import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"
import { server } from "../main";
import toast from "react-hot-toast";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);
    const [prompt, setPrompt] = useState("");
    const [newRequestLoading, setNewRequestLoading] = useState(false);

    const API_KEY = import.meta.env.VITE_API_KEY;

        async function fetchResponse(){
            if(prompt === "") return alert("Write prompt");
            setNewRequestLoading(true);
            setPrompt("");
            try {
                const response = await axios({
                    url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
                    method: "post",
                    data: {
                        contents: [{ parts: [{ text: prompt }] }],
                    },
                });

                const message = {
                    question: prompt,
                    answer: 
                        response["data"]["candidates"][0]["content"]["parts"][0]["text"],
                };

                setMessages((prev) => [...prev, message]);
                setNewRequestLoading(false);
            } catch (error) {
                alert("Something went wrong")
                console.log(error);
                setNewRequestLoading(false);
            }
        }

    const [chats, setChats] = useState([])

    async function fetchChats(params) {
        try {
          const {data} = await axios.get(`${server}/api/chat/all`, {
            headers: {
                token: localStorage.getItem("token"),
            },
          });

          setChats(data);
        } catch (error) {
          console.log(error);
        }
    }

    const [createLod, setCreateLod] = useState(false)

    async function createChat() {
        setCreateLod(true)
        try {
            const {data} = await axios.post(`${server}/api/chat/new`, {}, {
                headers: {
                    token: localStorage.getItem("token"),
                },
            }
        );

        fetchChats();
        setCreateLod(false);
        } catch (error) {
            toast.error("Something went wrong")
            setCreateLod(false)
        }
    }

    useEffect(() => {
        fetchChats()
    }, [])
    return (
        <ChatContext.Provider value={{ fetchResponse, messages, prompt, setPrompt, newRequestLoading, chats, createChat, createLod, }}>
            {children}
        </ChatContext.Provider>
    );
};

export const ChatData = () => useContext(ChatContext);