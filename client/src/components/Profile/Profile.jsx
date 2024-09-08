import Cover from "./Cover.jsx";
import ProfileDetails from "./ProfileDetails.jsx";
import Options from "./Options.jsx";
import { useEffect, useState } from "react";
import EditProfile from "./EditProfile.jsx";
import { toast } from "react-toastify";
import About from "./About.jsx";

export const getData = async (cb)=>{
    try{
        const response = await fetch("http://localhost:9001/api/profile/alumini",{
            method:'GET',
            headers:{
                'content-type':'application/json'
            },
            credentials:'include'
        })
        if(!response.ok)throw new Error();
        const result = await response.json();
        cb(result);
        // console.log(result);
    }catch(err){
        return toast.error("Oops something went wrong");
    }
}
const Profile = () => {
    const [current, setCurrent] = useState({
        Posts: true,
        About: false,
        Connections: false,
        Photos: false,
        Videos: false
    })
    const [data,setData] = useState();
    useEffect(()=>{
        getData(setData);
    },[])
    const [height,setHeight] = useState(window.innerHeight);
    window.addEventListener('resize',()=>{
        setHeight(window.innerHeight);
    })
    const handleClick = (value) => {
        const name = value;
        let newObj = {
            Posts: false,
            About: false,
            Connections: false,
            Photos: false,
            Videos: false
        }
        newObj[name] = true;
        setCurrent(newObj);
    }
    const [edit,setEdit]=useState(false);
   
    return data ? (<div style={edit?{height:height-60,overflowY:"hidden"}:{heght:"auto",overflowY:"visible"}}>
        <div className="bg-white w-full px-4 h-fit shadow-sm border-b-4 border-white">
            <Cover />
            <ProfileDetails data={data} handleEdit={setEdit}/>
            <Options current={current} handleClick={handleClick} />
        </div>
        <div className="w-full bg-[#E4E6EB] h-52 pt-3">
            <div className="lg:w-[70%] w-[95%] bg-white h-full mx-auto rounded-t-xl p-4">
                {current["Posts"] ? "Posts" : null}
                {current["About"] ? <About data={data}/> : null}
                {current["Connections"] ? "Connections" : null}
                {current["Photos"] ? "Photos" : null}
                {current["Videos"] ? "Videos" : null}
            </div>
        </div>
       {edit?<EditProfile handleEdit={setEdit} data={data} cb={setData}/>:null}
    </div>):<p>Loading</p>
}
export default Profile;