import React from 'react';

const Livestream = () => { 
   const liveStreamEmbed = () => {
      /* Enter livestream link below! */
      let livestreamEmbedCode = [];
      livestreamEmbedCode.push(
         /* Replace me with an iframe! */
         /* <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */
      )
      
      if(livestreamEmbedCode.length === 0){
         livestreamEmbedCode.push(
            <p>The livestream will be available to watch here on the day of the event. Please come back then to watch.</p>
         )
      }
      console.log(livestreamEmbedCode)
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
                  <h3>Watch Now</h3>
                  <liveStreamEmbed />
               </div>
            </div>
      </div>
   );
}
  
  export default Livestream;
  
