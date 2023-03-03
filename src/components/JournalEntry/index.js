import React from 'react'
import "./style.css"
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

const JournalEntry = (props) => {

  return (
    <div className='JournalEntry'>
        <h3>{props.title} played by <Link to={`/profile/${props.userId}`}>{props.user}</Link> on {dayjs(props.date).format("MM/DD/YYYY")}</h3>
        <h4>Score = {props.score}</h4>
        <p>{props.notes}</p>
        {/* TODO: if isWin, change styling */}
        {/* TODO: score is an optional field, hide if not included in data */}
        {/* TODO: if logged in and my play, show edit and delete buttons */}
        {/* TODO: add functionality to said buttons */}
    </div>
  )
}

export default JournalEntry