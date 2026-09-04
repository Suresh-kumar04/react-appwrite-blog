    import React from "react";
    import { useSelector } from "react-redux";
    import { useNavigate } from "react-router-dom";
    import { useEffect,useState } from "react";

    export default function Protected({children , authenticated = true}){
        const navigate = useNavigate();
        const[loader,setLoader] = useState(true);
        const authStatus = useSelector(state => state.auth.status)

        useEffect(()=>{
            if(authenticated && authStatus!==authenticated){
                navigate("/login")
            }else if(!authenticated && authStatus !==authenticated){
                navigate("/")
            }
            setLoader(false)

        },[navigate , authStatus , authenticated])
        return loader ? <h1>Loading....</h1>:<>{children}</>
    }   
    export {Protected as AuthLayout}