import React,{useState,useEffect} from 'react'
import JournalEntry from '../../components/JournalEntry'
import "./style.css"
import API from "../../utils/API"
import JournalForm from '../../components/JournalForm'

const Home = (props) => {
    const [plays, setPlays] = useState([])
    const fetchPlays = ()=>{
      API.getAllPlays().then(data=>{
        setPlays(data)
    })
    }
    useEffect(()=>{
       fetchPlays()
    },[])
  return (
    <div className="Home">
      {props.isLoggedIn?<JournalForm token={props.token} fetchData={fetchPlays}/>:null}
        <h1>Recent posts:</h1>
      {plays.map(play=><JournalEntry key={play.id} userId={play.UserId} title={play.title} date={play.date} notes={play.notes} score={play.score} isWin={play.isWin} user={play.User.username}/>)}
    </div>
  )
}

export default Home