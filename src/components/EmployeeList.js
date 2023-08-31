import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'
import Employee from './Employee'

const EmployeeList = () => {
    const [loading, setLoading] = useState(true)
    const [employees, setEmployees] = useState(null)

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            try {
                const response = await EmployeeService.getEmployees()
                setEmployees((response).data)
            } catch (error) {
                console.log(error);
            }
            setLoading(false)
        }
        getData()
    }, [])
    const deleteEmployee = (e, id) => {
        e.preventDefault()
        EmployeeService.deleteEmployee(id)
            .then(() => {
                if (employees) {
                    setEmployees(prevEmp => {
                        return prevEmp.filter(employee => employee.id !== id)
                    })
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='container mx-auto my-8'>
            <div className='h-12'>
                <button className='rounded font-semibold bg-slate-600 text-white px-6 py-2'>
                    <Link to={"/addEmployee"}>Add Employee</Link>
                </button>
            </div>
            <div className='flex shadow border-b'>
                <table className='min-w-full'>
                    <thead className=' bg-gray-50'>
                        <tr>
                            <th className='text-left font-medium text-gray-500 uppercase px-6 py-3 tracking-wider'>First Name</th>
                            <th className='text-left font-medium text-gray-500 uppercase px-6 py-3 tracking-wider'>Last Name</th>
                            <th className='text-left font-medium text-gray-500 uppercase px-6 py-3 tracking-wider'>Email</th>
                            <th className='text-right font-medium text-gray-500 uppercase px-6 py-3 tracking-wider'>Actions</th>
                        </tr>
                    </thead>
                    {!loading && (
                        <tbody className='bg-white'>
                            {employees.map((employee) => (
                                <Employee employee={employee} deleteEmployee={deleteEmployee} key={employee.id} />
                            ))}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    )
}

export default EmployeeList