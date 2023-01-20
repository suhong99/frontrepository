import React from "react";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { __editLikeness } from "../redux/modules/detailSlice";
import { useEffect } from "react";
const Like = (props) => {
  const dispatch = useDispatch();
  const [like, setLike] = useState(null);
  // const a = props.isLiked;
  useEffect(() => {}, []);
  // // 새로 고침시 제대로 안됨.
  const likeClick = () => {
    setLike(!like);
    dispatch(__editLikeness({ id: props.detailId, likeStatus: true }));
  };

  return (
    <div>
      {!like ? (
        <BsSuitHeart onClick={likeClick} />
      ) : (
        <BsSuitHeartFill onClick={likeClick} color="red" />
      )}
    </div>
  );
};

export default Like;
