import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { IColaborador } from '../../compartilhado/interfaces/IColaborador'

interface FormularioProps {
    times: string[],
    aoColaboradorCadastrado: (colaborador: IColaborador) => void

}

const Formulario = ({ times , aoColaboradorCadastrado }: FormularioProps) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [data, setData] = useState('')

    const aoSalvar = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
            data
        })

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        setData('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Campo
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <Campo
                    type='date'
                    label="Data de entrada no time"
                    placeholder=""
                    valor={data}
                    aoAlterado={valor => setData(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario