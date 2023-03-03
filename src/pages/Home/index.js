import React,{useState,useEffect} from 'react'
import JournalEntry from '../../components/JournalEntry'
import "./style.css"
import API from "../../utils/API"

const Home = () => {
    const [plays, setPlays] = useState([])
    useEffect(()=>{
        API.getAllPlays().then(data=>{
            setPlays(data)
        })
    },[])
  return (
    <div className="Home">
        <h1>Recent posts:</h1>
      {plays.map(play=><JournalEntry key={play.id} title={play.title} date={play.date} notes={play.notes} score={play.score} isWin={play.isWin} user={play.User.username}/>)}
    </div>
  )
}

export default Home