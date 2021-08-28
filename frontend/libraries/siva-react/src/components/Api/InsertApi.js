import React, {useState} from 'react'

function InsertApi() {

    const [name, setName] = useState("")
    const [beverage, setBeverage] = useState("")

function saveUser(){

    let data = {name,beverage} 

    fetch('http://localhost:3004/students',{
        method : 'post',
        headers : {
            'Accept':'application/json',
            'Content-type':'application/json'
        },
        body:JSON.stringify(data)
    }).then((result)=>{
        console.warn(result)
        result.json().then((resp)=>{
            console.warn(resp)
        })
    })

}

 
    return (
        <div>
            <h1>Im the Inserter</h1>

<input type="text" value={name} name="name" onChange={(e)=>{setName(e.target.value)}} />
<input type="text" value={beverage} name="beverage" onChange={(e)=>{setBeverage(e.target.value)}}/>
<button onClick={saveUser}>Click to Create New User</button>


        </div>
    )
}

export default InsertApi
