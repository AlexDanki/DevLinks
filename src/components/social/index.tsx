
import type { ReactNode } from 'react'

interface SocialProp{
    url: string,
    children: ReactNode
}

export function Social(props: SocialProp){
    return(
        <a 
        rel="noopener noreferrer"
        target="_blank"
        href={props.url}>
            { props.children }
        </a>
    )
}