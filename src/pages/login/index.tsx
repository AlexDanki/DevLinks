import { useState, type FormEvent } from 'react'
import {Input} from '../../components/input'

export function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e: FormEvent){
        e.preventDefault();
        console.log({
            email: email,
            password: password
        })
    }

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <h1 className="text-white text-5xl font-bold transition-transform hover:scale-105 mb-5">Dev
            <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">Link</span></h1>
            
            <form className="w-full max-w-[500px] flex px-2 flex-col gap-3.5" action="" onSubmit={handleSubmit}>
                <Input 
                type="email"
                value={email}
                placeholder='Digite seu email...'
                onChange={(e)=> setEmail(e.target.value)}
                />

                <Input 
                type="password"
                value={password}
                placeholder='******'
                onChange={(e)=> setPassword(e.target.value)}
                />
                <button className='w-full py-1 bg-blue-600 text-white font-bold rounded cursor-pointer' type="submit">Entrar</button>
            </form>
        </div>
        
    )
}