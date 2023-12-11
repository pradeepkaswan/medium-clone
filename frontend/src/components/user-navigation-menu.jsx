import { writeBlogIcon } from '../assets/icons'
import AnimationWrapper from '../common/page-animation'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../app'
import { removeFromSession } from '../common/session'

const UserNavigationMenu = () => {
  const { user, setUser } = useContext(UserContext)
  const username = user?.username || null

  const handleSignOut = () => {
    removeFromSession('user')
    setUser({ access_token: null })
  }

  return (
    <AnimationWrapper
      className="absolute right-0 z-50"
      transition={{ duration: 0.2 }}
    >
      <div className="bg-white absolute right-0 border border-grey w-60 duration-200">
        <Link to="/editor" className="flex gap-3 link md:hidden">
          {writeBlogIcon}
          <p>Write</p>
        </Link>

        <Link to={`/user/${username}`} className="link pl-8 py-4">
          Profile
        </Link>

        <Link to="/dashboard/blogs" className="link pl-8 py-4">
          Dashboard
        </Link>

        <Link to="/settings/edit-profile" className="link pl-8 py-4">
          Settings
        </Link>

        <span className="absolute border-t border-grey w-[100%]"></span>

        <button
          className="text-left p-4 hover:bg-grey w-full pl-8 py-4 link"
          onClick={handleSignOut}
        >
          <h1 className="mg-1">Sign out</h1>
          <p className="font-bold text-dark-grey">@{username}</p>
        </button>
      </div>
    </AnimationWrapper>
  )
}

export default UserNavigationMenu
