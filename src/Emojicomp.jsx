import React from 'react'
import './Home.css'

function Emojicomp({ setEmoji }) {
  return (
    <div>
      <button className="color" onClick={() => setEmoji('🤗')}>🤗</button>
      <button className="color" onClick={() => setEmoji('🤔')}>🤔</button>
      <button className="color" onClick={() => setEmoji('🤐')}>🤐</button>
      <button className="color" onClick={() => setEmoji('🤨')}>🤨</button>
      <button className="color" onClick={() => setEmoji('😐')}>😐</button>
      <button className="color" onClick={() => setEmoji('😑')}>😑</button>
      <button className="color" onClick={() => setEmoji('😶')}>😶</button>
      <button className="color" onClick={() => setEmoji('😏')}>😏</button>
      <button className="color" onClick={() => setEmoji('😒')}>😒</button>
      <button className="color" onClick={() => setEmoji('🙄')}>🙄</button>
      <button className="color" onClick={() => setEmoji('😬')}>😬</button>
      <button className="color" onClick={() => setEmoji('🤥')}>🤥</button>
      <button className="color" onClick={() => setEmoji('😌')}>😌</button>
      <button className="color" onClick={() => setEmoji('😔')}>😔</button>
      <button className="color" onClick={() => setEmoji('😪')}>😪</button>
      <button className="color" onClick={() => setEmoji('🤤')}>🤤</button>
    </div>
  )
}

export default Emojicomp
