import React from 'react'
import Kisses from './Kisses'
import { Link } from 'react-router-dom'
import './style.css';


const Yes = () => {
  return (
    <div>
      <body>
        <div class="container">
            <div class="tenor-gif-embed" data-postid="253027946666209433" data-share-method="host" data-aspect-ratio="1.37853"
            data-width="100%">
            <a
                href="https://tenor.com/view/mochi-cat-mochi-and-goma-goma-and-peach-mochi-mochi-peach-cat-gif-gif-253027946666209433">Mochi
                Cat GIF</a>from <a href="https://tenor.com/search/mochi-gifs">Mochi GIFs</a>
            </div>
            <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
            <h1>അങ്ങനേ വഴിക്ക് വാ... 😁</h1>
            <h1>Happy Valentines Day Wiffieyy ...😘😘😘</h1>
            <Link to="/love">
              <button className="styled-btn">Click Here...</button>
            </Link>
            <h1>I love you my dearest ponnueeyyyyyyyyyy...<Kisses/></h1>
            <h1>ഇത് 10000 ഉമ്മ ഉണ്ടേ...ബാക്കി ഇനി കാണുബോ...😁</h1>
            <h1>I want you to be my forever valentine...😘😘😘😘😘😘😘😘😘</h1>
            
            <img 
                src={require('../Photos/Ki.png')} 
                alt="Cute Image" 
                className="image-style" 
                style={{
                    height: "150px",  // Approximate passport size
                    width: "150px",
                    objectFit: "cover", // Ensures the face remains centered
                    borderRadius: "5px" // Slight rounding for a neat look
                }} 
                />
                <p><b>No matter how tough the journey gets, my hand will always be right here, holding yours - never letting go...🤗😘</b></p>
        </div>
        </body>
    </div>
  )
}

export default Yes
