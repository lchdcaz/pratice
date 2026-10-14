import { useState ,useEffect,useRef} from 'react'
import './App.css'
import img from './assets/hero.png'

function App() {

const x = useRef<HTMLDivElement>(null);
const pic = useRef<HTMLImageElement>(null);


useEffect(()=>{
if(x.current){
  x.current.style.width = '100vw';
    x.current.style.height = '100vh';
    x.current.style.backgroundColor = "#ffff";
}

if(pic.current){
    pic.current.style.position = "absolute";
}
},[])


function move(e:React.MouseEvent<HTMLDivElement>){
 if(!pic.current){
  return
 } 


  pic.current.style.transform = `translate(${e.clientX - 100}px,${e.clientY - 100}px)`;
  // const rect = pic.current.getBoundingClientRect();
  // console.log("鼠标",e.clientX,e.clientY);
  // console.log("图片",rect.left,rect.top);
  // console.log("图片offset",pic.current.offsetWidth,pic.current.offsetHeight)
}
  return (
    <div ref={x} onMouseMove = {move}>
      <img src={img} width="200px" height = "200px" ref={pic}/>
    </div>
  )
}

export default App
