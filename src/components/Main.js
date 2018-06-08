/*
  By default activeUserId will be null, then <Empty /> will be shown. 
  As soon as a user is clicked, the activeUserId becomes the user_id of the clicked contact,
  <Main /> will render the conversations of the clicked user by  <ChatWindow /> component.
*/
import React from "react";
import "./Main.css";
import Empty from "../components/Empty"
import ChatWindow from "../containers/ChatWindow";

const Main = ({ user, activeUserId }) => {
  const renderMainContent = () => {
    if (!activeUserId) {
      return <Empty user={user} activeUserId={activeUserId} />;
    } else {
      return <ChatWindow activeUserId={activeUserId} />;
    }
  };
  
  return <main className="Main">{renderMainContent()}</main>;
};

export default Main;