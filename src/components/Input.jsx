    import React, { useId ,useState} from "react"
import Button from "./Button";
        const Input =  React.forwardRef(
            function Input({
                label,
                error,
                type = "text",
                className ='',
                ...props

            },ref){
                const [showPass , setShowPass] = useState(false)
                const id = useId();
                const inpType = type === "password"?
                                                    showPass?
                                                    "text"
                                                    :"password"
                                           :type         


                return (
                    <div className="w-full">
                        {label && <label className="inline-block mb-1 pl-1 " htmlFor={id}>
                                {label}
                            </label>}

                    <div className="relative">
                    <input type={inpType} className={` px-3  py-2 rounded-lg bg-white text-black
                        outline-none focus:bg-green-200 duration-200 border border-gray-200 
                        w-full
                        ${className}`}
                        ref={ref}
                        id={id}
                        {...props}
                    />

                        {type === "password" &&
                            (<Button
                                children={ "👁"}
                                onClick = {()=>setShowPass(prev => !prev)}
                                 className="absolute right-1 top-1/2 -translate-y-1/2 bg-transparent!"
                            />)
                        }
                        </div>
                        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

                    </div>
                )
            }
        )
        export default Input

