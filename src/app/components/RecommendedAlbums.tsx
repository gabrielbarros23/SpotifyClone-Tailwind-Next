import { Play } from 'lucide-react'
import Image from 'next/image'

export function RecommendedAlbums() {
  return (
    <div>
      <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

      <div className="grid xl:grid-cols-3 grid-cols-2 gap-4 mt-4 ">
        <a
          href="#"
          className="bg-white/5 rounded overflow-hidden group flex items-center gap-4 hover:bg-white/10 transition-colors"
        >
          <Image
            src="/Wasting-Light.jpg"
            width={90}
            height={90}
            alt="Capa do álbum Wasting Light da banda Foo Fighters"
          />
          <strong>Wasting Light</strong>
          <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 w-12 h-12 flex items-center justify-center pl-3 invisible group-hover:visible">
            <Play />
          </button>
        </a>

        <a
          href="#"
          className="bg-white/5 rounded overflow-hidden group flex items-center gap-4 hover:bg-white/10 transition-colors"
        >
          <Image
            src="/Wasting-Light.jpg"
            width={90}
            height={90}
            alt="Capa do álbum Wasting Light da banda Foo Fighters"
          />
          <strong>Wasting Light</strong>
          <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 w-12 h-12 flex items-center justify-center pl-3 invisible group-hover:visible">
            <Play />
          </button>
        </a>

        <a
          href="#"
          className="bg-white/5 rounded overflow-hidden group flex items-center gap-4 hover:bg-white/10 transition-colors"
        >
          <Image
            src="/Wasting-Light.jpg"
            width={90}
            height={90}
            alt="Capa do álbum Wasting Light da banda Foo Fighters"
          />
          <strong>Wasting Light</strong>
          <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 w-12 h-12 flex items-center justify-center pl-3 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 rounded overflow-hidden group flex items-center gap-4 hover:bg-white/10 transition-colors"
        >
          <Image
            src="/Wasting-Light.jpg"
            width={90}
            height={90}
            alt="Capa do álbum Wasting Light da banda Foo Fighters"
          />
          <strong>Wasting Light</strong>
          <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 w-12 h-12 flex items-center justify-center pl-3 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 rounded overflow-hidden group flex items-center gap-4 hover:bg-white/10 transition-colors"
        >
          <Image
            src="/Wasting-Light.jpg"
            width={90}
            height={90}
            alt="Capa do álbum Wasting Light da banda Foo Fighters"
          />
          <strong>Wasting Light</strong>
          <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 w-12 h-12 flex items-center justify-center pl-3 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 rounded overflow-hidden group flex items-center gap-4 hover:bg-white/10 transition-colors"
        >
          <Image
            src="/Wasting-Light.jpg"
            width={90}
            height={90}
            alt="Capa do álbum Wasting Light da banda Foo Fighters"
          />
          <strong>Wasting Light</strong>
          <button className="p-2 rounded-full bg-green-400 text-black ml-auto mr-8 w-12 h-12 flex items-center justify-center pl-3 invisible group-hover:visible">
            <Play />
          </button>
        </a>
      </div>
    </div>
  )
}
