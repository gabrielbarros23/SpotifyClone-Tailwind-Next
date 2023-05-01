import {
  Library,
  Maximize2,
  MonitorSmartphone,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume1,
  Mic2,
  Repeat,
  Heart,
} from 'lucide-react'
import Image from 'next/image'

export function FooterControls() {
  return (
    <footer className="bg-zinc-800 bg-opacity-20 border-t border-zinc-700 p-4 flex justify-between h-18 items-center">
      <div className="flex items-center gap-3 ">
        <Image
          src="/Wasting-Light.jpg"
          width={50}
          height={50}
          alt="Capa do álbum Wasting Light da banda Foo Fighters"
        />

        <div className="flex flex-col">
          <strong className="text-sm font-semibold">Rope</strong>
          <span className="text-xs text-zinc-400">Foo Fighters</span>
        </div>

        <Heart className="w-5 h-5 cursor-pointer" />
      </div>

      <div className="flex flex-col w-2/5 gap-3 cursor-pointer">
        <div className="flex gap-4 items-center justify-center">
          <Shuffle className="h-4 w-4" />

          <SkipBack className="h-6 w-6" />

          <button className="rounded-full p-1 h-10 w-10 pl-2 flex items-center justify-center bg-white">
            <Play className=" text-black" />
          </button>

          <SkipForward className="h-6 w-6" />

          <Repeat className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-zinc-400">0:43</span>

          <div className="w-full bg-zinc-800 rounded-full h-1.5 dark:bg-zinc-800">
            <div className="bg-white h-1.5 rounded-full w-1/4"></div>
          </div>

          <span className="text-xs text-zinc-400">2:52</span>
        </div>
      </div>

      <div className="flex items-center gap-4 cursor-pointer">
        <Mic2 />

        <Library />

        <MonitorSmartphone />

        <div className="flex w-32 items-center">
          <Volume1 />
          <div className="w-full bg-zinc-800 rounded-full h-1.5 dark:bg-zinc-800 cursor-pointer">
            <div className="bg-white h-1.5 rounded-full w-1/4"></div>
          </div>
        </div>

        <Maximize2 />
      </div>
    </footer>
  )
}
