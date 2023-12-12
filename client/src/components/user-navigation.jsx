import UserNavigationMenu from './user-navigation-menu.jsx'
import { Link } from 'react-router-dom'
import { NotificationIcon } from '../assets/icons.jsx'
import { useState } from 'react'

const UserNavigation = ({ access_token, profile_img }) => {
  const [userNavMenu, setUserNavMenu] = useState(false)

  const handleUserNavMenu = () => {
    setUserNavMenu(!userNavMenu)
  }

  const handleBlur = () => {
    setTimeout(() => {
      setUserNavMenu(false)
    }, 200)
  }

  return access_token ? (
    <>
      <Link to="/dashboard/notification">
        <button className="w-12 h-12 pt-1 relative text-dark-grey opacity-85">
          {NotificationIcon}
        </button>
      </Link>

      <div className="relative" onClick={handleUserNavMenu} onBlur={handleBlur}>
        <button>
          <img
            src={profile_img}
            alt="profile"
            className="w-10 h-10 mt-2 object-cover rounded-full"
          />
        </button>

        {userNavMenu ? <UserNavigationMenu /> : ''}
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
  )
}

export default UserNavigation
