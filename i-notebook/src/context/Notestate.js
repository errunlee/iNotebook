import { useState } from "react";
import Notecontext from "./Notecontext";
const Notestate=({children})=>{
    const s1={
        "name":"arun",
        "title":"ntg",
        "descrition":"nothing"
    }
    const s2={
        "name":"sarun",
        "title":"ntc",
        "descrition":"namaste"
    }
    const [state,setState]=useState(s1)
    const update=()=>{
        setTimeout(()=>{
            setState(s2)
        },1000)
    }
    return (
        <Notecontext.Provider value={{state,update}}>
            {children}
        </Notecontext.Provider>

    )
}

export default Notestate;
