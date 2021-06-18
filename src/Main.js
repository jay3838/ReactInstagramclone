import React,{useEffect, useState} from 'react';
import './Main.css';
import Post from './Post';
import  { db } from './firebase';
 
function Main() {
    const [posts,setposts] = useState([]);

    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot =>{
          setposts(snapshot.docs.map(doc=>({
              id:doc.id,
              post:doc.data()
            })
          ))
        })
      },[]);
      console.log("this is my post",posts);
    return (
        <div className="main">


        {posts.map(({id,post})=>(
              <Post key={id} avatar={post.avatar}             
              image={post.image}
              text={post.text}
              postId={id}
              />
            ))}
        
        </div>
    );
}

export default Main;