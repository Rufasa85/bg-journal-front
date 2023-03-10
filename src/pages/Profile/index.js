import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JournalEntry from "../../components/JournalEntry";
import "./style.css";
import API from "../../utils/API";
import JournalForm from "../../components/JournalForm";

const Profile = (props) => {
  const params = useParams();
  console.log(params);
  const [user, setUser] = useState({});
  const [isMyPage, setIsMyPage] = useState(false);
  const fetchUser = () => {
    API.getUserData(params.id).then((data) => {
      setUser(data);
      console.log(props.userId);
      if (props.userId == params.id) {
        setIsMyPage(true);
      } else {
        setIsMyPage(false);
      }
    });
  };
  useEffect(() => {
    fetchUser();
  }, [props.userId,params.id]);
  return (
    <div className="Profile">
      <h1>{user.username} profile!</h1>
      <h2>{user.username}'s Posts:</h2>
      {isMyPage && <JournalForm token={props.token} fetchData={fetchUser}  role="create" />}
      {user?.Plays?.map((play) => (
        <JournalEntry
          fetchData={fetchUser}
          token={props.token}
          key={play.id}
          playId={play.id}
          userId={user.id}
          title={play.title}
          date={play.date}
          notes={play.notes}
          score={play.score}
          isWin={play.isWin}
          user={user.username}
          loggedInUserId={props.userId}
        />
      ))}
    </div>
  );
};

export default Profile;
