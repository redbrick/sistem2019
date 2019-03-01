import React from 'react';

const Livestream = () => { 
   const Stream = () => {
      /* Enter livestream link below! */
      let livestreamEmbedCode = [];
      livestreamEmbedCode.push(
         /* Replace me with an iframe! */
         /* <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */
         <iframe key = "0" title = "Sistem 2019 | Live" src="https://media.heanet.ie/player/live/484ec29e934b8396d5d8de5880b98f1d" id="484ec29e934b8396d5d8de5880b98f1d" width="640" height="360" marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" allowFullScreen></iframe>
      )
      
      if(livestreamEmbedCode.length === 0){
         livestreamEmbedCode.push(
            <p>The livestream will be available to watch here on the day of the event. Please come back then to watch.</p>
         )
      }
      
      return livestreamEmbedCode
   }

   return (
      <div>
            <div className="content-container">
               <div className="page">
                  <h2 style = {{ margin: '16pt auto', padding: 0 }}> 
                      Live Stream
                  </h2>
               </div>
            </div>
            <div className="content-container">
               <div className="page">
                  <Stream />
               </div>
            </div>
      </div>
   );
}
  
  export default Livestream;
  
