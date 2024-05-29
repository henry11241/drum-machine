'use client'

import Console from '@/components/console'
import Keyboard from '@/components/keyboard'
import { useEffect, useState } from 'react'

export default function Home() {
  const [powerOn, setPowerOn] = useState(true)
  const soundFiles: [string, string][] = [
    ['Q', '/Heater-1.mp3'],
    ['W', '/Heater-2.mp3'],
    ['E', '/Heater-3.mp3'],
    ['A', '/Heater-4.mp3'],
    ['S', '/Clap.mp3'],
    ['D', '/Open-HH.mp3'],
    ['Z', '/Kick-n-Hat.mp3'],
    ['X', '/Kick.mp3'],
    ['C', '/Closed-HH.mp3'],
  ]
  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPowerOn(event.target.checked)
  }

  useEffect(() => {
    const mainPage = document.querySelector('html')
    const displayArea = document.getElementById('display-text')

    soundFiles.map((sound, index) => {
      const playBtn = document.getElementById(`button-${index}`)
      const audio = new Audio(sound[1])
      const handleClickWhenPowerOn = () => {
        playBtn?.classList.remove('push-on')
        requestAnimationFrame((time) => {
          requestAnimationFrame((time) => {
            playBtn?.classList.add('push-on')
          })
        })
        audio.currentTime = 0
        audio.play()
        if (displayArea) {
          displayArea.innerText = sound[1].split('/')[1].split('.')[0]
        }
      }
      const handleClickWhenPowerOff = () => {
        playBtn?.addEventListener('click', () => {
          playBtn.classList.remove('push-off')
          requestAnimationFrame((time) => {
            requestAnimationFrame((time) => {
              playBtn.classList.add('push-off')
            })
          })
          if (displayArea) {
            displayArea.innerText = sound[1].split('/')[1].split('.')[0]
          }
        })
      }
      const handleKeyDown = () => {
        mainPage?.addEventListener('keydown', (event) => {
          if (event.key === sound[0] || event.key === sound[0].toLowerCase()) {
            playBtn?.click()
          }
        })
      }
      if(powerOn) {
        playBtn?.addEventListener('click', handleClickWhenPowerOn)
      } else {
        playBtn?.addEventListener('click', handleClickWhenPowerOff)
      }     
      return () => {
        playBtn?.removeEventListener('click', handleClickWhenPowerOff)
        playBtn?.removeEventListener('click', handleClickWhenPowerOn)
        playBtn?.classList.remove('push-off')
        playBtn?.classList.remove('push-on')
        mainPage?.removeEventListener('keydown', handleKeyDown)
      } 
    })
  }, [powerOn])

  return (
    <main className="flex w-screen h-screen flex-col items-center justify-center bg-slate-300">
      <div className="drum-machine flex flex-col h-5/6 w-10/12 bg-slate-800 rounded-2xl">
        <Console powerOn={powerOn} handleSwitchChange={handleSwitchChange} />
        <Keyboard soundFiles={soundFiles} />
      </div>
    </main>
  )
}
