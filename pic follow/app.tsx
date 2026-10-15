import { useState ,useEffect,useRef} from 'react'
import './App.css'
import img from './assets/hero.png'

function App() {

const x = useRef<HTMLDivElement>(null);
const pic = useRef<HTMLImageElement>(null);
const transX = useRef(0);
const transY = useRef(0);
const transslowyX = useRef(0);
const transslowyY = useRef(0);


useEffect(()=>{
if(x.current){
  x.current.style.width = '100vw';
    x.current.style.height = '100vh';
    x.current.style.backgroundColor = "#ffff";
}
},[])

useEffect(()=>{
  requestAnimationFrame(tick);
},[])


function move(e:React.MouseEvent<HTMLDivElement>){
 if(!pic.current){
  return
 } 
 transX.current = e.clientX - 100;
 transY.current = e.clientY - 100;

  // const rect = pic.current.getBoundingClientRect();
  // console.log("鼠标",e.clientX,e.clientY);
  // console.log("图片",rect.left,rect.top);
  // console.log("图片offset",pic.current.offsetWidth,pic.current.offsetHeight)

}


function tick(){
  if(!pic.current) return;

    let distanceX = (transX.current - transslowyX.current) * 0.05;
    let distanceY = (transY.current - transslowyY.current) * 0.05;
    transslowyX.current = transslowyX.current + distanceX;
    transslowyY.current = transslowyY.current + distanceY;
    if(Math.abs(transX.current - transslowyX.current) < 0.1 && Math.abs(transY.current - transslowyY.current) < 0.1){
      transslowyX.current = transX.current;
      transslowyY.current = transY.current;
    }

    pic.current.style.transform = `translate(${transslowyX.current}px,${transslowyY.current}px)`;





  return requestAnimationFrame(tick);
}
  return (
    <div ref={x} onMouseMove = {move}>
      <img src={img} width="200px" height = "200px" ref={pic}/>
    </div>
  )
}

export default App
