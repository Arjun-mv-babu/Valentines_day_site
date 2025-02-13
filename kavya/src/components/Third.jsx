import React from 'react'

const Third = () => {
  return (
    <div>
        <div class="container">
            <div class="tenor-gif-embed" data-postid="15974530976611222074" data-share-method="host" data-aspect-ratio="1.26923"
            data-width="100%">
            </div>
            <img 
                src={require('../Photos/Njan.jpg')} 
                alt="Cute Image" 
                className="image-style" 
                style={{
                    height: "150px",  // Approximate passport size
                    width: "150px",
                    objectFit: "cover", // Ensures the face remains centered
                    borderRadius: "5px" // Slight rounding for a neat look
                }} 
                />

            <h1>എന്തിന്നാന് പൊന്നൂ...😭</h1>
            <p>ഇനി നിനക്ക് No ഓപ്ഷൻ ഇല്ല...😤</p>
            
            <div class="btn">
            <a href="/yes">Yes</a>
            </div>
        </div>

        <script src="./script.js"></script>
    </div>
  )
}

export default Third
