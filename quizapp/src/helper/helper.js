import { useSelector } from "react-redux";
import {Navigate} from 'react-router-dom';

export function CheckUserExist({ childrens }){
    const auth = useSelector(state => state.result.userId)
    return auth ? childrens: <Navigate to={'/'} replace={true}></Navigate>
}