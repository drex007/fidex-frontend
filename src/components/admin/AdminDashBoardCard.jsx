import React from 'react'

const AdminDashBoardCard = ({title, value}) => {
    return (
        <div className='bg-faq-bg-dark max-h-[150px] rounded-lg p-4 font-spacegrotesk'>
            <p className='text-white text-[12px]'>{title}</p>
            <p className='my-1 font-african text-white text-[12px]'>{value}</p>

        </div>
    )
}

export default AdminDashBoardCard