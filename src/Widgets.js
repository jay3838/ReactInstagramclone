import React from 'react';
import './Widgets.css';
import InstagramEmbed from 'react-instagram-embed';
import ImageUpload from './ImgUpload';

function Widgets() {
    return (
        <div className="widgets">
            <h2>Sry widegets is not working</h2>
            <h1>BUt file uppload</h1>

            <ImageUpload/>
            <InstagramEmbed
              url="https://www.instagram.com/p/B75pCb3BILt/"
              maxWidth={320}
              hideCaption={false}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}  
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
        </div>
    );
}

export default Widgets;