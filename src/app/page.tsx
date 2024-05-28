'use client'

import Console from '@/components/console'
import Keyboard from '@/components/keyboard'

export default function Home() {
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

  return (
    <main className="flex w-screen h-screen flex-col items-center justify-center bg-slate-300">
      <div className="drum-machine flex flex-col h-5/6 w-10/12 bg-slate-800 rounded-2xl">
        <Console />
        <Keyboard soundFiles={soundFiles} />
      </div>
    </main>
  )
}
