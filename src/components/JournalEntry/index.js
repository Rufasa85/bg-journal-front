import React, { useState } from "react";
import "./style.css";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import JournalForm from "../JournalForm";
import API from "../../utils/API";

const JournalEntry = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const handleDeleteBtnClick = (e) => {
    API.deletePlay(props.playId, props.token).then((data) => {
      props.fetchData();
    });
  };
  return (
    <div className={props.isWin?`JournalEntry win`:`JournalEntry`}>
      {isEditing ? (
        <JournalForm
          token={props.token}
          playId = {props.playId}
          fetchData={props.fetchData}
          setIsEditing={setIsEditing}
          title={props.title}
          score={props.score}
          notes={props.notes}
          date={dayjs(props.date).format("YYYY-MM-DD")}
          win={props.isWin}
          role="edit"
        />
      ) : (
        <div>
          <h3>
            {props.title} played by{" "}
            <Link to={`/profile/${props.userId}`}>{props.user}</Link> on{" "}
            {dayjs(props.date).format("MM/DD/YYYY")}
          </h3>
          <h4>Score = {props.score}</h4>
          <p>{props.notes}</p>
          {/* TODO: if isWin, change styling */}
          {/* TODO: score is an optional field, hide if not included in data */}
          {/* TODO: if logged in and my play, show edit and delete buttons */}
          {/* TODO: add functionality to said buttons */}
          {props.userId === props.loggedInUserId ? (
            <button onClick={handleDeleteBtnClick}>Delete</button>
          ) : null}
          {props.userId === props.loggedInUserId ? (
            <button onClick={() => setIsEditing(true)}>Edit</button>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default JournalEntry;
