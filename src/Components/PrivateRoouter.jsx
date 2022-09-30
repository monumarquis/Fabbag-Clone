import {AuthContext} from'../Context/AuthContext'
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
export default function PrivateRoouter({children}){
    const{Auth,}=useContext(AuthContext)
    if(!Auth) return <Navigate to="/" />
    return children
}