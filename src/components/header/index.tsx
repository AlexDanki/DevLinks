import {BiLogOut} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import {auth} from '../../services/firebaseConnection'
import {signOut} from 'firebase/auth'

export function Header(){

    async function handleLogout(){
        await signOut(auth);
    }

    return(
        <header className="w-full flex  justify-center pt-6 px-2">
            <nav className='w-full max-w-2xl flex justify-between bg-white px-3 py-2 rounded-md'>
                <div className="flex gap-4 font-medium">
                    <Link to="/">Home</Link>
                    <Link to="/admin">Links</Link>
                    <Link to="/admin/social">Redes sociais</Link>
                </div>
                <button onClick={handleLogout}>
                    < BiLogOut className='cursor-pointer text-red-700' size="24"/>
                </button>                
            </nav>
        </header>
    )
}