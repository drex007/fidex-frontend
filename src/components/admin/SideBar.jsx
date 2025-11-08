import React, { useContext } from 'react'
import { RiHome4Line } from "react-icons/ri";
import { AppContext } from '../../ContextAPI';
import { dashBoard, reQuest, users } from '../../adminPageConfig';
import { TbLogout, TbUsers } from "react-icons/tb";
import { TbExchange } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SideBar = () => {
    const { AdminPage, setAdminPage } = useContext(AppContext)
    const navigate  = useNavigate()
    const logout =  () => {
        localStorage.removeItem("user")
        navigate("/login")
        toast.success("Logout successful")
        
    }
    return (
        <div className='px-4  font-spacegrotesk'>
            <p className='f text-[20px] my-1 font-african'>Fidex</p>
            

            <div className={`${AdminPage === dashBoard ? "bg-faq-bg-dark text-white" : ""} flex  items-center space-x-4 px-4 py-4  rounded-md  my-4 cursor-pointer`} onClick={() => setAdminPage(dashBoard)}>
                < RiHome4Line size={25} />
                <p className='text-[13px]'>Home</p>

            </div>
            <div className={`${AdminPage === reQuest ? "bg-faq-bg-dark text-white" : ""} flex  items-center space-x-4 px-4 py-4  rounded-md  my-4 cursor-pointer`} onClick={() => setAdminPage(reQuest)}>
                < TbExchange size={25} />
                <p className='text-[13px]'>Swap Request</p>

            </div>
            <div className={`${AdminPage === users ? "bg-faq-bg-dark text-white" : ""} flex  items-center space-x-4 px-4 py-4  rounded-md  my-4 cursor-pointer`} onClick={() => setAdminPage(users)}>
                < TbUsers size={25} />
                <p className='text-[13px]'>Users</p>

            </div>

            <div className={`flex  items-center space-x-4 px-4 py-4  rounded-md  my-4 cursor-pointer`} onClick={logout}>
                < TbLogout size={25} />
                <p className='text-[13px]'>Logout</p>

            </div>




        </div>
    )
}

export default SideBar