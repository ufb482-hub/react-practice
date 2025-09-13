import React from 'react'
import studentdata from '../api/studentdata.json'
 export const StudentData = () => {
    return (
        <>
        <ol>
            {studentdata.map((student,index)=>{
                return(
                <li key={index}>
                     <p>ID :{student.id}</p>
                    <p>Name :{student.name}</p>
                    <p>Age :{student.age}</p>
                </li>)
            })}
        </ol>
        </>
    )
}


