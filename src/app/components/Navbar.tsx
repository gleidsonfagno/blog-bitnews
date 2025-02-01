import Image from "next/image";

export function Navbar() {
  return (
    <nav className="border-b bg-navigator">
      <div className="py-8 flex flex-row justify-between items-center max-w-6xl mx-auto">
        <button className="text-yellow-400 text-xl font-bold">BTINEWS</button>

        <ul
          className="flex flex-row gap-8 items-center max-md:hidden
        "
        >
          <li>
            <a className="border-b border-transparent hover:border-yellow-400 text-base font-bold p-[6px]" href="#">Home</a>
          </li>
          <li>
            <a className="border-b border-transparent hover:border-yellow-400 text-base font-bold   p-[6px]" href="#">Tecnologia</a>
          </li>
          <li>
            <a className="border-b border-transparent hover:border-yellow-400 text-base font-bold   p-[6px]" href="#">Startup</a>
          </li>
          <li>
            <a className="border-b border-transparent hover:border-yellow-400 text-base font-bold   p-[6px]" href="#">Jogos</a>
          </li>

          <li>
            <button>
              <Image
                src="/Loading.svg"
                width={24}
                height={24}
                alt="icone de luz"
              />
            </button>
          </li>

        </ul>

          <button className="hidden max-md:block">
          <Image
                src="/Loading.svg"
                width={24}
                height={24}
                alt="icone de luz"
              />
          </button>
      </div>
    </nav>
  );
}
