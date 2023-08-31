// import React from 'react';
import styles from '../../pages/index.module.css';
// import clsx from 'clsx';


// export default function Video({ src }) {
//   return (
//     <iframe
//       width="100%"
//       height="315"
//       // src={src}
//       title="YouTube video player"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//       allowfullscreen
//       src="https://www.youtube.com/embed/jQ-t-MnZ8EA?si=jcoTmJxNYoDolCON"
//       className={clsx('video-iframe', styles.videoIframe)}
//     ></iframe>
//   );
// }


import React from 'react';
// import PropTypes from "prop-types";

const Video = ({ url }) => (
  <div 
    style={{
      display: 'flex',
      marginBottom: 'var(--ifm-leading)',
    }}
  >
    <iframe
      style={{
        margin: 'auto',
        borderRadius: '14px', 
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.2)', 
      }}
      width="75%"
      height="315"
      src={`${url}`}
      // frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media;  picture-in-picture; "
      allowFullScreen
      // title="Embedded youtube"
    />
  </div>
);

export default Video;