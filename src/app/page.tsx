import Console from '@/components/console'
import Keyboard from '@/components/keyboard'

export default function Home() {
  return (
    <main className="flex w-screen h-screen flex-col items-center justify-center bg-slate-300">
      <div className="drum-machine flex flex-col h-5/6 w-10/12 bg-slate-800 rounded-2xl">
        <Console />
        <Keyboard />
      </div>
    </main>
  )
}
