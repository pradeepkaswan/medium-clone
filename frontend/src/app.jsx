import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from './components/navbar.jsx'
import UserAuthForm from './components/pages/user-auth-form.jsx'
import { getFromSession } from './common/session.jsx'

export const UserContext = React.createContext({})

const App = () => {
  const [user, setUser] = React.useState()

  React.useEffect(() => {
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
