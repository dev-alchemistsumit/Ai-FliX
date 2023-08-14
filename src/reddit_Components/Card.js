import React from "react";
import "./Card.css";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faShare,
  faUpArrow,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  const { score, upVoteClicked, downVoteClicked } = props;

  return (
    <div class="card">
      <div className="cardheader ">
        <div class="voting-section">
          <div className="voting-section-content">
            <div className="profile-icons m-3">
              <span
                className="upvote-icon"
                color="#34eb3a"
                onClick={upVoteClicked}
              >
                &#9650;
              </span>

              <span className="coin-icon"></span>
              <h3> {props.score}</h3>
              <span className="downvote-icon" color="#eb3434" onClick={downVoteClicked}>
                &#9660;
              </span>
            </div>
          </div>
        </div>
        <ReactPlayer controls autoPlay={true} url={props.videoUrl} className="w-full"/>
      </div>


      <div className="title my-3">
        <div className="card-title">{props.title}</div>
        <p className="card-text">{/* {props.desc} */}</p>
      </div>

      <div className="flex flex-col p-1">
        <div className="my-1 md:my-4  flex flex-row justify-center justify-between px-2 md:px-10   ">
          <div className=" bg-white text-black  card-icon">
            <button className="button-decoration" onClick={handleCommentClick}>
              <FontAwesomeIcon icon={faComment} color="" /> Comment
            </button>
          </div>

          <div
            className=" bg-white text-black card-icon"
            onClick={handleShareClick}
          >
            <button className="button-decoration">
              <FontAwesomeIcon icon={faShare} className="" color="" /> Share
            </button>
          </div>

          <div
            className=" bg-white text-black card-icon"
            onClick={handleSaveClick}
          >
            <button className="button-decoration">
              <FontAwesomeIcon icon={faBookmark} color="" /> Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function handleSaveClick() {
  alert("Bookmarked saved.");
}

function handleCommentClick() {
  alert("Open Specific Video in new page for comment");
}
function handleShareClick() {
  alert("Share this Video to Prompt.");
}

function upVoteClicked() {
  alert("upVote");
}
function downVoteClicked() {
  alert("downVote");
}
