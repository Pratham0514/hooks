import React from 'react'
import './Home.css'

function Emojicomp({ setEmoji }) {
  return (
    <div >
     <button className="Emoji" onClick={() => setEmoji('✈️')}>✈️</button>
<button className="Emoji" onClick={() => setEmoji('🧳')}>🧳</button>
<button className="Emoji" onClick={() => setEmoji('🌍')}>🌍</button>
<button className="Emoji" onClick={() => setEmoji('🗺️')}>🗺️</button>
<button className="Emoji" onClick={() => setEmoji('🏖️')}>🏖️</button>
<button className="Emoji" onClick={() => setEmoji('🏔️')}>🏔️</button>
<button className="Emoji" onClick={() => setEmoji('🏕️')}>🏕️</button>
<button className="Emoji" onClick={() => setEmoji('🚗')}>🚗</button>
<button className="Emoji" onClick={() => setEmoji('🚆')}>🚆</button>
<button className="Emoji" onClick={() => setEmoji('🚢')}>🚢</button>
<button className="Emoji" onClick={() => setEmoji('📸')}>📸</button>
<button className="Emoji" onClick={() => setEmoji('🌄')}>🌄</button>

    </div>
  )
}

export default Emojicomp
