import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./components/Login"

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <div>Home</div>
        }/>
        
        <Route path="/login" Component={Login}/>
      </Routes>
    </div>
  )
}

export default App