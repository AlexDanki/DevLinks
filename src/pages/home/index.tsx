
import {Social} from '../../components/social'
import {FaFacebook} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

export function Home(){
    return (
        <div className="w-full h-screen flex flex-col items-center">
            <main className="w-full max-w-11/12 flex  flex-col items-center justify-center pt-20 gap-3">
                <h1 className="text-gray-50 text-3xl font-bold">Sujeito Programador</h1>
                <p className="text-gray-50 py-5 text-[14px]">Veja meus links 👇</p>
                <section className="w-full max-w-[500px] bg-gray-100 text-center py-1 rounded transition-transform hover:scale-105">
                    <a href="">
                        <h3 className="text-[16px] font-b"> Meu canal no Youtube</h3>
                    </a>
                </section>
            </main>

            <footer className='flex gap-2 my-3.5'>
                <Social url="https://facebook.com">
                    <FaFacebook size="35" color="white"/>
                </Social>

                <Social url="https://facebook.com">
                    <FaYoutube size="35" color="white"/>
                </Social>

                <Social url="https://facebook.com">
                    <FaInstagram size="35" color="white"/>
                </Social>   
            </footer>

        </div>
    )
}