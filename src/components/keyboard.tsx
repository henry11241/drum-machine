interface KeyboardProps {
  soundFiles: [string, string][]
}

export default function Keyboard({ soundFiles }: KeyboardProps) {
  return (
    <div className="grid grid-rows-3 grid-cols-3 justify-center h-3/5 text-white m-4 p-4 rounded-2xl">
      {soundFiles.map((key, index) => (
        <button
          className="m-1 relative rounded-xl bg-slate-900 shadow-md shadow-red-600 transition focus:outline-none"
          key={`button-${index}`}
          id={`button-${index}`}
        >
          {key[0]}
        </button>
      ))}
    </div>
  )
}
