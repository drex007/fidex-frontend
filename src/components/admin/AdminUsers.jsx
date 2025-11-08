import React, { useContext, useState, useEffect } from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import { AppContext } from '../../ContextAPI';
import { CgSearch } from "react-icons/cg";
import { tick } from '../../assets';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsersAction } from '../../Api/admin/admin.api';
import { GoChevronRight } from "react-icons/go";
import { formatFullDateTime } from '../../constants';

const AdminUsers = () => {
    const { dashboardTransactions, setDashboardTransactions, adminDashBoardModal, setAdminDashBoardModal } = useContext(AppContext)
    const { users } = useSelector(state => state.admin)
    const trans = [1, 2, 3, 4, 5, 6, 2, 3, 4]
    const [currentPage, setCurrentPage] = useState(1)
    const [currentIndex, setCurrentIndex] = useState(-1)
    const [currentSelectedUser, setCurrentSelectedUser] = useState(null)

    const [usersTableQuery, setUsersTableQuery] = useState({
        limit: 25,
    })

    const [goToPage, setgoToPage] = useState(0)

    const dispatch = useDispatch()



    const handleGoToPage = (e) => {
        setgoToPage(Number(e.target.value))
    }
    useEffect(() => {
        dispatch(getAllUsersAction({
            page: currentPage,
            limit: usersTableQuery?.limit
        }))
    }, [currentPage, usersTableQuery?.limit])
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

            <p className='font-african  text-[15px] my-2'>Users</p>

            <div className='flex w-full my-1 py-2 space-x-4'>
                <div className='w-9/12'>

                    {/* Table */}
                    <div className='bg-white shadow-lg w-full p-4'>
                        <div className='w-full flex'>
                            <div className='flex space-x-2 w-1/3 border  items-center border-gray-300 py-2 rounded-md px-2'>
                                <CgSearch size={25} className='cursor-pointer text-gray-300' />
                                <input type="text" name="" id="" className='w-full  outline-none  text-[15px]' placeholder='Search' />

                            </div>


                        </div>
                        <div
                            className="relative flex flex-col w-full h-full my-2 text-gray-700  shadow-md rounded-xl bg-clip-border justify-between">
                            <div className='min-h-[400px] overflow-y-scroll'>
                                <table className="w-full text-left table-auto min-w-max font-spacegrotesk">
                                    <thead className='text-[12px]'>
                                        <tr className='bg-gray-100'>
                                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                                <input type='checkbox' className="block font-spacegrotesk antialiased font-normal leading-none text-blue-gray-900 opacity-70" />

                                            </th>
                                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                                index

                                            </th>
                                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                                <p className="block font-spacegrotesk antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                                    Email
                                                </p>
                                            </th>
                                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                                <p className="block font-spacegrotesk antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                                    FirstName
                                                </p>
                                            </th>
                                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                                <p className="block font-spacegrotesk antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                                    LastName
                                                </p>
                                            </th>
                                            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                                <p className="block font-spacegrotesk antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                                    Date Joined
                                                </p>
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className='text-[12px]'>
                                        {users?.data?.map((e, i) => <tr key={i}>

                                            <td className="p-4 border-b border-blue-gray-50">
                                                <input type='checkbox' className="block bg-black font-spacegrotesk text-sm antialiased font-normal leading-normal text-blue-gray-900" onClick={() => {
                                                    if (currentIndex === i) {
                                                        setCurrentIndex(-1)
                                                        setCurrentSelectedUser(null)

                                                    } else {
                                                        setCurrentSelectedUser(e)
                                                        setCurrentIndex(i)
                                                    }
                                                }} checked={currentIndex === i} readOnly />
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
                                                    {e?.firstName ? e?.firstName : "N/A"}
                                                </p>
                                            </td>
                                            <td className="p-4 border-b border-blue-gray-50">
                                                <p className="block font-spacegrotesk antialiased font-normal leading-normal text-blue-gray-900">
                                                    {e?.lastName ? e?.lastName : "N/A"}
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
                                    <p className='text-[12px]'>Showing 1 to {users?.data?.length} of {users?.pagination?.totalPages} entries</p>
                                </div>
                                <div className='flex items-center'>
                                    {users?.pagination?.hasPrevious && <button className='px-2 py-1 rounded-md text-[12px] bg-black text-white' onClick={() => {
                                        if (currentPage > 1) {
                                            setCurrentPage(currentPage - 1)
                                        }
                                    }
                                    }>Prev</button>}
                                    <div className='mx-2 flex items-center text-[10px]'>
                                        Page {currentPage} of {users?.pagination?.totalPages}
                                        {/* {[1, 2, 3, 4, 5, 6, 7].map((e, i) => <button className={`${currentPage === i + 1 ? "bg-black text-white" : ""} mx-1 px-2 text-gray-500 rounded-sm`} onClick={() => setCurrentPage(i + 1)} key={i}>{i + 1}</button>)} */}
                                        <div className='flex space-x-2 items-center border border-black  mx-2 rounded-sm'>
                                            <input type="number" min={1} name="" id="" className='[&::-webkit-inner-spin-button]:appearance-none w-[80px] outline-none  ml-3 px-2 py-1 italic' placeholder='Enter page' onChange={(e) => handleGoToPage(e)} />
                                            <GoChevronRight size={20} className='cursor-pointer' onClick={() => setCurrentPage(goToPage)} />
                                        </div>


                                    </div>
                                    {users?.pagination?.hasNext && <button className='px-2 py-1 rounded-md text-[12px] bg-black text-white' onClick={() => setCurrentPage(currentPage + 1)}>Next</button>}

                                </div>

                                <div className='flex text-[12px] items-center space-x-2'>
                                    <p>Showing Entries</p>
                                    <select name="pageSize" id="" className='bg-black text-white p-1 rounded-md' onChange={(e) => setUsersTableQuery({ ...usersTableQuery, limit: Number(e.target.value) })}>
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
                        <p className='font-african capitalize mb-3'>User Details</p>

                        {/* NEtworks */}

                        {currentSelectedUser && <div>
                            <div className='my-1'>
                                <p className='text-[11px]  my-1'>Email</p>
                                <div className='flex justify-between  border border-black py-1 items-center px-2 rounded-md '>
                                    <p className='text-[11px]'> {currentSelectedUser?.email}</p>
                                    {currentSelectedUser?.isVerified && <img src={tick} className='w-[20px]' />}
                                </div>

                            </div>
                            <div className='my-1'>
                                <p className='text-[11px]   my-1'>First Name</p>
                                <div className='flex justify-between  border border-black py-1 items-center px-2 rounded-md '>
                                    <p className='text-[11px]'>  {currentSelectedUser?.firstName ? currentSelectedUser?.firstName : "N/A"}</p>

                                </div>

                            </div>
                            <div className='my-1'>
                                <p className='text-[11px]   my-1'>Last Name</p>
                                <div className='flex justify-between  border border-black py-1 items-center px-2 rounded-md '>
                                    <p className='text-[11px]'> {currentSelectedUser?.lastName ? currentSelectedUser?.lastName : "N/A"}</p>

                                </div>

                            </div>
                            <div className='my-1'>
                                <p className='text-[11px]   my-1'>ID Type </p>
                                <div className='flex justify-between  border border-black py-1 items-center px-2 rounded-md '>
                                    <p className='text-[11px]'> {currentSelectedUser?.idType ? currentSelectedUser?.idType : "N/A"}</p>

                                </div>

                            </div>
                            <div className='my-1'>
                                <p className='text-[11px]   my-1'>ID Number</p>
                                <div className='flex justify-between  border border-black py-1 items-center px-2 rounded-md '>
                                    <p className='text-[11px]'> {currentSelectedUser?.idNumber ? currentSelectedUser?.idNumber : "N/A"}</p>

                                </div>

                            </div>


                            {/* <div className='my-1'>
                                <p className='text-[11px]  my-1'>Bank Name</p>
                                <div className='flex justify-between  border border-black py-2 px-2 rounded-md '>
                                    <p className='text-[11px]'>Fk</p>

                                </div>

                            </div>

                            <div className='my-1'>
                                <p className='text-[11px]  my-1'>Account Name</p>
                                <div className='flex justify-between  border border-black py-2 px-2 rounded-md '>
                                    <p className='text-[11px]'> James Aminu Bashir</p>

                                </div>

                            </div>
                            <div className='my-1'>
                                <p className='text-[11px]   my-1'>Account Number</p>
                                <div className='flex justify-between  border border-black py-1 items-center px-2 rounded-md '>
                                    <p className='text-[11px]'>0000000000</p>
                                    <img src={copy} className='w-[20px]' />
                                </div>

                            </div> */}




                        </div>}

                    </div>






                </div>

            </div>


        </div>
    )
}

export default AdminUsers