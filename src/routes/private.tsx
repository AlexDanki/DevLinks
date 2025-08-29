import { type ReactNode, useState, useEffect } from "react"
import {Navigate} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from '../../src/services/firebaseConnection'


interface PrivateProp{
    children: ReactNode,
}

export function Private(props: PrivateProp){

    const [logado, setLogado] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const cout = onAuthStateChanged(auth,(user)=>{
            
            if(user){
                setLogado(true);
                setLoading(false);
            }
            else{
                setLogado(false)
                setLoading(false);
            }

        })

        return ()=> cout();
    },[])

    if(loading){
        return <><h1>Loading...</h1></>
    }

    if(!logado){
       return <Navigate to="/login"/>
    }

    return(
        <>
        {props.children}
        </>
    )
}