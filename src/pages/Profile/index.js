import React,{useState,useEffect} from 'react'
import{useParams} from "react-router-dom"
import JournalEntry from '../../components/JournalEntry'
import "./style.css"
import API from "../../utils/API"
import JournalForm from '../../components/JournalForm'

const Profile = (props) => {
  const params = useParams();
  console.log(params)
    const [user, setUser] = useState({})
    const [isMyPage,setIsMyPage] = useState(false)
    const fetchUser = ()=>{
      API.getUserData(params.id).then(data=>{
        setUser(data)
        if(props.userId==params.id){
         setIsMyPage(true)
        }
     })
    }
    useEffect(()=>{
       fetchUser()
    },[])
  return (
    <div className="Profile">
        <h1>{user.username} profile!</h1>
        <h2>{user.username}'s Posts:</h2>
        {/* TODO: add create form if my page */}
        {isMyPage&&<JournalForm token={props.token} fetchData={fetchUser}/>}
      {user?.Plays?.map(play=><JournalEntry key={play.id} userId={user.id} title={play.title} date={play.date} notes={play.notes} score={play.score} isWin={play.isWin} user={user.username}/>)}
    </div>
  )
}

export default Profile