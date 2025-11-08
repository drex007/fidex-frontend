import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../ContextAPI'
import { useDispatch, useSelector } from 'react-redux'
import { updateTransactionFeeAction } from '../../Api/admin/admin.api'


const UpdateSwapFeeModal = () => {
    const { adminDashBoardModal, setAdminDashBoardModal } = useContext(AppContext)
    const { adminFee } = useSelector(state => state.admin)
    const dispatch = useDispatch()
    const [formdata, setFormdata] = useState({
        fee: 0,
        fixedRate: 0,
        id: "",
        setAdminDashBoardModal: setAdminDashBoardModal
    })

    useEffect(() => {
        setFormdata({ ...formdata, id: adminFee[0]?.id, fixedRate: adminFee[0]?.fixedRate, fee: adminFee[0]?.fee * 100 })

    }, [])


    const handleChange = (e) => {

        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }
    return (
        <div className='fixed grid h-[100%] z-20 bg-modal-bg place-items-center w-full backdrop-blur-sm lg:px-0 px-4 top-0 font-spacegrotesk'>
            <div className='bg-white shadow-2xl min-h-[200px] rounded-md w-2/6 p-4'>
                <p className='font-african my-3 '>Swap Fee Details</p>
                <p className='text-[14px] my-3'>Swap Fee - <span className='text-red-500 italic text-[12px]'>Add the percentage you want e.g 10 for 10%</span></p>

                <div className='w-full flex border border-gray-400 p-2'>
                    <input type="number" min={0} inputMode='numeric' name="fee" id="" className='outline-none w-4/5' placeholder='0.003' onChange={(e) => handleChange(e)} />
                    <p className='text-gray-400'>%</p>
                </div>
                <p className='my-2 '>Update FixedRate</p>
                <div className='w-full flex border border-gray-400 p-2 my-2'>
                    <input type="number" min={0} inputMode='numeric' name="fixedRate" id="" className='outline-none w-4/5' placeholder='' onChange={(e) => handleChange(e)} />
                    <p className='text-gray-400'>USDT</p>
                </div>
                <div className='flex justify-end     space-x-2 my-3'>
                    <button className='font-african text-black border border-black  text-[10px] bg-white p-2 rounded-sm capitalize' onClick={() => setAdminDashBoardModal(null)}>Cancel</button>
                    <button className='font-african text-white text-[10px] bg-black p-2 rounded-sm capitalize' onClick={() => dispatch(updateTransactionFeeAction(formdata))}>Save Changes</button>
                </div>

            </div>


        </div>
    )
}

export default UpdateSwapFeeModal