import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import firestore from "../firebase";

function PostDetail() {

    // initial state of post = {} an empty object
    const [post, setPost] = useState({});

     //Get the postId from useParams() hook (this hook return a n obj from which we need postId...so we are using obj destructuring)
     const {postId} = useParams();

    //Fetching the specific post from firestore using useEffect() hook
    useEffect(() => {
        //note that snapshot itself is document here, so we can call data() over it
        firestore.collection('posts').doc(postId).get().then((snapshot) => {
            setPost(snapshot.data());
        });

    }) 
    return (
        <div className="post-detail">
            <h1> {post.title} </h1>
            <p> {post.content} </p>
        </div>
    );
}

export default PostDetail;
