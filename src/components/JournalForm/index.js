import React,{useState} from 'react'
import API from '../../utils/API'
import "./style.css"

const JournalForm = (props) => {
    const [formData, setFormData] = useState({
        title:"",
        date:new Date(),
        score:0,
        win:"loss",
        notes:""
    })
    const handleChange = e=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e=>{
        e.preventDefault();
        const playData = {
            ...formData,
            win:formData.win==="win"
        }
        console.log(playData)
        API.addPlay(formData,props.token).then(data=>{
            console.log(data);
            setFormData({
                title:"",
                date:new Date(),
                score:0,
                win:"loss",
                notes:""
            })
            props.fetchData();
        })
    }
  return (
    <form className="JournalForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder = "title" value={formData.title} name="title"  />
        <input onChange={handleChange} type="date" value={formData.date} name="date"  />
        <input onChange={handleChange} type="number" placeholder = "score" value={formData.score} name="score"  />
        <select onChange={handleChange} value={formData.win} name="win">
            <option value="win">Win</option>
            <option value="loss">Didnt win</option>
        </select>
        <textarea onChange={handleChange} name="notes">
            {formData.notes}
        </textarea>
        <button>Submit</button>
    </form>
  )
}

export default JournalForm

