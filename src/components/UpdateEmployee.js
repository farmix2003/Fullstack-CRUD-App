import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const UpdateEmployee = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [employee, setEmployee] = useState({
        id: id,
        firstName: '',
        lastName: '',
        email: '',
    })
    const changeHandler = (e) => {
        const value = e.target.value
        setEmployee({ ...employee, [e.target.name]: value })
    }
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await EmployeeService.getEmployeeById(id)
                setEmployee(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [])
    const updateEmployee = (e) => {
        e.preventDefault()
        EmployeeService.updateEmployee(employee.id, employee)
            .then(() => {
                navigate("/employeeList")
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='flex max-w-2xl shadow mt-5 border-b mx-auto'>
            <div className='px-8 py-8'>
                <div className='font-thin text-2xl tracking-wider'>
                    <h1>Update Employee</h1>
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
                    <button onClick={updateEmployee} className='rounded text-white font-semibold py-2 px-6 bg-green-500 hover:bg-green-700'>Update</button>
                    <button onClick={() => navigate("/employeeList")} className='rounded text-white font-semibold py-2 px-6 bg-red-600 hover:bg-red-800'>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateEmployee