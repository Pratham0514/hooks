import React, { useState } from 'react'
import './Home.css'
import Emojicomp from './Emojicomp'
import Buttoncomp from './Buttoncomp'

function Home() {
  const [emoji, setEmoji] = useState('🤗')
  const [raange, setRaange] = useState(50)
  const [backEmoji, setBackEmoji] = useState('#e44343')

  return (
    <>
      <h1 className="Title">
        This is Short tour with the Emoji Using 
        <span className="Subtitle"> useState</span>
      </h1>

      <div className="box-wrapper">

  <div className="Emoji-Container1">
    <Emojicomp setEmoji={setEmoji} />
  </div>

  {/* CENTER */}
  <div className="center-box">
    <div
      className="Emoji-Container"
      style={{ fontSize: `${raange}px`, backgroundColor: backEmoji }}
    >
      {emoji}
    </div>

    <input
      type="range"
      min="1"
      max="100"
      value={raange}
      onChange={(e) => setRaange(e.target.value)}
      className='slider'
    />
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
