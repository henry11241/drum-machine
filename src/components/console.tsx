interface ConsoleProps {
  powerOn: boolean
  handleSwitchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Console({ powerOn, handleSwitchChange }: ConsoleProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 h-2/5 text-white m-4 mb-0 p-4 bg-slate-700 rounded-2xl">
      <div className="switch"></div>
      <h2>Power</h2>
      <label
        htmlFor="switch"
        className="relative h-8 w-14 mb-1 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500 scale-75"
      >
        <input
          type="checkbox"
          id="switch"
          className="peer sr-only"
          checked={powerOn}
          onChange={handleSwitchChange}
        />

        <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
      </label>
      <div className="display flex items-center justify-center w-40 h-8 mb-1 text-black text-2xl font-bold bg-slate-400">
        <span id="display-text"></span>
      </div>
      <h2>Volume</h2>
      <input
        type="range"
        id="volumeSlider"
        min="0"
        max="1"
        step="0.01"
        defaultValue="1"
      />
    </div>
  )
}
