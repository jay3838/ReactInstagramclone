import React, { useState } from 'react';
import './Comment.css';
import  { db } from './firebase';

function Comment({postid}) {
    const [comment,setcommnet] =useState([]);

    const sendcomment = (event)=>{
        event.preventDefault();
        db.collection('posts').doc(postid).collection('comment').add({
            comment:comment,
        }
        );
        setcommnet('');
    }
    console.log(comment);

    return (
        <div className="comment">
            <input type="text" name="comment" value={comment} onChange={(e)=>setcommnet(e.target.value)} placeholder="Add a commnet"/>
            <button type="button"  onClick={sendcomment}>Post</button>
        </div>
    );
}

export default Comment;