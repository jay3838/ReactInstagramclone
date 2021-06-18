import './App.css';
import React, { useState ,useEffect} from 'react';
import {Button, Input} from '@material-ui/core';
import Main from './Main';
import Widgets from './Widgets';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import  { auth } from './firebase';



function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),

  },
 
  
}));




function App() {
  const classes = useStyles();
 
  const [modalStyle] = React.useState(getModalStyle);
    const [open,setOpen]= useState(false);
    const [opened,setOpened]= useState(false);
    const [name, setname] = useState('');
     const [email, setemail] = useState('');
    const [password, setpassword] = useState(''); 
    const [user , setUser] = useState(null); 
   
    

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if(authUser){
        console.log("my auth ",authUser);  
        setUser(authUser);
        if(authUser.displayName){

        }else{
          return authUser.updateProfile({
            displayName: name,
          });
        }
      }else{
        setUser(null);
      }
    });
  }, [user]);
  console.log("jp use",user);



  



  const register = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email , password)
    .then((authUser) => {
      return authUser.user.updateProfile({
        displayName:name
      })
    })
    .catch((error) => alert(error.message));
    setOpen(false);
  }

  const signIn = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email , password)
    
    .catch((error) => alert(error.message));
    setOpened(false);
  }






  


  return (
    <div className="app">
      <div className="app__header">
      <div className="header">
     
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMI9du9i5UixEQzbcHOrsOeQmVZij61NOhGSPGxf3SczC6UM_-x-3Qg0n4bOZQr1SrSm0&usqp=CAU" alt="instagaram" className="header__logo"/>
            <div className="header__right">

              {user ? (
        <Button onClick ={()=>auth.signOut()}>Logout</Button>
        ): (
        <div className = "app__loginContainer">
         <Button  type="button" onClick={()=>setOpen(true)}>Register</Button>
              <Button  type="button" onClick={()=>setOpened(true)}>SignIn</Button>
        </div>
      )}
            

            <Modal
               open={opened}
              onClose={()=>setOpened(false)}
               aria-labelledby="simple-modal-title"
               aria-describedby="simple-modal-description"
            >
              <div style={modalStyle} className={classes.paper}>
                <center>
                  <img alt="headerimage"className="app__headerImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMI9du9i5UixEQzbcHOrsOeQmVZij61NOhGSPGxf3SczC6UM_-x-3Qg0n4bOZQr1SrSm0&usqp=CAU"/>
               
                  <Input type='text' placeholder="enter your email" value={email} onChange={e => setemail(e.target.value)} />     <br/>
                  <Input type='password' placeholder="enter your password" value={password} onChange={e => setpassword(e.target.value)} />     <br/>
                  <br/>
                  <Button onClose={()=>setOpened(false)}  onClick={signIn}>SignIn</Button>
               
                </center>
              
              </div>
             </Modal>





            <Modal
               open={open}
              onClose={()=>setOpen(false)}
               aria-labelledby="simple-modal-title"
               aria-describedby="simple-modal-description"
            >
              <div style={modalStyle} className={classes.paper}>
                <center>
                  <img  alt="imageheader" className="app__headerImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMI9du9i5UixEQzbcHOrsOeQmVZij61NOhGSPGxf3SczC6UM_-x-3Qg0n4bOZQr1SrSm0&usqp=CAU"/>
               
                  <Input type='text' placeholder="enter your name" value={name} onChange={e => setname(e.target.value)} />
                  <br/>
                  <Input type='text' placeholder="enter your email" value={email} onChange={e => setemail(e.target.value)} />     <br/>
                  <Input type='password' placeholder="enter your password" value={password} onChange={e => setpassword(e.target.value)} />     <br/>
                  <br/>
                  <Button  onClose={()=>setOpened(false)} onClick={register}>singnew</Button>
                  {/* <button onClick={signIn}>SignIn</button> */}
               
                </center>
              
              </div>
             </Modal>
            </div>
        </div>
      </div>
      <div className="app__main">
           
          <Main/>
          <Widgets/>
    
      </div>

   

   
      
    </div>
  );
}

export default App;
