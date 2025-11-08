import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../ContextAPI'
import { useDispatch } from 'react-redux'
import { addNetworkAssetAction, adminUpdateTransactionAction } from '../../Api/admin/admin.api'
import { Reversal, Success } from '../../constants'


const ConfirmOrCancelTransactionModal = () => {
    const { adminDashBoardModal, setAdminDashBoardModal, confirmCancel, setConfirmCancel } = useContext(AppContext)
    const dispatch = useDispatch()

    const [formdata, setFormdata] = useState({
        transactionStatus: null,
        transactionHash: "",
        setAdminDashBoardModal: setAdminDashBoardModal
    })

    const handleChange = (e) => {
        setFormdata({
            ...formdata, [e.target.name]: e.target.value
        })
    }


    useEffect(() => {
        if (confirmCancel?.state == "confirm") {
            setFormdata({ ...formdata, transactionStatus: Success })
        } else {
            setFormdata({ ...formdata, transactionStatus: Reversal })
        }


    }, [])

    return (
        <div className='fixed grid h-[100%] z-20 bg-modal-bg place-items-center w-full backdrop-blur-sm lg:px-0 px-4 top-0 font-spacegrotesk'>
            <div className='bg-white shadow-2xl min-h-[100px] rounded-md w-2/6 p-4'>
                <p className='font-african my-3 '>{confirmCancel?.state === "confirm" ? "Do you wish to Confirm ?" : "Do you wish to Cancel ?"}</p>
                {confirmCancel?.state === "confirm" && confirmCancel?.transactionType === "Sell" && <input type="text" name='transactionHash' className='w-full border border-black outline-none my-3 h-[40px] italic px-3 text-[12px]' placeholder='Enter Transaction Hash' onChange={(e) => handleChange(e)} />
                }


                <div className='flex justify-end     space-x-2 my-3'>
                    <button className='font-african text-white text-[10px] bg-black py-2 px-4 rounded-sm capitalize' onClick={() => {
                        if(confirmCancel?.transactionType === "Buy"){
                            delete formdata?.transactionHash // Remove transactionHash because its the end user that updates this during a Buy Order
                        }

                        dispatch(adminUpdateTransactionAction({
                            formdata: formdata,
                            transactionId: confirmCancel?.transactionId
                        }))
                    }}>YES</button>
                    <button className='font-african text-black border border-black  text-[10px] bg-white py-2 px-4 rounded-sm capitalize' onClick={() => setAdminDashBoardModal(null)}>NO</button>
                </div>

            </div>


        </div>
    )
}

export default ConfirmOrCancelTransactionModal