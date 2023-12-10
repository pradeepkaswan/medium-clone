import AnimationWrapper from '../common/animation-wrapper'
import { Link } from 'react-router-dom'

const UserNavigationPanel = () => {
  return (
    <AnimationWrapper transition={{ duration: 0.2 }}>
      <div className="bg-white absolute right-0 border border-grey w-60 overflow-hidden duration-200">
        <Link to="/editor" className="flex gap-2 "></Link>
      </div>
    </AnimationWrapper>
  )
}

export default UserNavigationPanel
