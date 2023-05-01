'use client'
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ScreenShare,
  User,
} from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [popUp, setPopUp] = useState(false)

  function openMenu() {
    setPopUp((prevState) => !prevState)
  }

  return (
    <div className="flex items-center justify-between ">
      <div className="flex gap-3">
        <button className="rounded-full bg-black/40 p-1">
          <ChevronLeft />
        </button>
        <button className="rounded-full bg-black/40 p-1">
          <ChevronRight />
        </button>
      </div>

      <button
        className="bg-zinc-800 flex rounded-full items-center gap-3 h-7 cursor-pointer relative px-0.5"
        onClick={openMenu}
        onBlur={() => setTimeout(() => setPopUp(false), 120)}
      >
        <User className=" bg-gray-500 rounded-full" />
        <span className="text-sm font-bold">Gabriel</span>
        {popUp ? <ChevronUp /> : <ChevronDown />}

        <div
          className={`${
            popUp ? 'flex' : 'hidden'
          } flex-col absolute top-9 w-52 right-1 p-1 pt-2 bg-zinc-800 shadow-2xl box-border rounded-lg`}
        >
          <nav className="flex flex-col gap-3">
            <a
              href=""
              className="px-3 flex justify-between rounded-sm h-10 items-center hover:bg-zinc-700 hover:bg-opacity-95"
            >
              Conta <ScreenShare className="w-5 h-5" />
            </a>
            <a
              href=""
              className="px-3 rounded-sm h-10 flex items-center hover:bg-zinc-700 hover:bg-opacity-95"
            >
              Perfil
            </a>
            <a
              href=""
              className="px-3 rounded-sm h-10 flex items-center hover:bg-zinc-700 hover:bg-opacity-95"
            >
              Configurações
            </a>
            <a
              href=""
              className="px-3 rounded-sm h-10 flex items-center hover:bg-zinc-700 hover:bg-opacity-95 border-t-zinc-700 border-t"
            >
              Sair
            </a>
          </nav>
        </div>
      </button>
    </div>
  )
}
