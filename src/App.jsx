import { useState } from 'react'
import './App.css'
import Activity from './components/icons/Activity.jsx'
import Aperture from './components/icons/Aperture.jsx'
import Compass from './components/icons/Compass.jsx'
import CPU from './components/icons/CPU.jsx'

function App() {
  const [selectedImage, setSelectedImage] = useState(null)

  const cards = [
    { name: '1-3', image: () => <Activity /> },
    { name: '4-18', image: () => <Aperture /> },
    { name: '19-35', image: () => <Compass /> },
    { name: '36-46', image: () => <CPU /> }
  ]

  return (
    <div className="app">
      <h1>Backend Quiz</h1>
      
      <div className="gallery">
        {cards.map((card) => (
          <div 
            key={card.name}
            className="card"
            onClick={() => setSelectedImage(card)}
          >
            <div className="icon-wrapper">
              {card.image()}
            </div>
            <p>{card.name}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <button className="close-button" onClick={() => setSelectedImage(null)}>
              ×
            </button>
            <div className="icon-wrapper">
              {selectedImage.image()}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
