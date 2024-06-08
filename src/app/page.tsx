'use client'

import Console from '@/components/console'
import Keyboard from '@/components/keyboard'
import { useEffect, useState, useRef } from 'react'

export default function Home() {
  const [powerOn, setPowerOn] = useState(true)
  const [volume, setVolume] = useState(0.3)
  const audioElements = useRef<HTMLAudioElement[]>([])

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

  // Power switch
  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPowerOn(event.target.checked)
    const volumeSlider = document.getElementById('volumeSlider')
    volumeSlider?.classList.toggle('readonly-input')
  }

  // Volume change
  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value)
    setVolume(newVolume)
  }

  // Update the volume for all audio elements
  useEffect(() => {
    audioElements.current.forEach((audio) => {
      audio.volume = volume
    })
    const displayArea = document.getElementById('display-text')
    if (displayArea) {
      displayArea.innerText = `Volume: ${volume.toFixed(2).split(".")[1]}`
    }
  }, [volume])

  // Event Listeners for keyboard
  useEffect(() => {
    const mainPage = document.querySelector('html')
    const displayArea = document.getElementById('display-text')
    const eventListeners: any[] = []

    if (displayArea) {
      displayArea.innerText = ''
    }

    soundFiles.forEach((sound, index) => {
      const playBtn = document.getElementById(`button-${index}`)
      const audio = new Audio(sound[1])
      audio.volume = volume
      audioElements.current[index] = audio

      const handleClick = () => {
        playBtn?.classList.remove('push-on')
        playBtn?.classList.remove('push-off')
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (powerOn) {
              playBtn?.classList.add('push-on')
              audio.currentTime = 0
              audio.play()
              if (displayArea) {
                displayArea.innerText = sound[1].split('/')[1].split('.')[0]
              }
            } else {
              playBtn?.classList.add('push-off')
            }
          })
        })
      }

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === sound[0] || event.key === sound[0].toLowerCase()) {
          handleClick()
        }
      }

      playBtn?.addEventListener('click', handleClick)
      mainPage?.addEventListener('keydown', handleKeyDown)

      eventListeners.push({
        element: playBtn,
        event: 'click',
        listener: handleClick,
      })

      eventListeners.push({
        element: mainPage,
        event: 'keydown',
        listener: handleKeyDown,
      })
    })

    return () => {
      eventListeners.forEach(({ element, event, listener }) => {
        element?.removeEventListener(event, listener)
      })
    }
  }, [powerOn])

  return (
    <main className="flex w-screen h-screen flex-col items-center justify-center bg-slate-300">
      <div className="drum-machine flex flex-col h-5/6 w-10/12 bg-slate-800 rounded-2xl">
        <Console
          powerOn={powerOn}
          volume={volume}
          handleSwitchChange={handleSwitchChange}
          handleVolumeChange={handleVolumeChange}
        />
        <Keyboard soundFiles={soundFiles} />
      </div>
    </main>
  )
}
