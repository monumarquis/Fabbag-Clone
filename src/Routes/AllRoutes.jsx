import { Route,Routes } from "react-router-dom"
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from "../Pages/Register"
import PrivateRoouter from "../Components/PrivateRoouter"
import Cart from "../Components/Cart"
import AssociativeBrands from "../Pages/AssociativeBrands"
import About from "../Pages/About"

export default function AllRoutes(){
    return<>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/cart" element={<PrivateRoouter><Cart/></PrivateRoouter>}></Route>
        <Route path="/associative-brands" element={<AssociativeBrands/>}></Route>
        <Route path="/about-us" element={<About/>}></Route>
    </Routes>
    </>
}