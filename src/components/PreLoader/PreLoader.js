import axios from "axios";
import React, { useEffect, useState } from "react";
import "./PreLoader.css";
import Home from "../../pages/Home/Home";
import {Routes, Route, Navigate } from "react-router-dom";
import Trail from './trail.tsx';
import {create} from '@lottiefiles/lottie-interactivity'
import '@lottiefiles/lottie-player';


function PreLoader() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  const lottiee = React.useRef(null);

  React.useEffect(() => {
    lottiee.current.addEventListener("load", function (e) {
      create({
        mode: "chain",
        player: "#fourthLottie",
        actions: [
        {
            visibility:[0.45,1.0],
            state: 'autoplay',
            transition: 'repeat',
            type: "loop",
            repeat: 2,
            frames: [105, 210]
        }
        ]
      });
    });
  }, [lottiee]);

  useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:5000/users")
        .then((response) => {
          console.log(response);
          setData(response.data);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 7000);
        });
    }, 3000);
  }, []);

  

  return (
    <>
    
      {!completed ? (
        <>  
        <div className="preloader">
          {!loading ? (
       
            <div>
              <lottie-player
                ref={lottiee} 
                id="fourthLottie"
                src="https://assets8.lottiefiles.com/packages/lf20_byuzwmds.json"
                style={{width:'350px'}}
               ></lottie-player>
              <div style={{marginRight:'45px'}} className="loading">
                <span ></span>
                <span></span>
                <span ></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          ) : (
            <Trail/>
          )
        }
           </div>
        </>
      ) : (
        <>
            <Routes>
            <Route
                path="/"
                element={<Navigate to="/" replace />}
            />
            </Routes>
        </>
      )}
      
    </>
  );
}

export default PreLoader;
