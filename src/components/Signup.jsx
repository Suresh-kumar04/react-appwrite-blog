import React from "react";
import { useState } from "react";
import authService from "../appwrite/auth";
import { Link,useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import {Button , Input ,Logo} from './index'
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function    Signup(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register , handleSubmit} = useForm();
    const [error, setError] = useState("");

    const createAcc = async(data) =>{
        setError("");
        try {
            const create =  await authService.createAccount(data);
            if(create){
                const userData = await authService.getCurrentUser();
                if(userData){
                    dispatch(login(userData));
                    navigate("/")
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return(
        <div className="flex items-center justify-center">
            <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-2xl p-10 border border-black/10"> 
                <div className="mb-2 flex justify-center">
                        <span className="inline-block w-full max-w-25 ">

                            <Logo width="100%"/>
                        </span>
                </div>
                <h2 className="text-center text-2xl font-bold ">Sign up to create your account</h2>
                <p className="mt-2 text-center text-black/60 ">
                            Already have an account?
                            <Link
                                to="/login"
                                className="font-medium transition-all duration-200 hover:underline"
                            >
                                Sign in
                            </Link>
                </p>
                {error&& <p className="text-red-600 mt-8 text-center">{error}</p>}


                <form onSubmit={handleSubmit(createAcc)} className="mt-8">
                    <div className="flex flex-col gap-5">
                            <Input
                                label = "Full name : "
                                placeholder ="Enter your full name"
                                {...register("name",
                                    {
                                        required : true,
                                        minLength:3
                                    }
                                
                                )}
                            />

                             <Input
                                label = "Email"
                                placeholder = "Enter your email"
                                type = "email"
                                {...register("email",{
                                    required:"Email is required",
                                        pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                            />

                            <Input
                            label = "password"
                            type = "password"
                            placeholder = "Enter your password"
                            {...register("password",{
                                required:true,
                                 pattern :{
                                    //  Adds: at least one special character too
                                    value : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/,
                                    message:" Adds: at least one special character too"
                                }
                            })}
                            />
                            <Button
                            type="submit"
                            className="w-full"
                        
                            >Create account
                            </Button> 
                    </div>
                </form>
              </div>

        </div>
    )

}export default Signup