
import type { ReactNode } from 'react'

interface SocialProp{
    url: string,
    children: ReactNode
}

export function Social(props: SocialProp){
    return(
        <a 
        className='transition-transform hover:scale-105'
        rel="noopener noreferrer"
        target="_blank"
        href={props.url}>
            { props.children }
        </a>
    )
}