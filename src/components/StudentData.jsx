import React from 'react'
import studentdata from '../api/studentdata.json'
import './StudentData.css'
 export const StudentData = () => {
    return (
        <>
        <ol className='order-list'>
            {studentdata.map((student,index)=>{
                return(
                <li key={index} className='lists'>
                     <p className='id'>ID :{student.id}</p>
                    <p className='name'>Name :{student.name}</p>
                    <p className='age'>Age :{student.age}</p>
                </li>)
            })}
        </ol>
        </>
    )
}


