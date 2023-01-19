import React from "react";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { __editLikeness } from "../redux/modules/detailSlice";
import { useEffect } from "react";
const Like = (props) => {
  const dispatch = useDispatch();
  console.log(props.isLiked);
  const [like, setLike] = useState(false);
  //   if (props.isLiked !== undefined) {
  //     setLike(props.isLiked);
  //   }
  useEffect(() => {
    setLike(props.isLiked);
  }, [setLike]);

  //   console.log(like);
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
