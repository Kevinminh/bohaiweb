type FormInputProps = {
    placeholder: string
    children?: React.ReactNode
}

const FormInput = ({ ...props }: FormInputProps) => {
    return (
        <div className="flex items-center justify-between border-b-2">
            <input
                placeholder={props.placeholder}
                className="bg-transparent focus:outline-none font-normal pb-2 text-sm w-60"
            />
            {props.children}
        </div>
    )
}

export default FormInput
