import { useState,useRef ,useEffect} from 'react'
import './App.css'
import hero from './assets/react.svg'

function App() {
  const canvas = useRef<HTMLCanvasElement>(null)

  useEffect(()=>{
    if(!canvas.current)return;
      const draw = canvas.current.getContext("2d");
      // let offset = 0;
      if(!draw)return;
      //   draw.setLineDash([10,10]);
      // requestAnimationFrame(drawpic);

  // function drawpic (){
  //       if(!draw)return;
  //       draw.clearRect(0,0,600,600);
  //       draw.beginPath();
  //   draw.moveTo(200,200);
  //   draw.lineTo(400,200);

  //       draw.lineDashOffset = offset;
  //   draw.stroke();
  //   xuxian();
  // }

  // function xuxian (){
  //     offset++;
  //     if(offset > 20)offset = 0;
  //     requestAnimationFrame(drawpic);
  // }
    //   draw.fillRect(100,100,100,100);
    //   draw.clearRect(125,125,50,50);
    //   draw.strokeRect(135,135,30,30);

    // draw.beginPath();
    // draw.moveTo(300, 300);
    // draw.lineTo(200, 200);
    // draw.lineTo(200, 250);
    // draw.closePath();
    // draw.stroke();

    // draw.beginPath();
    // draw.moveTo(200, 200);
    // draw.lineTo(350, 200);
    // draw.lineTo(230, 160);
    // draw.closePath();
    // draw.stroke();

    // draw.beginPath();
    // draw.moveTo(100,400);
    // draw.arc(100,400,35,0,3 * Math.PI / 2,true);
    // draw.closePath();
    // draw.stroke();

    // draw.beginPath();
    // draw.moveTo(100,400);
    // draw.arc(100,400,35,Math.PI,Math.PI / 2,true);
    // draw.closePath();
    // draw.stroke();

    // draw.beginPath();
    // draw.moveTo(400,400);
    // draw.quadraticCurveTo(350,350,400,300);
    // draw.stroke();

    // draw.beginPath();
    // draw.moveTo(300,400);
    // draw.bezierCurveTo(200,350,280,270,300,350);
    // draw.moveTo(300,400);
    // draw.bezierCurveTo(400,350,320,270,300,350);
    // draw.stroke();
    // draw.strokeStyle = "orange";
    // draw.beginPath();
    // draw.moveTo(200,200);
    // draw.quadraticCurveTo(215,220,230,200);
    // draw.quadraticCurveTo(245,220,260,200);
    // draw.bezierCurveTo(275,220,310,200,275,185);
    // draw.quadraticCurveTo(260,160,245,185);
    // draw.quadraticCurveTo(225,160,210,185);
    // draw.quadraticCurveTo(180,180,200,200);
    // draw.stroke();
    // draw.lineWidth = 5;
    // draw.lineCap = "butt";
    // draw.lineJoin = "miter"
    // draw.beginPath();
    // draw.moveTo(200,200);
    // draw.lineTo(300,200);
    // draw.lineTo(250,100);
    // draw.stroke();
    // const linear1 = draw.createLinearGradient(50,50,150,150);
    // linear1.addColorStop(0,"#495dce");
    // linear1.addColorStop(0.5,"rgb(240, 27, 190)");
    // linear1.addColorStop(1,"rgb(230, 112, 76)");

    // draw.fillStyle = linear1;

    // draw.fillRect(0,0,150,150);
    //     draw.fillRect(0,180,150,150);
    //         draw.fillRect(180,0,150,150);

    const picture = new Image();
    picture.onload = ()=>{
  draw.drawImage(picture,10,10,10,10,50,50,100,100);
    }
    picture.src = hero;
  

  },[])
  return (
    <div>
      <canvas id="clock" width="600" height = "600" ref = {canvas}>

      </canvas>
    </div>
  )
}

export default App
