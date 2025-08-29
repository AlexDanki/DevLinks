import {useState, type FormEvent} from 'react'
import {Header} from '../../components/header'
import {Input} from '../../components/input'
import {IoLink} from 'react-icons/io5'
import { IoTrashOutline } from "react-icons/io5";
import { addDoc, collection } from 'firebase/firestore';
import {db} from '../../services/firebaseConnection'

export function Admin(){

    const [nomeLink, setNomeLink] = useState("");
    const [nomeUrl, setNomeUrl] = useState("");
    const [colorFundoLink, setColorFundoLink] = useState("#ffffff");
    const [colortextLink, setColorTextLink] = useState("#000000");

    async function handleCadastrar(e: FormEvent){
        e.preventDefault();
        if(nomeLink === '' || nomeUrl === ''){
            alert("VERIFIQUE OS DADOS E TENTE NOVAMENTE");
            return;
        }

        addDoc(collection(db, "Links"),{
            nomeLink: nomeLink,
            url: nomeUrl,
            bgColor: colorFundoLink,
            textColor: colortextLink
        })
        .then(()=>{
            console.log("CADASTRADO COM SUCESSO");
            setNomeLink("");
            setNomeUrl("");
        })
        .catch(()=>{
            console.log("ERRO AO CADASTRAR");
        })
    }

    return (
        <div className='h-screen'>
            <Header/>

            <form className="w-full flex flex-col items-center " action="" onSubmit={handleCadastrar}>

                <div className='w-11/12 max-w-xl mt-6'>
                    <span className='text-green-50  block pb-2'>Nome do link</span>
                    <Input 
                    onChange={(e) => setNomeLink(e.target.value)}
                    value={nomeLink}
                    placeholder='Nome do seu link' />
                </div>

                <div className='w-11/12 max-w-xl mt-6'>
                    <span className='text-green-50  block pb-2'>URL do link</span>
                    <Input 
                    type='url'
                    onChange={(e) => setNomeUrl(e.target.value)}
                    value={nomeUrl}
                    placeholder='Gigite a URL' />
                </div>

                <section className='w-11/12 max-w-xl pt-6 flex gap-6'>
                    <div className='flex gap-2'>
                        <span className='text-gray-50'>Fundo do link</span>
                        <input className='w-[36px] h-[31px] rounded bg-gray-300 ' value={colorFundoLink} type="color" onChange={(e)=> setColorFundoLink(e.target.value)}/>
                    </div>

                    <div className='flex gap-2'>
                        <span className='text-gray-50'>Cor do link</span>
                        <input className='w-[36px] h-[31px] rounded bg-gray-300  ' value={colortextLink} type="color" onChange={(e)=> setColorTextLink(e.target.value)}/>
                    </div>
                    
                    
                </section>

                {
                    nomeLink !== '' && (
                    <article className="w-full flex flex-col items-center  py-6 rounded">

                        <span className='text-gray-50'>Veja como está ficando</span>

                        <div className='w-full max-w-2xl text-center flex flex-col items-center border-2 py-8 mt-2 border-gray-700'>
                            <section style={{color:colortextLink, backgroundColor:colorFundoLink}} 
                            className="w-full max-w-[500px] bg-gray-100 text-center py-1 rounded">
                                <h3 className="text-[16px] font-b"> {nomeLink}</h3>
                            </section>
                        </div>

                    </article>                        
                    )
                }

                <div className="mt-3.5 w-11/12 max-w-xl">
                    <button type="submit" className=' bg-blue-600 w-full flex items-center justify-center cursor-pointer gap-2 text-white font-medium py-1 rounded-sm'>
                        <p>Cadastrar</p> <IoLink size="22"/>
                    </button> 
                </div>            

            </form>

            <h2 className='text-center pt-11 text-[28px] font-bold text-white pb-2'>Meus links</h2>
            <article className='flex w-full items-center justify-center'>

                <div className='bg-red-700 w-11/12 max-w-xl py-2 px-2 flex items-center justify-between rounded-sm'>
                    <p className='text-white'>Canal do youtube</p>

                    <button className='text-white border-[1px] border-white border-dashed p-1 bg-gray-900 '>
                        <IoTrashOutline />
                    </button>
                </div>

            </article>


        </div>
    )
}