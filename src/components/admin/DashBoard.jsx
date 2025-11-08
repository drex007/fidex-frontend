import React, { useContext, useState, useEffect } from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import AdminDashBoardCard from './AdminDashBoardCard';
import { BiEditAlt } from "react-icons/bi";
import { AppContext } from '../../ContextAPI';
import { allCoinToNGN, allDashBoardTranstion, allNGNToCoin } from '../../adminPageConfig';
import { TbEyeShare } from "react-icons/tb";
import { addAccountDetails, addNetwork, completeTransactionModal, updateAccountDetails, updateNetwork, updateSwapFee } from '../../modalConfigs';
import { CgSearch } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import { adminGetAccountAction, adminGetFeeAction, fetchNetworksAction, getAdminAnalyticsAction, getTransactionsActions } from '../../Api/admin/admin.api';
import { useDispatch, useSelector } from 'react-redux';
import { formatCurrency, formatFullDateTime, nairaSymbol } from '../../constants';
import { GoChevronRight } from "react-icons/go";

const DashBoard = () => {
    const { dashboardTransactions, setDashboardTransactions, adminDashBoardModal, setAdminDashBoardModal, setCurrentAccount, setCurrentNetwork, setCompleteTransactionModalState } = useContext(AppContext)
    const { adminAccounts, adminFee, networks, analytics, transactionsState } = useSelector(state => state.admin)

    const [currentPage, setCurrentPage] = useState(1)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [goToPage, setgoToPage] = useState(0)
    const [currentSelectedIndex, setcurrentSelectedIndex] = useState(-1)


    const [transactionsTableQuery, setTransactionsTableQuery] = useState({
        limit: 25,
        transactionType: null,
        from: null,
        to: null
    })







    useEffect(() => {
        dispatch(adminGetAccountAction())
        dispatch(adminGetFeeAction())
        dispatch(fetchNetworksAction())
        dispatch(getAdminAnalyticsAction())

    }, [adminDashBoardModal])



    useEffect(() => {
        dispatch(getTransactionsActions(
            {
                page: currentPage,
                limit: transactionsTableQuery?.limit,
                transactionStatus: "Success",
                transationType: transactionsTableQuery?.transactionType,
                from: transactionsTableQuery?.from,
                to: transactionsTableQuery?.to
            }
        ))

    }, [currentPage, transactionsTableQuery?.limit, transactionsTableQuery.transactionType])

    useEffect(() => {
        setDashboardTransactions(allDashBoardTranstion)
    }, [])

    useEffect(() => {
        const getUser = localStorage.getItem("user")
        if (!getUser) navigate("/login")

    }, [])

    const handleGoToPage = (e) => {
        setgoToPage(Number(e.target.value))
    }

    useEffect(() => {

    }, [transactionsTableQuery?.from, transactionsTableQuery?.to])




    return (
        <div className='my-4 px-2 font-spacegrotesk bg-gray-50'>
            <div>
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
                <div className='flex justify-between items-center'>
                    <p className='font-african my-4 text-[15px]'>HOME</p>
                    <div className='bg-white rounded-md p-1'>
                        <input type="date" name="from" id="" className='p-1' onChange={(e) => setTransactionsTableQuery(
                            { ...transactionsTableQuery, from: e.target.value }
                        )} />
                        -
                        <input type="date" name="to" className='p-1'

                            onChange={(e) => {

                                setTransactionsTableQuery(
                                    { ...transactionsTableQuery, to: e.target.value }
                                )

                                if (transactionsTableQuery?.from !== null) {

                                    dispatch(getTransactionsActions(
                                        {
                                            page: currentPage,
                                            limit: transactionsTableQuery?.limit,
                                            transactionStatus: "Success",
                                            transationType: transactionsTableQuery?.transactionType,
                                            from: transactionsTableQuery?.from,
                                            to: transactionsTableQuery?.to
                                        }
                                    ))
                                }

                            }}

                        />


                    </div>
                </div>

                <div className='min-h-[300px] w-full bg-white rounded-lg shadow-lg p-4'>
                    <p className='font-african my-4 text-[15px]'>SWAP ANALYTICS</p>
                    <div className='grid grid-cols-4 gap-3'>
                        <AdminDashBoardCard title={"Total Transactions"} value={analytics?.totalCount} />
                        <AdminDashBoardCard title={"Pending Transactions"} value={analytics?.processingCount} />
                        <AdminDashBoardCard title={"Successful Transactions"} value={analytics?.successCount} />
                        <AdminDashBoardCard title={"Cancelled Transactions"} value={analytics?.reversalCount} />
                        <AdminDashBoardCard title={"Total Number Of Users"} value={analytics?.users} />
                        <AdminDashBoardCard title={"Average Transaction Time"} value={`${parseFloat(analytics?.averageCompletionTimeMinutes).toFixed(2)} mins`} />
                        <AdminDashBoardCard title={"Total Revenue Earned"} value={`${nairaSymbol} ${formatCurrency(analytics?.revenue, "NGN")}`} />
                        <AdminDashBoardCard title={"Total Amount Transacted"} value={`${nairaSymbol} ${formatCurrency(analytics?.totalTransaction, "NGN")}`} />


                    </div>


                </div>
                <div className='w-1/3 mt-2'>
                    <button className='w-1/2 py-2 font-african capitalize border border-black rounded-md my-3' onClick={() => setAdminDashBoardModal(addAccountDetails)}>Add Account</button>
                </div>

            </div>

            <div>
                <div className='flex w-full my-4 py-4 space-x-4'>
                    <div className='w-9/12'>
                        <div className='w-full flex space-x-4 '>
                            <div className='w-1/2 rounded-lg  max-h-[200px] overflow-y-scroll shadow-lg p-1 flex flex-col justify-between'>
                                {adminAccounts?.map((e, i) => <div className='bg-white my-2 p-3 rounded-md' key={i}>

                                    <div>
                                        <p className='font-african capitalize mb-3'>Account Details</p>
                                        <p className='my-1 text-[12px]'>Bank Name : {e?.bankName}</p>
                                        <p className='my-1 text-[12px]'>Account Name : {e?.accountName}</p>
                                        <p className='my-1 text-[12px]'>Account Number : {e?.accountNumber} </p>
                                    </div>

                                    <button className='w-full py-2 font-african capitalize border border-black rounded-md my-3' onClick={() => {
                                        setCurrentAccount(e)
                                        setAdminDashBoardModal(updateAccountDetails)

                                    }}>Change Details</button>

                                </div>)}
                            </div>
                            <div className='w-1/2 rounded-lg bg-white shadow-lg p-4  flex flex-col justify-between'>
                                <div>
                                    <p className='font-african capitalize mb-3'>Swap Fee</p>
                                    <p className='my-1 text-[12px]'>Current Fee Percent : {adminFee ? adminFee[0]?.fee * 100 : "0"}  %</p>
                                    <p className='my-1 text-[12px]'>Current Platform Fee : {adminFee ? adminFee[0]?.fixedRate : "0"} USDT</p>
                                </div>
                                <button className='w-full py-2 font-african capitalize border border-black rounded-md my-3' onClick={() => setAdminDashBoardModal(updateSwapFee)}>Change Details</button>

                            </div>

                        </div>

                        {/* Table */}
                        <div className='bg-white w-full p-4 mt-10'>
                            <div className='w-full flex'>
                                <div className='flex space-x-2 w-1/3 border  items-center border-gray-200 py-2 rounded-md px-2'>
                                    <CgSearch size={25} className='cursor-pointer text-gray-300' />
                                    <input type="text" name="" id="" className='w-full  outline-none  text-[12px] italic' placeholder='Search by email' />

                                </div>
                                <div className='flex justify-end space-x-2 w-2/3'>
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

                                </div>



                            </div>
                            <div
                                className="flex flex-col w-full h-full my-8 text-gray-700  shadow-md rounded-xl bg-clip-border min-h-[500px] overflow-y-scroll justify-between">
                                <table className="w-full text-left table-auto min-w-max font-spacegrotesk ">
                                    <thead className='text-[12px] '>
                                        <tr className='bg-gray-100'>
                                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                                <input type='checkbox' className="block font-spacegrotesk antialiased font-normal leading-none text-blue-gray-900 opacity-70" />

                                            </th>
                                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                                <p>Index</p>

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
                                                    Time & Date Created
                                                </p>
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className='text-[12px]  '>
                                        {transactionsState?.data?.map((e, i) => <tr key={i}>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <input type='checkbox' className="block bg-black font-spacegrotesk antialiased font-normal leading-normal text-blue-gray-900" checked={currentSelectedIndex === i} onClick={() => {
                                                    // if(currentSelectedIndex === i){


                                                    // }
                                                    setCompleteTransactionModalState(e)

                                                    setAdminDashBoardModal(completeTransactionModal)

                                                }} readOnly />
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                {currentPage === 1 ? i + 1 : (transactionsTableQuery?.limit * (currentPage - 1)) + (i + 1)}
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <p className="block font-spacegrotesk antialiased font-normal leading-normal text-blue-gray-900">
                                                    {e?.email}
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <p className="block font-spacegrotesk antialiased font-normal leading-normal text-blue-gray-900">
                                                    {e?.transactionType == "Sell" ? "Coin To NGN" : "NGN To Coin"}
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <p className="block font-spacegrotesk antialiased font-normal leading-normal text-blue-gray-900">
                                                    {e?.transactionType == "Sell" ? `${nairaSymbol} ${formatCurrency(e?.amountReceived, "NGN")}` : `${nairaSymbol} ${e?.amountPaid}`}
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <p href="#" className="block font-spacegrotesk antialiased font-medium leading-normal text-blue-gray-900">

                                                    {formatFullDateTime(e?.createdAt)}
                                                </p>
                                            </td>

                                        </tr>
                                        )}


                                    </tbody>
                                </table>

                                <div className='flex justify-between text-gray-700 p-4 '>
                                    <div>
                                        <p className='text-[12px]'>Showing 1 to {transactionsState?.data?.length} of {transactionsState?.pagination?.totalPages} entries</p>
                                    </div>
                                    <div className='flex items-center'>
                                        {transactionsState?.pagination?.hasPrevious && <button className='px-2 py-1 rounded-md text-[12px] bg-black text-white' onClick={() => {
                                            if (currentPage > 1) {
                                                setCurrentPage(currentPage - 1)
                                            }
                                        }
                                        }>Prev</button>}
                                        <div className='mx-2 flex items-center text-[10px]'>
                                            Page {currentPage} of {transactionsState?.pagination?.totalPages}
                                            {/* {[1, 2, 3, 4, 5, 6, 7].map((e, i) => <button className={`${currentPage === i + 1 ? "bg-black text-white" : ""} mx-1 px-2 text-gray-500 rounded-sm`} onClick={() => setCurrentPage(i + 1)} key={i}>{i + 1}</button>)} */}
                                            <div className='flex space-x-2 items-center border border-black  mx-2 rounded-sm'>
                                                <input type="number" min={1} name="" id="" className='[&::-webkit-inner-spin-button]:appearance-none w-[80px] outline-none  ml-3 px-2 py-1 italic' placeholder='Enter page' onChange={(e) => handleGoToPage(e)} />
                                                <GoChevronRight size={20} className='cursor-pointer' onClick={() => setCurrentPage(goToPage)} />
                                            </div>


                                        </div>
                                        {transactionsState?.pagination?.hasNext && <button className='px-2 py-1 rounded-md text-[12px] bg-black text-white' onClick={() => setCurrentPage(currentPage + 1)}>Next</button>}

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
                    <div className='w-3/12'>
                        <div className='w-full rounded-lg bg-white shadow-lg p-4'>
                            <p className='font-african capitalize mb-3'>Networks</p>
                            <div className='bg-faq-bg-dark w-1/2 flex rounded-lg my-8 ml-auto'>
                                <div className='flex items-center py-2  justify-center w-full cursor-pointer' onClick={() => setAdminDashBoardModal(addNetwork)}>
                                    <p className='font-semibold text-[15px] text-white mx-1'> +</p>
                                    <button className='font-african text-white text-[10px]'>Network</button>
                                </div>
                            </div>

                            {/* NEtworks */}

                            <div>
                                {networks?.map((e, i) => <div className='p-4 border border-black rounded-lg my-3' key={i}>
                                    <div className='flex justify-between  '>
                                        <p className='font-semibold text-[10px]'> {e?.networkName}</p>
                                        <BiEditAlt onClick={() => {
                                            setCurrentNetwork(e)
                                            setAdminDashBoardModal(updateNetwork)
                                        }} className='cursor-pointer' />
                                    </div>
                                    <p className='text-[10px] font-semibold'>{e?.assetName}</p>
                                    <p className='text-[12px]'>{e?.walletAddress.slice(0, 5)}.....{e?.walletAddress.slice(10, -13)}</p>

                                </div>)}

                            </div>

                        </div>






                    </div>

                </div>

            </div>

        </div>
    )
}

export default DashBoard