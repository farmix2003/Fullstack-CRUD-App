import React from 'react'
import { useNavigate } from 'react-router-dom'

const Employee = ({ employee, deleteEmployee }) => {
    const navigate = useNavigate()
    const editEmployee = (e, id) => {
        e.preventDefault()
        console.log("Edit Employee ID:", employee.id);
        navigate(`/editEmployee/${id}`)
    }
    return (
        <>
            <tr key={employee.id}>
                <td className='text-left px-6 py-4 whitespace-nowrap'>
                    <div className='text-gray-500 text-sm'>
                        {employee.firstName}
                    </div>
                </td>
                <td className='text-left px-6 py-4 whitespace-nowrap'>
                    <div className='text-gray-500 text-sm'>
                        {employee.lastName}
                    </div>
                </td>
                <td className='text-left px-6 py-4 whitespace-nowrap'>
                    <div className='text-gray-500 text-sm'>
                        {employee.email}
                    </div>
                </td>
                <td className='text-right px-6 py-4 whitespace-nowrap'>
                    <a onClick={(e, id) => editEmployee(e, employee.id)} className=' cursor-pointer font-medium text-sm px-4 text-indigo-600 hover:text-indigo-800'>Edit</a>
                    <a onClick={(e, id) => deleteEmployee(e, employee.id)} className=' cursor-pointer font-medium text-sm text-red-600 hover:text-red-800'>Delete</a>
                </td>
            </tr >
        </>
    )
}

export default Employee