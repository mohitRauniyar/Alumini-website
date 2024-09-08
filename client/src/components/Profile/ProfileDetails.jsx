import { MdEdit } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { Button } from "@mui/material";
import { HiCamera } from "react-icons/hi2";
const ProfileDetails = ({handleEdit,data}) => {
    const eightConnections = [null, null, null, null, null, null, null, null];
    return (
        <div className="bg-white flex lg:w-[80%] w-full flex-wrap mx-auto px-4 mb-6">
            <div className="w-full lg:w-fit">
                <div className="w-fit px-5  relative h-36 mx-auto">
                    <div className=" w-[168px] h-[168px] rounded-[50%] border-[6px] relative top-[-30px]">
                        <img src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=" className="w-full h-full rounded-[50%]" />
                    </div>
                    <div className="text-2xl bg-[#E4E6EB] w-[35px] h-[35px] rounded-[50%] pt-[3.5px] absolute bottom-[20px] right-[24px]"><HiCamera className="mx-auto" /></div>
                </div>
            </div>
            <div className="lg:w-fit lg:text-left w-full text-center ">
                <div className="   mx-auto ">
                    <p className="px-2 pt-5 text-3xl font-semibold text-wrap">{data.firstname+" "+data.lastname}</p>
                    <div className="flex flex-col justify-center md:justify-start ">

                        <p className="px-2 pt-1 font-medium text-gray-600 text-sm w-full text-center lg:text-left">100 connections</p>
                        <div className="w-full mx-auto flex flex-row justify-center lg:justify-start pl-3">
                            {
                                eightConnections.map((value, index) => {
                                    return (
                                        <div className="w-[35px] h-[35px] bg-white rounded-[50%] border-2 -ml-3" key={index} style={{ zIndex: `${8 - index}` }}>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex justify-center  lg:ml-auto lg:w-fit w-full mt-4 lg:mt-0">
                <div className="mr-2 mb-5 self-end">
                    <Button variant="contained"  sx={{textTransform:'none',fontSize:'16px'}}><span className="text-lg pr-1"><IoAdd /> </span>Create Story</Button>
                </div>
                <div className="mr-2 mb-5 self-end">
                    <Button variant="contained" sx={{ backgroundColor: "#E4E6EB", color: "black",textTransform:'none',fontSize:'16px' }} onClick={()=>handleEdit(true)}><span className="text-lg pr-1"><MdEdit /></span>Edit Profile</Button>
                </div>
            </div>
        </div>
    )
}
export default ProfileDetails;