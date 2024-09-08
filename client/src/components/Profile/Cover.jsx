import { Button } from "@mui/material";
import { HiCamera } from "react-icons/hi2";
const Cover = () => {
    
    return (
        <div className="w-[100%] lg:w-[80%]  mx-auto h-[400px] border-2 rounded-b-xl relative">
            <img src="https://www.univariety.com/blog/wp-content/uploads/2022/02/5853-min-scaled.jpg" className="w-full object-cover h-full rounded-b-xl" />
            <div className="absolute bottom-4 right-4">
                <Button variant="contained" sx={{ backgroundColor: "#E4E6EB", color: "black" }} ><span className="text-lg"><HiCamera /></span><p className="pl-1 hidden lg:block w-fit">Edit cover photo</p></Button>
            </div>
        </div>
    )
}
export default Cover;