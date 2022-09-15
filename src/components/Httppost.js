import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Httppost() {
    const [data, setData] = useState({userid:'', title:'', body:''})

    const handler = e => {
        const {name, value} = e.target;
        setData({...data, [name]:value})
    }

    const handleData = e => {
        e.preventDefault();
        console.log(data);
        axios.post("https://jsonplaceholder.typicode.com/posts", data)
        .then(res=> {
            console.log(res.data)
        })
        .catch(Err=> {
            console.log(Err)
        })
}
  return (
    <>
    <h2>POST Method</h2>
    <form onSubmit={handleData}>
        <div>
            <label>userId</label>
            <input type="text" name="userid" onChange={handler} />
        </div>
        <div>
            <label>title</label>
            <input type="text" name="title" onChange={handler} />
        </div>
        <div>
            <label>body</label>
            <input type="text" name="body" onChange={handler} />
        </div>
        <input type="submit" value="Submit" />
    </form>
    </>
  )
}
