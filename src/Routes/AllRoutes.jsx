import { Route,Routes } from "react-router-dom"
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from "../Pages/Register"
export default function AllRoutes(){
    return<>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
    </Routes>
    </>
}