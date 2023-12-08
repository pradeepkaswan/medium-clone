import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false)

  return (
    <>
      <nav className="z-10 sticky top-0 flex items-center gap-12 w-full px-[5vw] py-5 h-[70px] border-b border-grey bg-white">
        <Link
          to="/"
          className="flex-none w-28 font-gelasio font-semibold text-3xl"
        >
          Medium
        </Link>

        <div
          className={
            'absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:opacity-100 md:pointer-events-auto ' +
            (showSearchBar
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none duration-100')
          }
        >
          <input
            type="text"
            placeholder="Search"
            className="w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey md:pl-14"
          />
          <i className="fi fi-rr-search absolute right-[8%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey"></i>
        </div>

        <div className="flex items-center gap-2 md:gap-5 ml-auto">
          <button
            className="md:hidden flex items-center justify-center mr-4"
            onClick={() => setShowSearchBar((currentValue) => !currentValue)}
          >
            <i className="fi fi-rr-search text-xl"></i>
          </button>

          <Link
            to="/editor"
            className="hidden md:flex gap-2 text-dark-grey opacity-75 pt-2 pr-2"
          >
            <i className="fi fi-rr-file-edit text-xl"></i>
            <p>Write</p>
          </Link>

          <Link
            to="/signup"
            className="flex flex-row items-center justify-center px-5 py-2 rounded-full gap-2 text-base  bg-black hover:bg-black/90 border-transparent text-white"
          >
            Sign Up
          </Link>
          <Link
            to="/signin"
            className="flex flex-row items-center justify-center px-5 py-2 rounded-full gap-2 text-base hover:bg-zinc-100 border-zinc-600 border-transparent text-black "
          >
            Sign In
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar
