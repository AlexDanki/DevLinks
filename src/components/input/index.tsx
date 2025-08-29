import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function Input(props: InputProps){
    return (
        <input  className="w-full bg-white border-none focus:outline-none rounded px-2 py-1" 
        {...props}
        />
    )
}