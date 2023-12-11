import Input from './input.jsx'
import { googleIcon } from '../assets/icons.jsx'
import { Link, Navigate } from 'react-router-dom'
import AnimationWrapper from '../common/page-animation.jsx'
import { Toaster, toast } from 'react-hot-toast'
import axios from 'axios'
import { storeInSession } from '../common/session.jsx'
import { useContext } from 'react'
import { UserContext } from '../app.jsx'

const UserAuthForm = ({ authType }) => {
  const {
    user: { access_token },
    setUser,
  } = useContext(UserContext)

  const userAuthThroughServer = (serverRoute, data) => {
    axios
      .post(import.meta.env.VITE_SERVER_URL + serverRoute, data)
      .then(({ data }) => {
        storeInSession('user', JSON.stringify(data))
        setUser(data)
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let serverRoute = authType === 'login' ? '/login' : '/register'

    let formData = new FormData(formEl)
    let data = {}
    for (let [key, value] of formData.entries()) {
      data[key] = value
    }

    userAuthThroughServer(serverRoute, data)
  }
  return access_token ? (
    <Navigate to="/" />
  ) : (
    <AnimationWrapper keyValue={authType}>
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center">
        <Toaster />
        <form id="formEl" className="w-[80%] max-w-[400px]">
          <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
            {authType === 'login' ? 'Welcome back.' : 'Join us.'}
          </h1>
          {authType !== 'login' ? (
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
            onClick={handleSubmit}
            type="submit"
            className="w-full bg-black text-white border border-black rounded-full py-4 mt-8"
          >
            Continue
          </button>
          <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold">
            <div className="w-full h-[1px] bg-black"></div>
            <p className="text-center">or</p>
            <div className="w-full h-[1px] bg-black"></div>
          </div>
          <button className=" flex items-center justify-center gap-4 w-full border border-gray-500 text-black font-bold rounded-full py-4">
            {googleIcon}
            Continue with Google
          </button>
          <p className="text-center mt-8">
            {authType === 'login'
              ? "Don't have an account?"
              : 'Already have an account?'}
            <Link
              className="text-black font-bold ml-1"
              to={authType === 'login' ? '/register' : '/login'}
            >
              {authType === 'login' ? 'Sign up' : 'Sign in'}
            </Link>
          </p>

          <p className="text-center mt-8 text-black font-bold">
            <Link to="/">Back to home</Link>
          </p>
        </form>
      </section>
    </AnimationWrapper>
  )
}

export default UserAuthForm
