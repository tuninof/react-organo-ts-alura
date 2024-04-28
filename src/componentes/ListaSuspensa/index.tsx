import './ListaSuspensa.css'

interface ListaSuspensaProps {
    aoAlterado: (valor: string) => void
    obrigatorio?: boolean
    valor: string 
    itens: string[] 
    label: string
}

const ListaSuspensa = ({aoAlterado, obrigatorio = false, valor, itens, label}: ListaSuspensaProps) => {
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select
                onChange={evento => aoAlterado(evento.target.value)}
                required={obrigatorio}
                value={valor}>

                <option value=""></option>
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa