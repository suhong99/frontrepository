import React from "react";
import { BsChat, BsChatFill } from "react-icons/bs";

const CommentAdder = (props) => {
  console.log(props);
  const Commenthandler = () => {
    props.setShowComment(!props.showComment);
  };
  return (
    <div>
      {!props.showComment ? (
        <BsChat onClick={Commenthandler} />
      ) : (
        <BsChatFill onClick={Commenthandler} color={"DarkSlateBlue"} />
      )}
    </div>
  );
};

export default CommentAdder;
