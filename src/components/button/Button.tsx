import { MouseEventHandler } from 'react'

type ButtonProps = {
    name: string
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button = ({ ...props }: ButtonProps) => {
    return (
        <button className="bg-primary rounded-md py-2 px-4 hover:bg-primaryLight" onClick={props.onClick}>
            {props.name}
        </button>
    )
}

export default Button
