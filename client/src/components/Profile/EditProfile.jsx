import { IoCloseCircleSharp } from "react-icons/io5";
import { Dropdown, DropdownItem } from "flowbite-react";
import { Button } from "flowbite-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { validateEmail, validNameContent, validateDate, getName } from "../../utils/helper"
import { getData } from "./Profile";

const validateForm = (form) => {
    const firstname = getName(form.firstname);
    const lastname = getName(form.lastname);
    const email = form.email.trim().toLowerCase();
    return { ...form, firstname: firstname, lastname: lastname, email: email };
}
const EditProfile = ({ handleEdit, data, cb }) => {
    const [form, setForm] = useState(data);
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => {
            return { ...prev, [name]: value }
        });
    }
    const [loading, setLoading] = useState(false);
    const handleSubmit = async () => {
        if (!form.firstname) {
            toast.error("Please enter your first name");
            return;
        }
        if (!form.lastname) {
            toast.error("Please enter your last name");
            return;
        }
        if (!form.email) {
            toast.error("Please enter your email address")
            return;
        }
        if (!validateEmail(form.email)) {
            toast.error("Please enter a valid email address")
            return;
        }
        if (!form.passingYear) {
            toast.error("Please enter your Passing year")
            return;
        }
        const validatedForm = validateForm(form);
        setLoading(true);
        try {
            const response = await fetch("http://localhost:9001/api/alumini/update", {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(validatedForm),
                credentials: 'include',

            })
            const result = await response.text();
            if (!response.ok) {
                setLoading(false);
                return toast.error(result);
            }
            await getData(cb);
            toast.success(result);
            setLoading(false);
            handleEdit(false);
        } catch (err) {
            setLoading(false);
            return toast.error("Oops! couldn't update data");
        }
    }
    return (
        <div className="w-full absolute z-40 top-0 py-14 bg-gray-200 bg-opacity-70 h-screen overflow-y-auto mb-0">
            <div className="w-full max-w-[700px] mx-auto bg-white rounded-xl py-6 px-4 sm:p-12 shadow-lg">
                <div className="w-full text-center py-4 -mt-8 mb-8 flex justify-between border-b-[1px] border-gray-200">
                    <p className="pl-4 self-center text-2xl font-bold">Edit Profile</p>
                    <p className="pr-2 text-[45px] self-center" onClick={() => handleEdit(false)}><IoCloseCircleSharp color="gray" /></p>
                </div>
                <div className="w-full flex justify-between text-xl h-10 ">
                    <p className="pl-4 self-center font-semibold">Profile Picture</p>
                    <p className="pr-2 text-blue-600 self-center">Edit</p>
                </div>
                <div>
                    <div className=" w-[170px] h-[170px] rounded-[50%] mx-auto my-10">
                        <img src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=" className="w-full h-full rounded-[50%]" />
                    </div>
                </div>
                <div className="w-full flex justify-between text-xl h-10">
                    <p className="pl-4 self-center font-semibold">Cover Photo</p>
                    <p className="pr-2 text-blue-600 self-center">Edit</p>
                </div>
                <div>
                    <div className=" w-[95%]  mx-auto my-10 border-2 rounded-lg">
                        <img src="https://www.univariety.com/blog/wp-content/uploads/2022/02/5853-min-scaled.jpg" className="w-full object-cover h-full rounded-lg" />
                    </div>
                </div>
                <div className="pl-4 flex flex-col gap-2">
                    <p className="text-xl font-semibold ">Alumini Information</p>
                    <p className="text-lg mt-4">Firstname</p>
                    <input type="text" name="firstname" value={form.firstname} className="rounded-md" onChange={(e) => {
                        if (validNameContent(e.target.value))
                            handleChange(e);
                    }} />
                    <p className="text-lg mt-4">Lastname</p>
                    <input type="text" name="lastname" value={form.lastname} className="rounded-md" onChange={(e) => {
                        if (validNameContent(e.target.value))
                            handleChange(e);
                    }} />
                    <p className="text-lg mt-4">Email</p>
                    <input type="email" name="email" value={form.email} className="rounded-md" onChange={handleChange} />
                    <p className="text-lg mt-4">Working Country</p>
                    <input type="text" name="workingCountry" value={form.workingCountry} className="rounded-md" onChange={handleChange} />
                    <p className="text-lg mt-4">Working City</p>
                    <input type="text" name="workingCity" value={form.workingCity} className="rounded-md" onChange={handleChange} />
                    <p className="text-lg mt-4">Passing year</p>
                    <input type="text" name="passingYear" value={form.passingYear} className="rounded-md" onChange={(e) => {
                        if (validateDate(e.target.value))
                            handleChange(e);
                    }} />
                    <p className="text-lg mt-4">Campus</p>
                    <div className="flex border-[1px] h-[42px] pl-[12px] border-[#6B7280] rounded-md">
                        <p className=" w-full self-center">{form.campus}</p>
                        <Dropdown className="" placement="top" color="white">
                            <DropdownItem onClick={() => setForm((prev) => ({ ...prev, "campus": "Amritapuri" }))}>Amritapuri</DropdownItem>
                            <DropdownItem onClick={() => setForm((prev) => ({ ...prev, "campus": "Bengaluru" }))}>Bengaluru</DropdownItem>
                            <DropdownItem onClick={() => setForm((prev) => ({ ...prev, "campus": "Coimbatore" }))}>Coimbatore</DropdownItem>
                            <DropdownItem onClick={() => setForm((prev) => ({ ...prev, "campus": "Kochi" }))}>Kochi</DropdownItem>
                            <DropdownItem onClick={() => setForm((prev) => ({ ...prev, "campus": "Chennai" }))}>Chennai</DropdownItem>
                            <DropdownItem onClick={() => setForm((prev) => ({ ...prev, "campus": "Amravati" }))}>Amravati</DropdownItem>
                            <DropdownItem onClick={() => setForm((prev) => ({ ...prev, "campus": "Mysuru" }))}>Mysuru</DropdownItem>
                        </Dropdown>
                    </div>
                    <Button color="blue" className="mt-8" onClick={handleSubmit}>{loading ? "Loading..." : "update"}</Button>
                </div>
            </div>
        </div>
    )
}
export default EditProfile