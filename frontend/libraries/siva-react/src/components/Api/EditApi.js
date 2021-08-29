import React, {useEffect,useState} from 'react'
import InsertApi from './InsertApi';

function EditApi() {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [beverage, setBeverage] = useState("")
    const [DD,setD]=useState();

    const [data,setData]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3004/students').then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
                setData(resp)
            })
        })
    },[])

    
function deleted(id){
    console.log(id)
    fetch(`http://localhost:3004/students/${id}`,{
        method:'delete',
    }).then((res)=>{
        res.json().then((res1)=>{
            setD(res1);
          
        })
    })

}

    function selectuser(id){
        console.log(data[id-1])
        setId (data[id-1].id)
        setName (data[id-1].name)
        setBeverage (data[id-1].beverage)
    }

    function updateuser(){
        console.log(name,beverage,id)
    
        let data = {name,beverage,id} 
    
        fetch(`http://localhost:3004/students/${id}`,{
            method : 'PUT',
            headers : {
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            console.warn(result)
            result.json().then((resp)=>{
                // console.warn(resp)
            })
        })
    
    }
    

    return (
        <>
            <h1>Edit Tables</h1>
            <table border="1">
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>beverage</td>
                </tr>

                {
                    data.map((item)=>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.beverage}</td>
                            <td><button onClick={()=>{deleted(item.id)}}>Delete It</button></td>
                            <td><button onClick={()=>{selectuser(item.id)}}>Update Now</button></td>
                            
                        </tr>
                    )
                }

            </table>

            <h1>Im the Updater</h1>    
            <input type="text" value={name} name="name" onChange={(e)=>{setName(e.target.value)}} />
            <input type="text" value={beverage} name="beverage" onChange={(e)=>{setBeverage(e.target.value)}}/>
            <button onClick={updateuser}>Click to Update User</button>
        




            <InsertApi/>
        </>
    )
}

export default EditApi
