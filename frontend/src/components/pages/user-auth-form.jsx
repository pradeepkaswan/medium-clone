import Input from '../ui/input'
import googleIcon from '../../assets/images/google.png'
import { Link } from 'react-router-dom'
import AnimationRevealPage from '../../common/animation-reveal-page'

const UserAuthForm = ({ authType }) => {
  return (
    <AnimationRevealPage key={authType}>
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center">
        <form className="w-[80%] max-w-[400px]">
          <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
            {authType === 'sign-in' ? 'Welcome back.' : 'Join us.'}
          </h1>
          {authType != 'sign-in' ? (
            <Input
              name="fullname"
              type="text"
              placeholder="Full Name"
              icon="fi-rr-user"
            />
          ) : (
            ''
          )}
          <Input
            name="email"
            type="email"
            placeholder="Email"
            icon="fi-sr-at"
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            icon="fi-rr-lock"
          />
          <button
            type="submit"
            className="w-full bg-black text-white rounded-full py-4 mt-8"
          >
            Continue
          </button>
          <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold">
            <div className="w-full h-[1px] bg-black"></div>
            <p className="text-center">or</p>
            <div className="w-full h-[1px] bg-black"></div>
          </div>
          <button className=" flex items-center justify-center gap-4 w-full outline text-black font-bold rounded-full py-4">
            <img src={googleIcon} className="w-5" />
            Continue with Google
          </button>
          <p className="text-center mt-8">
            {authType === 'sign-in'
              ? "Don't have an account?"
              : 'Already have an account?'}
            <Link
              className="text-black font-bold ml-1"
              to={authType === 'sign-in' ? '/signup' : '/signin'}
            >
              {authType === 'sign-in' ? 'Sign up' : 'Sign in'}
            </Link>
          </p>

          <p className="text-center mt-8 text-black font-bold">
            <Link to="/">Back to home</Link>
          </p>
        </form>
      </section>
    </AnimationRevealPage>
  )
}

export default UserAuthForm
