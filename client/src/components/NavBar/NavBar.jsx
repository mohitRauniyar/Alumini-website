import { useNavigate } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import { IoMdLogIn } from "react-icons/io";
import { Outlet } from "react-router-dom";


const NavBar = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="flex items-center justify-between px-3 py-2 bg-white lg:px-6 drop-shadow sticky top-0 left-0 z-30">
        <h2 className="py-2 text-sm font-medium text-black lg:text-xl">Alum <span className="text-blue-600">Connect</span></h2>
        <IoMdLogIn onClick={() => { navigate("/login") }} className="text-slate-400 cursor-pointer hover:text-black text-2xl" />
      </div>
      <Outlet />
    </>
  )
}

export default NavBar