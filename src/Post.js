import React,{useEffect, useState} from 'react';
import './Post.css';
import {Avatar} from '@material-ui/core';
import Comment from './Comment';
import  { db } from './firebase';


function Post({postId,avatar,image,text}) {
    
    const [cm,setcm] = useState([]);

    useEffect(()=>{
        db.collection('posts').doc(postId).collection('comment').onSnapshot(snapshot =>{
          setcm(snapshot.docs.map(doc=>
            doc.data()
          ))
        })
      },[postId]);
      console.log("this is my cm",cm);
    
    return (
        <div className="post">
    
        <div className="main__border">
            <div className="main__header">
                <Avatar src={avatar} alt="jp"/>
                <h3>Jay patel</h3>
            </div>
            <div className="main__feed">
              <img className="main__logo" src={image} alt="jp"/>
            </div>
            <div className="main__footer">
                 <strong><b>@Jay patel</b></strong><p>{text}</p>
            </div>
            <h4> View all Comment</h4><br/>
            <div className="main__footer">
                 {/* <strong><b>@jp patel</b></strong> */}
                 <p>
                 {cm.map((cmt)=>(
                     <div>
                       <b> @jp patel</b> {cmt.comment}
                     </div>
                  ))}
                 </p>
            </div>
            <Comment postid={postId}/>
            </div> 
        </div>
    );
}

export default Post;