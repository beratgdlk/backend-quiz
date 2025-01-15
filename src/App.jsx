import { useState } from 'react'
import './App.css'
import Activity from './components/icons/Activity.jsx'
import Aperture from './components/icons/Aperture.jsx'
import Compass from './components/icons/Compass.jsx'
import CPU from './components/icons/CPU.jsx'

function App() {
  const [selectedImage, setSelectedImage] = useState("")

  const cards = [
    { id: 1, name: '1-3', image: () => <Activity /> },
    { id: 2, name: '4-18', image: () => <Aperture /> },
    { id: 3, name: '19-35', image: () => <Compass /> },
    { id: 4, name: '36-46', image: () => <CPU /> }
  ]
  
  const questionPhotos=[
    {id:1,photoSrc:"/src/assets/backend-about1.png"},
    {id:2,photoSrc:"/src/assets/4-18.png"},
    {id:3,photoSrc:"/src/assets/19-35.png"},
    {id:4,photoSrc:"/src/assets/36-46.png"},
  ]


  return (
    <div className="app">
      <h1>Backend Quiz 1-46</h1>
      <h2>Açılan Görselleri Yeni Sekmede Açarak İstediğiniz Soruya Zoom Yapabilirsiniz</h2>

      <div className="gallery">
        {cards.map((card) => (
          <div
            key={card.name}
            className="card"
            onClick={() => setSelectedImage(card.id)}
          >
            <div className="icon-wrapper">
              {card.image()}
            </div>
            <p>{card.name}</p>
          </div>
        ))}
      </div>
      {
        questionPhotos.map((question,index)=>{
          if(question.id==selectedImage){
            return (
              <div className="modal" key={index} onClick={() => setSelectedImage(null)}>
              <div className="modal-content">
                <button className="close-button" onClick={() => setSelectedImage(null)}>
                    Close
                  </button>
                <div className="icon-wrapper">
                  <img src={question.photoSrc} className='selected-image' alt="" />
                </div>
              </div>
            </div>
            )
          }
        })
      }
    </div>
  )
}

export default App
