import React from 'react';

const Love = () => {
  const images = [
    require('../Photos/One.webp'),
    require('../Photos/Two.jpg'),
    require('../Photos/Three.jpg'),
    require('../Photos/Four.webp'),
    require('../Photos/Five.jpg'),
    require('../Photos/Six.webp'),
    require('../Photos/Seven.webp'),  
    require('../Photos/Eight.jpg')   
  ];

  return (
    <div style={containerStyle}>
      {/* Valentine's Day Message */}
      <h2 style={titleStyle}>💖 Happy Valentine's Day! 💋</h2>

      <div style={gridStyle}>
        {/* Top row */}
        {images.slice(0, 3).map((src, index) => (
          <img key={index} src={src} alt={`pic${index + 1}`} style={imageStyle} />
        ))}

        {/* Middle row with GIF in center */}
        <img src={images[3]} alt="pic4" style={imageStyle} />
        <img 
          src="https://media.tenor.com/E2_i2XDqoG4AAAAM/shakespaw.gif" 
          alt="Couple GIF" 
          style={gifStyle} 
        />
        <img src={images[4]} alt="pic5" style={imageStyle} />

        {/* Bottom row */}
        {images.slice(5).map((src, index) => (
          <img key={index + 5} src={src} alt={`pic${index + 6}`} style={imageStyle} />
        ))}
      </div>

      {/* Kisses animation */}
      <p style={kissStyle}>💋💋 Sending Love & Kisses 2 U Ponnu💋💋</p>
    </div>
  );
};

// Styles
const containerStyle = { 
  textAlign: "center", 
  marginTop: "30px", 
  padding: "20px",
  background: "#ffe6e9", 
  borderRadius: "10px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
  maxWidth: "480px",
  margin: "auto",
  position: "relative"
};

const titleStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#d63384",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
  marginBottom: "15px"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10px",
  alignItems: "center",
  justifyContent: "center"
};

const imageStyle = {
  width: "100px",
  height: "100px",
  objectFit: "cover",
  borderRadius: "10px",
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)"
};

const gifStyle = {
  width: "130px",
  height: "auto",
  borderRadius: "10px",
  boxShadow: "0px 3px 8px rgba(255, 0, 102, 0.3)"
};

const kissStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#ff3366",
  marginTop: "15px",
  animation: "kissEffect 1.5s infinite"
};

// Keyframe animation for kisses
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes kissEffect {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.7; }
    100% { transform: scale(1); opacity: 1; }
  }
`, styleSheet.cssRules.length);

export default Love;
