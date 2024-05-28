export default function Keyboard() {
  const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']

  return (
    <div className="grid grid-rows-3 grid-cols-3 justify-center h-3/5 text-white m-4 p-4 rounded-2xl">
      {keys.map((key) => (
        <button className="m-1 relative rounded-xl bg-slate-900 shadow-md shadow-red-600 active:shadow-lg active:shadow-red-300 active:top-1">
          {key}
        </button>
      ))}
    </div>
  )
}
