import Image from 'next/image'

export function PlaylistMadeForUser() {
  return (
    <div>
      <h2 className="font-semibold text-2xl mt-10">Made for Gabriel Barros</h2>

      <div className="grid grid-cols-8 gap-4 rounded mt-4">
        <a
          href="#"
          className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
        >
          <Image
            src="/Wasting-Light.jpg"
            className="w-full"
            width={120}
            height={120}
            alt="Capa do álbum Wasting Light da banda Foo Fighters"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallows, COIN, girl in red and more
          </span>
        </a>

        <a
          href="#"
          className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
        >
          <Image
            src="/Wasting-Light.jpg"
            className="w-full"
            width={120}
            height={120}
            alt="Capa do álbum Wasting Light da banda Foo Fighters"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallows, COIN, girl in red and more
          </span>
        </a>

        <a
          href="#"
          className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
        >
          <Image
            src="/Wasting-Light.jpg"
            className="w-full"
            width={120}
            height={120}
            alt="Capa do álbum Wasting Light da banda Foo Fighters"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallows, COIN, girl in red and more
          </span>
        </a>

        <a
          href="#"
          className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
        >
          <Image
            src="/Wasting-Light.jpg"
            className="w-full"
            width={120}
            height={120}
            alt="Capa do álbum Wasting Light da banda Foo Fighters"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallows, COIN, girl in red and more
          </span>
        </a>

        <a
          href="#"
          className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
        >
          <Image
            src="/Wasting-Light.jpg"
            className="w-full"
            width={120}
            height={120}
            alt="Capa do álbum Wasting Light da banda Foo Fighters"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallows, COIN, girl in red and more
          </span>
        </a>
      </div>
    </div>
  )
}
