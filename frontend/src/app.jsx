import { Route, Routes } from 'react-router'
import Navbar from './components/navbar.jsx'
import UserAuthForm from './components/pages/user-auth-form.jsx'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route
          path="signin"
          element={
            <h1>
              <UserAuthForm authType="sign-in" />
            </h1>
          }
        />
        <Route
          path="signup"
          element={
            <h1>
              <UserAuthForm authType="sign-up" />
            </h1>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
