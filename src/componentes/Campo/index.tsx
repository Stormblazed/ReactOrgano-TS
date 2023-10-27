import './Campo.css'

interface CampoProps {
    placeholder: string,
    label: string,
    aoAlterado: (valor: string) => void,
    valor: string,    
    obrigatorio?: boolean
    type?: 'text' |'password'| 'date' | 'email' | 'number'
}

const Campo = ({ placeholder,label, aoAlterado,  valor , obrigatorio = false , type = 'text' }: CampoProps) => {

    const placeholderModificada = `${placeholder}...`

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input 
                type={type}
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholderModificada}                 
            />
        </div>
    )
}

export default Campo