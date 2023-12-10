import UserNavigationPanel from './user-navigation-panel.jsx'
import { Link } from 'react-router-dom'
import { NotificationIcon } from '../assets/icons.jsx'

const UserNavigation = ({ access_token, profile_img }) =>
  access_token ? (
    <>
      <Link to="/dashboard/notification">
        <button className="w-12 h-12 pt-1 relative text-dark-grey opacity-85">
          {NotificationIcon}
        </button>
      </Link>

      <div className="relative">
        <button>
          <img
            src={profile_img}
            alt="profile"
            className="w-10 h-10 mt-2 object-cover rounded-full"
          />
        </button>

        <UserNavigationPanel />
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

export default UserNavigation
