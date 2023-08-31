import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link, useNavigate } from 'react-router-dom'

const AddEmployee = () => {
    const navigate = useNavigate()
    const [employee, setEmployee] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
    })
    const changeHandler = (e) => {
        const value = e.target.value
        setEmployee({ ...employee, [e.target.name]: value })
    }
    const createEmployee = (e) => {
        e.preventDefault()
        EmployeeService.addEmployee(employee)
            .then(response => console.log(response))
            .catch(error => {
                console.log(error);
            })
        navigate('/employeeList')

    }
    const clearForm = (e) => {
        e.preventDefault()
        setEmployee({
            id: '',
            firstName: '',
            lastName: '',
            email: '',
        })
    }
    return (
        <div className='flex max-w-2xl shadow mt-5 border-b mx-auto'>
            <div className='px-8 py-8'>
                <div className='font-thin text-2xl tracking-wider'>
                    <h1>Add New Employee</h1>
                </div>
                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-gray-600 text-sm font-normal'>First Name</label>
                    <input className='h-10 w-96 border mt-2 px-2 py-2'
                        type='text' name='firstName'
                        value={employee.firstName} onChange={e => changeHandler(e)} />
                </div>
                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-gray-600 text-sm font-normal'>Last Name</label>
                    <input className='h-10 w-96 border mt-2 px-2 py-2'
                        type='text' name='lastName' value={employee.lastName}
                        onChange={e => changeHandler(e)} />
                </div>
                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-gray-600 text-sm font-normal'>Email</label>
                    <input className='h-10 w-96 border mt-2 px-2 py-2'
                        type='email' name='email' value={employee.email}
                        onChange={e => changeHandler(e)} />
                </div>
                <div className='items-center justify-center h-14 w-full my-4 mt-5 space-x-4'>
                    <button onClick={createEmployee} className='rounded text-white font-semibold py-2 px-6 bg-green-500 hover:bg-green-700'>Save</button>
                    <button onClick={clearForm} className='rounded text-white font-semibold py-2 px-6 bg-red-600 hover:bg-red-800'>Clear</button>
                    <button className='rounded text-white font-semibold py-2 px-6 bg-gray-600 hover:bg-gray-700'>
                        <Link to={'/employeeList'}>Home</Link></button>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee