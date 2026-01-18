import React from 'react'
import './Home.css'
function Buttoncomp({ setBackEmoji }) {
  return (
    <div>
        <button className="color" onClick={() => setBackEmoji('#e44343')}>🔴</button>
          <button className="color" onClick={() => setBackEmoji('#b67a36')}>🟠</button>
          <button className="color" onClick={() => setBackEmoji('#123d55')}>🟡</button>
          <button className="color" onClick={() => setBackEmoji('#017f53')}>🟢</button>
          <button className="color" onClick={() => setBackEmoji('#470966')}>🟣</button>
          <button className="color" onClick={() => setBackEmoji('#c8ac8c')}>🟤</button>
          <button className="color" onClick={() => setBackEmoji('#f4f4f4')}>⚪</button>
          <button className="color" onClick={() => setBackEmoji('#286ca7')}>🔵</button></div>
  )
}

export default Buttoncomp