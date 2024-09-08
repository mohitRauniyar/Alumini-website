import { Dropdown } from "flowbite-react";
import { useState } from "react";
const Options = ({ current, handleClick }) => {
    const [width, setCurrentWidth] = useState(window.innerWidth);
    window.addEventListener('resize', () => {
        setCurrentWidth(window.innerWidth);
    })
    const objmax = {
        "Connections":445,
        "Photos":540,
        "Videos":540,
    }
    const outside = ["Posts","About"]
    const keys = Object.keys(objmax);
    const inside = []
    keys.forEach((key)=>{
        if(objmax[key]<width)outside.push(key);
        else inside.push(key);
    })
    const passive = "p-5 hover:bg-gray-200 hover:rounded-lg";
    const active = "p-5 text-blue-600 border-b-4 border-b-blue-600";

    return (
        <div className="mx-auto w-full lg:w-[70%]">
            <div className="w-full flex flex-wrap lg:justify-start justify-center bg-white h-16  text-gray-500 font-medium border-t-[1px] border-gray-600 mb-0">
                {outside.map((value,index)=>{
                    return(
                        <p key={index} className={current[value] ? active : passive} onClick={()=>handleClick(value)}>{value}</p>
                    )
                })}
                {inside.length>0?<Dropdown label="More" placement="top" color="light" style={{color:"#6b7280",border:"none",paddingTop:"13px"}}>
                    {inside.map((value,index)=>{
                        return(
                            <Dropdown.Item key = {index} onClick={()=>handleClick(value)} style={{color:current[value]?"#1C64F2":"black"}}>{value}</Dropdown.Item>
                        )
                    })}
                </Dropdown>:null}
                
            </div>
        </div>
    )
}
export default Options