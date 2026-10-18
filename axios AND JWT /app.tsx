import { useState } from 'react'
import api from './api.ts'
import './App.css'

function App() {

async function submit(){
  const token = await api.post("/api/post",{
    user:"user",
    password:"12345"
  })

  localStorage.setItem("user",token.data.data);
  console.log(token.data.data);
}

async function check(){
  const success = await api.get("/api/get"
  )
  console.log(success);
}
  return (
    <>
    <button onClick={()=>submit()}>提交</button>
    <button onClick={()=>check()}>检测</button>
    </>
  )
}

export default App
