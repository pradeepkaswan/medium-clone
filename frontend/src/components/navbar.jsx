import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import {
  NotificationIcon,
  mediumLogo,
  searchIcon,
  writeBlogIcon,
} from '../assets/icons.jsx'
import { UserContext } from '../app.jsx'
import { useContext } from 'react'

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false)

  const {
    user,
    user: { access_token, profile_img },
  } = useContext(UserContext)

  return (
    <>
      <nav className="z-10 sticky top-0 flex items-center gap-6 w-full px-[5vw] py-5 h-[56px] border-b border-grey bg-white">
        <Link to="/">{mediumLogo}</Link>

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
            className="w-full md:w-auto bg-grey p-2.5 pl-6 pr-[12%] md:pr-4 rounded-full placeholder:text-dark-grey md:pl-14"
          />
          <div className="absolute right-[8%] md:pointer-events-none md:left-3 top-1/2 -translate-y-1/2 text-dark-grey">
            {searchIcon}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-5 ml-auto">
          <button
            className="md:hidden flex items-center justify-center mr-4"
            onClick={() => setShowSearchBar((currentValue) => !currentValue)}
          >
            <div className="text-dark-grey">{searchIcon}</div>
          </button>

          <Link
            to="/editor"
            className="hidden md:flex gap-2 text-dark-grey opacity-75 pt-2 pr-2"
          >
            {writeBlogIcon}
            <p>Write</p>
          </Link>

          {access_token ? (
            <>
              <Link to="/dashboard/notification">
                <button className="w-12 h-12 rounded-full bg-grey relative hover:bg-black/10">
                  {NotificationIcon}
                </button>
              </Link>

              <div className="relative">
                <button className="w-12 h-12 mt-1">
                  <img
                    src={profile_img}
                    alt="profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </button>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/register"
                className="flex flex-row items-center justify-center px-5 py-2 rounded-full gap-2 text-base bg-[#1a8917] border-transparent text-white"
              >
                Sign up
              </Link>
              <Link
                to="/login"
                className="flex flex-row items-center justify-center px-5 py-2 rounded-full gap-2 text-base hover:bg-zinc-100 border-zinc-600 border-transparent text-black "
              >
                Sign in
              </Link>
            </>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar
