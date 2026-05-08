// import React from 'react'

function Btn({content, work}) {
  return (
    <button onClick={work} className="text-xl font-bold text-zinc-100 bg-zinc-700 rounded-lg py-3 px-4 shadow shadow-white active:scale-95 active:bg-zinc-500 transition-all duration-150">{content}</button>
  )
}

export default Btn