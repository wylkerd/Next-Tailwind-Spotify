import { Home as HomeIcon, Library, Search } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <nav className="mt-10 space-y-5">
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Search />
          Search
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Library />
          Your Library
        </a>
      </nav>
      <nav className="mt-6 flex flex-col gap-3 border-t border-zinc-800 pt-6">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Hot Hits Brasil
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Louvores Antigos
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Melhores Kenny G
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          My Playlist #10
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Top World
        </a>
      </nav>
    </aside>
  )
}
