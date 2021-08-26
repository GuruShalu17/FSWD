import React, {useEffect,useState} from 'react'

function GetApi() {

    const [data,setData]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3004/students').then((result)=>{
            result.json().then((resp)=>{
                setData(resp)
            })
        })
    })

    return (
        <>
           <h1>get Api</h1> 
           <table border="1">
               <tr>
                   <td>id</td>
                   <td>name</td>
                   <td>beverage</td>
               </tr>

        {
            data.map((stu)=><tr>
                <td>{stu.id}</td>
                <td>{stu.name}</td>
                <td>{stu.beverage}</td>
            </tr>)
        }       
           </table>
        </>
    )
}

export default GetApi
