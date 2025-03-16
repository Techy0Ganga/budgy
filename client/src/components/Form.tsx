import React from 'react'
import {useState} from 'react'
const Form = () => {

    const [form, setForm] = useState({
        amount : 0,
        description : '',
        date : ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    }

    const handleInput = (e) =>{
        setForm({...form, [e.target.name] : e.target.value})
    }
  return (
    <div >
        <form action="" onSubmit={handleSubmit} className="flex gap-20">
            {/* amount */}
            <input 
            type="number" 
            name="amount" 
            value={form.amount}
            placeholder="Enter amount" 
            onChange={handleInput} />


            {/* description */}
            <input type="text" 
            name="description" 
            placeholder="Enter Use"
            value={form.description}
            onChange={handleInput} />


            {/* date */}
            <input type="date" name="date" 
            value={form.date}
            onChange={handleInput}/>


            {/* submit */}
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form