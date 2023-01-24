import React from "react";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { __editLikeness } from "../redux/modules/detailSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const Like = (props) => {
  const dispatch = useDispatch();
  const [like, setLike] = useState(props.isLiked);
  // console.log(like);
  // console.log("위가 likde 아래가 props");
  // console.log(props.isLiked);
  // const a = props.isLiked;
  useEffect(() => {
    setLike(props.isLiked);
  }, [props.isLiked]);
  // useEffect(() => {
  //   setLike(props.isLiked);
  // }, [like]);
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
