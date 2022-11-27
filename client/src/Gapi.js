import {GoogleLogin,GoogleLogout} from 'react-google-login';
import {gapi} from "gapi-script"
import { useState } from 'react';
import { useEffect } from 'react';
require("dotenv").config()
const clientId = "879814517129-6h5napvb6pcm51541q34acnlur81s4iv.apps.googleusercontent.com"

const Gapi =()=>{
    const [ profile, setProfile ] = useState([]);
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
            clientId: clientId,
            scope: ''
            });
        }
        gapi.load('client:auth2', initClient);
    })

    const onSuccess = (res) => {
        console.log('success:', res);
    };
    const onFailure = (err) => {
        console.log('failed:', err);
    };
    const logOut = () => {
        setProfile(null);
    };
    return (<div>
      
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            
    </div>
    );
}

export default Gapi