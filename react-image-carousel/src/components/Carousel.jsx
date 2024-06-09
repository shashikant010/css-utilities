import React, { useCallback, useEffect, useLayoutEffect, useReducer, useState, useTransition } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";


export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const [autoplay,setAutoplay]=useState("false")

  const nextSlide = () => {
    console.log("next");
    console.log(slide)
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

 
  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };




 if(autoplay){ useEffect(()=>{
    const changingId= setInterval(()=>{
      nextSlide()
    },2000)

    return ()=>clearInterval(changingId);
    })}


  return (
    <div className="carousel">
      <style>
        {
          `
          .carousel {
            position: relative;
            display: flex;
            justify-content: start;
            align-items: center;
            width: 600px;
            height: 400px;
            overflow:hidden;
            
          }
        
          .slide {
            border-radius: 0.5rem;
            box-shadow: 0px 0px 7px #666;
            width: 100%;
            height: 100%;
            position:relative;
            transition: all linear 1s;
            left:-${slide*600}px;
          }
        
          .slide-hidden {
            display: none;
          }
        
          .arrow {
            position: absolute;
            filter: drop-shadow(0px 0px 5px #555);
            width: 2rem;
            height: 2rem;
            color: white;
          }
        
          .arrow:hover {
            cursor: pointer;
          }
        
          .arrow-left {
            left: 1rem;
            z-index:20;
          }
        
          .arrow-right {
            right: 1rem;
          }
        
          .indicators {
            display: flex;
            position: absolute;
            left:300px;
            bottom: 1rem;
            
          }
        
          .indicator {
            background-color: white;
            height: 0.5rem;
            width: 0.5rem;
            border-radius: 100%;
            border: none;
            outline: none;
            box-shadow: 0px 0px 5px #555;
            margin: 0 0.2rem;
            cursor: pointer;
          }
        
          .indicator-inactive {
            background-color: grey;
          }
        
          `
        }
      </style>
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={"slide"}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>

    
  );
};
