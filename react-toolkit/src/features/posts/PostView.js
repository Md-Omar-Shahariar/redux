import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostView = () => {
  const { isLoading, post, error } = useSelector((state) => state.posts);
  console.log(post);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return <div>{post && post.map((pot) => <article>{pot.body}</article>)}</div>;
};

export default PostView;
