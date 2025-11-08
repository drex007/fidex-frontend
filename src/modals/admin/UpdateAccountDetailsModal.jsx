import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../ContextAPI'
import { useDispatch } from 'react-redux'
import { adminDeleteAccountAction, updateAccountAction } from '../../Api/admin/admin.api'


const UpdateAccountDetailsModal = () => {
    const { adminDashBoardModal, setAdminDashBoardModal, currentAccount } = useContext(AppContext)
    const dispatch = useDispatch()


    const [formdata, setFormdata] = useState({
        ...currentAccount,
        setAdminDashBoardModal: setAdminDashBoardModal
    });


    useEffect(() => {
        setFormdata(prevForm => ({
            ...prevForm,
            ...currentAccount,
            setAdminDashBoardModal: setAdminDashBoardModal,
        }));
    }, [currentAccount, setAdminDashBoardModal]);

    const handleChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value });
    }
    return (
        <div className='fixed grid h-[100%] z-20 bg-modal-bg place-items-center w-full backdrop-blur-sm lg:px-0 px-4 top-0 font-spacegrotesk'>
            <div className='bg-white shadow-2xl min-h-[200px] rounded-md w-2/6 p-4'>
                <p className='font-african my-3 '>Update Account</p>

                <p className='text-black text-[12px]'>Bank Name</p>
                <div className='w-full flex border border-gray-400 p-2 my-2 rounded-md'>
                    <input type="text" name="bankName" id="" className='outline-none  w-full text-[12px]' value={formdata?.bankName} placeholder='FrostCold Bank' onChange={(e) => handleChange(e)} />
                </div>

                <p className='text-black text-[12px]'>Account Name</p>
                <div className='w-full flex border border-gray-400 p-2 my-2 rounded-md'>
                    <input type="text" name="accountName" id="" className='outline-none  w-full text-[12px]' value={formdata?.accountName} placeholder='James Amadi' onChange={(e) => handleChange(e)} />
                </div>
                <p className='text-black text-[12px]'>Account Number</p>
                <div className='w-full flex border border-gray-400 p-2 my-2 rounded-md'>
                    <input type="text" name="accountNumber" id="" className='outline-none w-full text-[12px]' value={formdata?.accountNumber} placeholder='0000000000' onChange={(e) => handleChange(e)} />
                </div>


                <div className='flex justify-end     space-x-2 my-3'>
                    <button className='font-african text-white text-[10px] bg-red-700 p-2 rounded-sm capitalize' onClick={() => dispatch(adminDeleteAccountAction(formdata))}>Delete</button>
                    <button className='font-african text-black border border-black  text-[10px] bg-white p-2 rounded-sm capitalize' onClick={() => setAdminDashBoardModal(null)}>Cancel</button>
                    <button className='font-african text-white text-[10px] bg-black p-2 rounded-sm capitalize' onClick={() => dispatch(updateAccountAction(formdata))}>Save Changes</button>
                </div>

            </div>


        </div>
    )
}

export default UpdateAccountDetailsModal