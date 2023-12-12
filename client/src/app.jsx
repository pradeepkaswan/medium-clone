import { useState, useEffect, createContext } from 'react'
import { Route, Routes } from 'react-router'
import Navbar from './components/navbar.jsx'
import UserAuthForm from './components/user-auth-form.jsx'
import { getFromSession } from './common/session.jsx'

export const UserContext = createContext({})

const App = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    let userInSession = getFromSession('user')

    if (userInSession) {
      setUser(JSON.parse(userInSession))
    } else {
      setUser({ access_token: null })
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="login" element={<UserAuthForm authType="login" />} />
          <Route
            path="register"
            element={<UserAuthForm authType="register" />}
          />
        </Route>
      </Routes>
    </UserContext.Provider>
  )
}

export default App
