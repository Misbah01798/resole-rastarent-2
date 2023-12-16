import { Outlet } from "react-router-dom"
import MainLayout from "./Pages/MainLayout"



function App() {
  

  return <MainLayout>
    <Outlet></Outlet>
  </MainLayout>
}

export default App;
