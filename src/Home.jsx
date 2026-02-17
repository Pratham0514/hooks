import React, { useState } from 'react'
import './Home.css'
import Emojicomp from './Emojicomp'
import Buttoncomp from './Buttoncomp'

function Home() {
  const [emoji, setEmoji] = useState('🤗')
  const [raange, setRaange] = useState(50)
  const [backEmoji, setBackEmoji] = useState('#e44343')
  const [rotate, setRotate] = useState(0)

  return (
    <>
      <h1 className="Title">
        This is Short tour with the Emoji Using 
        <span className="Subtitle"> useState</span>
      </h1>

      <div className="box-wrapper">

        {/* LEFT */}
        <div className="Emoji-Container1">
          <Emojicomp setEmoji={setEmoji} />
        </div>

        {/* CENTER */}
        <div className="center-box">
          <div
            className="Emoji-Container"
            style={{
              fontSize: `${raange}px`,
              backgroundColor: backEmoji,
              transform: `rotate(${rotate}deg)`,
              transition: "0.3s ease"
            }}
          >
            {emoji}
          </div>

          {/* Size Slider */}
          <input
            type="range"
            min="1"
            max="100"
            value={raange}
            onChange={(e) => setRaange(Number(e.target.value))}
            className='slider'
          />

          <br /><br />
            <div class="button-container">
            {/* Rotate Button */}
          <button onClick={() => setRotate(prev => (prev + 90) % 360)} className='rotate'>
            Rotate 90°
          </button>

          <br /><br />

          {/* Reset Button */}
          <button onClick={() => setRotate(0)} className='rotate-reset'>
            Reset
          </button>

            </div>
          
        </div>

        {/* RIGHT */}
        <div className="Emoji-Container2">
          <Buttoncomp setBackEmoji={setBackEmoji} />
        </div>

      </div>
    </>
  )
}

export default Home
