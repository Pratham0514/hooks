import React from 'react'
import './Home.css'
function Buttoncomp({ setBackEmoji }) {
  return (
    <div>
<button className="color skyBlue" onClick={() => setBackEmoji('#87ceeb')}></button>
<button className="color oceanBlue" onClick={() => setBackEmoji('#1e90ff')}></button>
<button className="color lakeBlue" onClick={() => setBackEmoji('#3498db')}></button>
<button className="color seaGreen" onClick={() => setBackEmoji('#2ecc71')}></button>
<button className="color forestGreen" onClick={() => setBackEmoji('#145a32')}></button>
<button className="color sand" onClick={() => setBackEmoji('#f4d03f')}></button>
<button className="color desertBrown" onClick={() => setBackEmoji('#c19a6b')}></button>
<button className="color sunsetOrange" onClick={() => setBackEmoji('#ff8c42')}></button>
<button className="color sunsetPink" onClick={() => setBackEmoji('#ff6f91')}></button>
<button className="color mountainGray" onClick={() => setBackEmoji('#7f8c8d')}></button>
<button className="color roadBlack" onClick={() => setBackEmoji('#2c2c2c')}></button>
<button className="color cloudWhite" onClick={() => setBackEmoji('#f8f9fa')}></button>
<button className="color lavaRed" onClick={() => setBackEmoji('#a17ced')}></button>
<button className="color volcanoRed" onClick={() => setBackEmoji('#1ad09c')}></button>
<button className="color fireBrick" onClick={() => setBackEmoji('#db8eca')}></button>


          
      

          </div>
  )
}

export default Buttoncomp