import {useState} from 'react'
import {Header} from '../../components/header'
import {Input} from '../../components/input'

export function Admin(){

    const [nomeLink, setNomeLink] = useState("");
    const [nomeUrl, setNomeUrl] = useState("");
    const [colorFundoLink, setColorFundoLink] = useState("#ffffff");
    const [colortextLink, setColorTextLink] = useState("#000000");

    return (
        <div className='h-screen'>
            <Header/>

            <form className="w-full flex flex-col items-center " action="">

                <div className='w-full max-w-xl mt-6'>
                    <span className='text-green-50  block pb-2'>Nome do link</span>
                    <Input 
                    onChange={(e) => setNomeLink(e.target.value)}
                    value={nomeLink}
                    placeholder='Nome do seu link' />
                </div>

                <div className='w-full max-w-xl mt-6'>
                    <span className='text-green-50  block pb-2'>URL do link</span>
                    <Input 
                    onChange={(e) => setNomeUrl(e.target.value)}
                    value={nomeUrl}
                    placeholder='Gigite a URL' />
                </div>

                <section className='w-full max-w-xl pt-6 flex gap-6'>
                    <div className='flex gap-2'>
                        <span className='text-gray-50'>Fundo do link</span>
                        <input value={colorFundoLink} type="color" onChange={(e)=> setColorFundoLink(e.target.value)}/>
                    </div>

                    <div className='flex gap-2'>
                        <span className='text-gray-50'>Cor do link</span>
                        <input value={colortextLink} type="color" onChange={(e)=> setColorTextLink(e.target.value)}/>
                    </div>
                    
                    
                </section>

            </form>

            <section className="w-full flex flex-col items-center  py-6 rounded">

                <span className='text-gray-50'>Veja como está ficando</span>

                <div className='w-full max-w-2xl text-center flex flex-col items-center border-2 py-2.5 mt-2 border-gray-700'>
                    <section style={{color:colortextLink, backgroundColor:colorFundoLink}} className="w-full max-w-[500px] bg-gray-100 text-center py-1 rounded">
                        <h3 className="text-[16px] font-b"> Nome do link</h3>
                    </section>
                </div>

            </section>
        </div>
    )
}