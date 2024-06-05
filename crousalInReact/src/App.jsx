import { useEffect, useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count,setCount]=useState(0)
  const slides = document.querySelectorAll(".slide")

  slides.forEach((slide,index)=>{
    slide.style.left=`${index*100}%`;
  })


  
    const slideImage=()=>{
      slides.forEach((slide)=>{
        if(count>=slides.length-1) setCount(0)
        slide.style.transform=`translateX(-${count*100}%)`
      })
      setCount(count+1)
    }

  

  return (
    <>
    <main>
        <img src="https://picsum.photos/id/237/1000/500" className="slide" />
        <img src="https://picsum.photos/id/238/1000/500" className="slide" />
        <img src="https://picsum.photos/id/239/1000/500" className="slide" />
        <img src="https://picsum.photos/id/243/1000/500" className="slide" />
    </main>
    <div className="nav">
     <button onClick={slideImage}>next</button>
    </div>
    </>
  )
}

export default App
