
/* eslint-disable react/prop-types */
import { useState } from "react";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa6"

const PasswordInput = ({value, onChange, placeholder}) => {

    const [isShowPassword, setIsShowPassoword] = useState(false);
    const toggleShowPassword = () =>{
        setIsShowPassoword(!isShowPassword)
    }

  return (
    <div className="flex items-center px-2 bg-transparent border-[1.5px]  rounded mb-3">
        <input value={value}
         onChange={onChange}
         type= {isShowPassword?'text':"password"}
         placeholder={placeholder || "Password"}
         className="w-full py-3 mr-3 text-sm bg-transparent rounded outline-none"
        />
        {
            isShowPassword? <FaRegEye
            size={22}
            className="cursor-pointer text-primary"
            onClick={()=>toggleShowPassword()}
        />:<FaRegEyeSlash
        size={22}
            className="cursor-pointer text-slate-400"
            onClick={()=>toggleShowPassword()}
            />
        }

    </div>
  )
}

export default PasswordInput