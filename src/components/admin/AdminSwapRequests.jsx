import React, { useContext, useState, useEffect } from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import AdminDashBoardCard from './AdminDashBoardCard';
import { BiEditAlt } from "react-icons/bi";
import { AppContext } from '../../ContextAPI';
import { allCoinToNGN, allDashBoardTranstion, allNGNToCoin, successfulSwapsRequest } from '../../adminPageConfig';
import { TbEyeShare } from "react-icons/tb";
import { addNetwork, confirmOrCancelModal, updateNetwork, updateSwapFee } from '../../modalConfigs';
import { CgSearch } from "react-icons/cg";
import { copy, tick, verify } from '../../assets';
import { useDispatch, useSelector } from 'react-redux';
import { getSwapRequestAction } from '../../Api/admin/admin.api';
import { GoChevronRight } from "react-icons/go";
import { formatCurrency, formatFullDateTime, Processing, Reversal, Success } from '../../constants';

const AdminSwapRequests = () => {
    const { dashboardTransactions, setDashboardTransactions, adminDashBoardModal, setAdminDashBoardModal, confirmCancel, setConfirmCancel } = useContext(AppContext)

    const { swapRequests } = useSelector(state => state.admin)
    const [currentPage, setCurrentPage] = useState(1)
    const dispatch = useDispatch()
    const [currentIndex, setCurrentIndex] = useState(-1)
    const [transactionsTableQuery, setTransactionsTableQuery] = useState({
        limit: 25,
        transactionType: null
    })

    const [goToPage, setgoToPage] = useState(0)
    const [currentTransaction, setCurrentTransaction] = useState(null)



    useEffect(() => {
        let transactionStatus = dashboardTransactions === successfulSwapsRequest ? Success : [Reversal, Processing]
        dispatch(getSwapRequestAction(
            {
                page: currentPage,
                limit: transactionsTableQuery?.limit,
                transactionStatus: transactionStatus,
                transationType: transactionsTableQuery?.transactionType
            }
        ))

    }, [currentPage, transactionsTableQuery?.limit, transactionsTableQuery.transactionType, adminDashBoardModal, dashboardTransactions])

    useEffect(() => {
        setDashboardTransactions(allDashBoardTranstion)
    }, [])


    const handleGoToPage = (e) => {
        setgoToPage(Number(e.target.value))
    }


    return (
        <div className='my-4 px-2 font-spacegrotesk bg-gray-50'>
            <div className='flex justify-between max-h-[200px] bg-white shadow-msm p-3'>
                <p></p>
                <div className='flex space-x-4 items-center'>
                    <div className='relative flex space-x-2'>
                        <IoIosNotificationsOutline size={30} />
                        <div className='absolute w-[10px] h-[10px] bg-red-600 rounded-full'></div>
                    </div>

                    <div className='flex items-center space-x-2'>
                        <div className='h-[30px] w-[30px] rounded-full bg-red-500'></div>
                        <p>Admin</p>

                    </div>

                </div>

            </div>


            <div className='flex justify-between px-2 py-4'>
                <p className='font-african my-4 text-[15px]'>TRANSACTION REQUESTS</p>
                <div className='flex justify-end'>

                </div>
            </div>





            <div className='flex w-full my-4 py-4 space-x-4'>
                <div className='w-9/12 min-h-[1000px]'>


                    {/* Table */}
                    <div className='bg-white shadow-lg w-full p-4'>
                        <div className='w-full flex'>
                            <div className='flex space-x-2 w-1/3 border  items-center border-gray-300 py-2 rounded-md px-2'>
                                <CgSearch size={25} className='cursor-pointer text-gray-300' />
                                <input type="text" name="" id="" className='w-full  outline-none  text-[15px]' placeholder='Search' />

                            </div>
                            <div className='flex justify-end space-x-2 w-2/3 text-[10px]'>
                                <button className={`${dashboardTransactions === allDashBoardTranstion ? "bg-black text-white" : "bg-white border text-black"} px-4 py-2 rounded-md capitalize font-african `} onClick={() => {

                                    setTransactionsTableQuery({ ...transactionsTableQuery, transactionType: null })
                                    setDashboardTransactions(allDashBoardTranstion)
                                }}>All</button>
                                <button className={`${dashboardTransactions === allCoinToNGN ? "bg-black text-white" : "bg-white border text-black"} px-4 py-2 rounded-md capitalize font-african `} onClick={() => {
                                    setTransactionsTableQuery({ ...transactionsTableQuery, transactionType: "Sell" })
                                    setDashboardTransactions(allCoinToNGN)
                                }}>Coin to Ngn</button>
                                <button className={`${dashboardTransactions === allNGNToCoin ? "bg-black text-white" : "bg-white border text-black"} px-4 py-2 rounded-md capitalize font-african `} onClick={() => {
                                    setTransactionsTableQuery({ ...transactionsTableQuery, transactionType: "Buy" })
                                    setDashboardTransactions(allNGNToCoin)
                                }}>NGN to coin</button>

                                <button className={`${dashboardTransactions === successfulSwapsRequest ? "bg-black text-white" : "bg-white border text-black"} px-4 py-2 rounded-md capitalize font-african `} onClick={() => {
                                    setTransactionsTableQuery({ ...transactionsTableQuery, transactionType: null })
                                    setDashboardTransactions(successfulSwapsRequest)
                                }}>Successful Transactions</button>

                            </div>



                        </div>
                        <div
                            className="relative flex flex-col w-full h-full my-8 text-gray-700  shadow-md rounded-xl bg-clip-border justify-between">
                            <div className='min-h-[600px] overflow-y-scroll'>
                                <table className="w-full text-left table-auto min-w-max font-spacegrotesk ">
                                    <thead className='text-[12px]'>
                                        <tr className='bg-gray-100'>

                                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                                <input type='checkbox' className="block font-spacegrotesk antialiased font-normal leading-none text-blue-gray-900 opacity-70" />

                                            </th>
                                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                                <p className="block font-spacegrotesk antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                                    Index
                                                </p>
                                            </th>
                                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                                <p className="block font-spacegrotesk antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                                    Email
                                                </p>
                                            </th>
                                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                                <p className="block font-spacegrotesk antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                                    Type
                                                </p>
                                            </th>
                                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                                <p className="block font-spacegrotesk antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                                    Amount
                                                </p>
                                            </th>
                                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                                <p className="block font-spacegrotesk antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                                    Date
                                                </p>
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className='text-[12px]'>
                                        {swapRequests?.data?.map((e, i) => <tr key={i}>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <input type='checkbox' className="block bg-black font-spacegrotesk  antialiased font-normal leading-normal text-blue-gray-900" checked={currentIndex === i} onClick={() => {
                                                    if (currentIndex === i) {
                                                        setCurrentTransaction(null)
                                                        setCurrentIndex(-1)

                                                    } else {
                                                        setCurrentTransaction(e)
                                                        setCurrentIndex(i)
                                                    }
                                                }} readOnly />
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <p className="block font-spacegrotesk text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                                    {currentPage === 1 ? i + 1 :( transactionsTableQuery?.limit * (currentPage - 1)) + (i + 1)}
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <p className="block font-spacegrotesk  antialiased font-normal leading-normal text-blue-gray-900">
                                                    {e?.email}
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <p className="block font-spacegrotesk  antialiased font-normal leading-normal text-blue-gray-900">
                                                    {e?.transactionType == "Sell" ? "Coin To NGN" : "NGN To Coin"}
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <p className="block font-spacegrotesk  antialiased font-normal leading-normal text-blue-gray-900">
                                                    {e?.transactionType == "Sell" ? formatCurrency(e?.amountReceived, "NGN") : formatCurrency(e?.amountPaid, "NGN")}
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <a href="#" className="block font-spacegrotesk antialiased font-medium leading-normal text-blue-gray-900">
                                                    {formatFullDateTime(e?.createdAt)}
                                                </a>
                                            </td>

                                        </tr>
                                        )}


                                    </tbody>
                                </table>
                            </div>

                            <div className='flex justify-between text-gray-700 p-4'>
                                <div>
                                    <p className='text-[12px]'>Showing 1 to {swapRequests?.data?.length} of {swapRequests?.pagination?.totalPages} entries</p>
                                </div>
                                <div className='flex items-center'>
                                    {swapRequests?.pagination?.hasPrevious && <button className='px-2 py-1 rounded-md text-[12px] bg-black text-white' onClick={() => {
                                        if (currentPage > 1) {
                                            setCurrentPage(currentPage - 1)
                                        }
                                    }
                                    }>Prev</button>}
                                    <div className='mx-2 flex items-center text-[10px]'>
                                        Page {currentPage} of {swapRequests?.pagination?.totalPages}
                                        {/* {[1, 2, 3, 4, 5, 6, 7].map((e, i) => <button className={`${currentPage === i + 1 ? "bg-black text-white" : ""} mx-1 px-2 text-gray-500 rounded-sm`} onClick={() => setCurrentPage(i + 1)} key={i}>{i + 1}</button>)} */}
                                        <div className='flex space-x-2 items-center border border-black  mx-2 rounded-sm'>
                                            <input type="number" min={1} name="" id="" className='[&::-webkit-inner-spin-button]:appearance-none w-[80px] outline-none  ml-3 px-2 py-1 italic' placeholder='Enter page' onChange={(e) => handleGoToPage(e)} />
                                            <GoChevronRight size={20} className='cursor-pointer' onClick={() => setCurrentPage(goToPage)} />
                                        </div>


                                    </div>
                                    {swapRequests?.pagination?.hasNext && <button className='px-2 py-1 rounded-md text-[12px] bg-black text-white' onClick={() => setCurrentPage(currentPage + 1)}>Next</button>}

                                </div>

                                <div className='flex text-[12px] items-center space-x-2'>
                                    <p>Showing Entries</p>
                                    <select name="pageSize" id="" className='bg-black text-white p-1 rounded-md' onChange={(e) => setTransactionsTableQuery({ ...transactionsTableQuery, limit: Number(e.target.value) })}>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="75">75</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
                {/* Netowlrks */}
                <div className='w-3/12 motion-rotate-in-12'>
                    <div className='w-full rounded-lg bg-white shadow-lg p-4 '>
                        <p className='font-african capitalize mb-3'>Transactions Details</p>

                        {/* NEtworks */}

                        {currentTransaction && <div>
                            <div className='my-1'>
                                <p className='text-[10px]  my-1'>Customer</p>
                                <div className='flex justify-between  border border-black py-1 items-center px-2 rounded-md '>
                                    <p className='text-[10px]'> {currentTransaction?.email}</p>
                                    <img src={tick} className='w-[20px]' />
                                </div>

                            </div>

                            <div className='my-1'>
                                <p className='text-[10px]  my-1'>Customer Name</p>
                                <div className='flex justify-between  border border-black py-2 px-2 rounded-md '>
                                    <p className='text-[10px]'>  {currentTransaction?.user?.firstName ? currentTransaction?.user?.firstName : "N/A"} {currentTransaction?.user?.lastName ? currentTransaction?.user?.lastName : "N/A"}</p>

                                </div>

                            </div>
                            <div className='my-1'>
                                <p className='text-[10px]   my-1'>Transaction ID</p>
                                <div className='flex justify-between  border border-black py-1 items-center px-2 rounded-md '>
                                    <p className='text-[10px]'> {currentTransaction?.transactionId}</p>
                                    <img src={copy} className='w-[20px]' />
                                </div>

                            </div>
                            <div className='my-1'>
                                <p className='text-[10px]   my-1'>Transaction Hash</p>
                                <div className='flex justify-between  border border-black py-1 items-center px-2 rounded-md w-full  '>
                                    <p className='text-[10px] w-5/6'>{currentTransaction?.transactionHash ? currentTransaction?.transactionHash : "N/A"}</p>
                                    <img src={copy} className='w-[20px]' />
                                </div>

                            </div>


                            <div className='my-1'>
                                <p className='text-[10px]  my-1'>Type</p>
                                <div className='flex justify-between  border border-black py-2 px-2 rounded-md '>
                                    <p className='text-[10px]'>  {currentTransaction?.transactionType == "Sell" ? "Coin To NGN" : "NGN To Coin"}</p>

                                </div>

                            </div>

                            <div className='my-1'>
                                <p className='text-[10px]  my-1'>Amount Received</p>
                                <div className='flex justify-between  border border-black py-2 px-2 rounded-md '>
                                    <p className='text-[10px]'> {currentTransaction?.transactionType == "Sell" ? formatCurrency(currentTransaction?.amountReceived, "NGN") : currentTransaction?.amountReceived}</p>

                                </div>

                            </div>

                            <div className='my-1'>
                                <p className='text-[10px]  my-1'>Amount To Pay</p>
                                <div className='flex justify-between  border border-black py-2 px-2 rounded-md '>
                                    <p className='text-[10px]'> {currentTransaction?.transactionType == "Sell" ? `${currentTransaction?.amountPaid} ${currentTransaction?.transactionAsset}` : formatCurrency(currentTransaction?.amountPaid, "NGN")}</p>

                                </div>

                            </div>

                            <div className='my-1'>
                                <p className='text-[10px]  my-1'>Asset</p>
                                <div className='flex justify-between  border border-black py-2 px-2 rounded-md '>
                                    <p className='text-[10px]'> {currentTransaction?.transactionAsset}</p>

                                </div>

                            </div>
                            <div className='my-1'>
                                <p className='text-[10px]  my-1'>Network</p>
                                <div className='flex justify-between  border border-black py-2 px-2 rounded-md '>
                                    <p className='text-[10px]'> {currentTransaction?.network}</p>

                                </div>

                            </div>
                            <div className='my-1'>
                                <p className='text-[10px]  my-1'>Wallet Address</p>
                                <div className='flex justify-between  border border-black py-2 px-2 rounded-md '>
                                    <p className='text-[9px]'> {currentTransaction?.walletAddress}</p>

                                </div>

                            </div>
                            <div className='my-1'>
                                <p className='text-[10px]  my-1'>Date</p>
                                <div className='flex justify-between  border border-black py-2 px-2 rounded-md '>
                                    <p className='text-[10px]'>{formatFullDateTime(currentTransaction?.createdAt)}</p>

                                </div>

                            </div>
                            {currentTransaction?.transactionType === "Buy" && <div>
                                <p className='text-[10px]  my-1'>Receiver Bank</p>
                                <div className='flex justify-between  border border-black py-2 px-2 rounded-md '>
                                    <p className='text-[10px]'>{currentTransaction?.receiverBank}</p>

                                </div>
                                <p className='text-[10px]  my-1'>Receiver Account Number</p>
                                <div className='flex justify-between  border border-black py-2 px-2 rounded-md '>
                                    <p className='text-[10px]'>{currentTransaction?.receiverAccountNumber}</p>

                                </div>
                                <p className='text-[10px]  my-1'>Receiver Account Name</p>
                                <div className='flex justify-between  border border-black py-2 px-2 rounded-md '>
                                    <p className='text-[10px]'>{currentTransaction?.receiverAccountName}</p>

                                </div>


                            </div>}

                            {currentTransaction?.transactionStatus !== Success && <div className='flex space-x-2'>
                                <button className=" px-2 py-2 my-3 text-[12px] rounded-md capitalize font-african bg-black text-white w-full" onClick={() => {
                                    setConfirmCancel({ ...confirmCancel, state: "confirm", transactionId: currentTransaction?.transactionId, transactionType: currentTransaction?.transactionType })
                                    setAdminDashBoardModal(confirmOrCancelModal)
                                }}>Confirm</button>
                                <button className=" px-2 py-2 my-3 text-[12px] rounded-md capitalize font-african bg-red-300 text-white w-full" onClick={() => {
                                    setConfirmCancel({ ...confirmCancel, state: "cancel", transactionId: currentTransaction?.transactionId, transactionType: currentTransaction?.transactionType })
                                    setAdminDashBoardModal(confirmOrCancelModal)
                                }}>Cancel</button>

                            </div>}


                        </div>}

                    </div>






                </div>

            </div>


        </div>
    )
}

export default AdminSwapRequests