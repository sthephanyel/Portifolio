import React, { useEffect, useState } from "react"
import { Home } from "./components/Home"
import '../src/global/styles/global.css'
import { AboutMe } from "./components/AboutMe"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { GeneralInformation } from "./components/GeneralInformation"
export function App() {

  return (
    <>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <GeneralInformation/>
    </>
  )
}

