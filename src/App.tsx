import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/UsersApp/Layout/Layout"
import Home from "./pages/UsersApp/Home/Home"
import Users from "./pages/UsersApp/Users/Users"

//lessons
// import Lesson16 from "./lessons/Lesson16/Lesson16"

//homeworks
import Homework16 from "./homeworks/Homework16/Homework16"

//consultations
// import Consultation08 from "./consultations/Consultation08/Consultation08"



const App = () => {
  return (
    <BrowserRouter>
      {/* <Consultation08 /> */}
      {/* <Lesson16 /> */}
      {/* UserApp - Practice - Lesson16 */}
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='*' element='Page not found'/>
          <Route path='/homework16' element={<Homework16/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
