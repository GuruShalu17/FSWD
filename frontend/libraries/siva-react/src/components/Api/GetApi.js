import React, {useEffect,useState} from 'react'

function GetApi() {

    const [data,setData]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3004/students').then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
                setData(resp)
            })
        })
    },[])

    return (
        <>
           <h1>Data Fetch</h1> 
           <table border="1">
               <tr>
                   <td>id</td>
                   <td>name</td>
                   <td>beverage</td>
               </tr>

        {
            data.map((item)=><tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.beverage}</td>
            </tr>)
        }       
           </table>
        </>
    )
}

export default GetApi
