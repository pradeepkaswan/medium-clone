import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import { mediumLogo, searchIcon, writeBlogIcon } from '../assets/icons.jsx'
import { UserContext } from '../app.jsx'
import { useContext } from 'react'
import SearchBar from './search-bar.jsx'
import UserNavigation from './user-navigation.jsx'

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false)
  const { user } = useContext(UserContext)
  const access_token = user?.access_token || null
  const profile_img = user?.profile_img || null

  return (
    <>
      <nav className="z-10 sticky top-0 flex items-center gap-6 w-full px-[5vw] py-5 h-[56px] border-b border-grey bg-white">
        <Link to="/">{mediumLogo}</Link>

        <SearchBar showSearchBar={showSearchBar} />

        <div className="flex items-center gap-2 md:gap-5 ml-auto">
          <button
            className="md:hidden flex items-center justify-center mr-5 mt-1"
            onClick={() => setShowSearchBar((currentValue) => !currentValue)}
          >
            <div className="text-dark-grey">{searchIcon}</div>
          </button>

          <Link
            to="/editor"
            className="hidden md:flex gap-2 text-dark-grey opacity-85 pt-1 pr-2"
          >
            {writeBlogIcon}
            <p>Write</p>
          </Link>

          <UserNavigation
            access_token={access_token}
            profile_img={profile_img}
          />
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar
