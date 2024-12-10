import React,{ useState } from "react";
import axios from "axios";
import { DarkLoader } from "../../components/Spinner";


const ChatBot = () => {
    const [query,setQuery] = useState("");
    const [result,setResult] = useState("");
    const [isLoading,setIsLoading] = useState(false);

    const googleBardPalm2Api = async() => {
        try {
            setIsLoading(true);
            const response = await axios.get("http://localhost:8021/express-service/chatbot/google-bard-palm2-api",
                {
                    params: {
                        payload: query
                    }
                }
            );
            setResult(response.data);
        } catch (error) {
            throw new Error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const onInputKeyDown = (e) => {
        if(e.code === "Enter") {
            googleBardPalm2Api();
        }
    }

    return(
        <div style={{width: "100%",height: "400px",marginBlock: "10px"}}>
            <div className="card-body" style={{background: "rgba(242,242,242,1)",padding: "10px",textAlign: "center"}}>
                <h5 className="text-center" style={{fontSize: "10px"}}>CHATBOT</h5>
                <div style={{width: "90%",height: "300px",fontWeight: "bolder",textAlign: "left",overflowY: "scroll"}}>{isLoading ? <DarkLoader /> : result}</div>
                <div style={{marginTop: "10px"}}>
                    <input type="text" style={{width: "50%",height: "70px",padding: "10px"}} value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={onInputKeyDown} />
                    <button onClick={() => googleBardPalm2Api()} className="btn btn-primary" style={{marginLeft: "20px",width: "90px",pointerEvents: isLoading ? "none" : "auto"}}>Run</button>
                </div>
            </div>
        </div>
    )
}

export default ChatBot;