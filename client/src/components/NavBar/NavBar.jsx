import { useNavigate } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import { IoMdLogIn } from "react-icons/io";


const NavBar = () => {
    const navigate = useNavigate()

  return (
    
    <div className="flex items-center justify-between px-3 py-2 bg-white lg:px-6 drop-shadow">
            <h2 className="py-2 text-sm font-medium text-black lg:text-xl">AlumConnect</h2>
            
            <SearchBar />
            
            <IoMdLogIn onClick={()=>{navigate("/login")}} className="text-slate-400 cursor-pointer hover:text-black text-2xl"/>

            {/* <ProfileInfo userInfo={userInfo} onLogout={onLogout}/> */}

        </div>
  )
}

export default NavBar