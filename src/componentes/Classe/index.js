import Heroi from '../Heroi'
import './Classe.css'

const Classe = (props) => {

    const css = {backgroundColor: props.corSecundaria}
    const cssBorder = {borderColor: props.corPrimaria}

    return (
        props.herois.length > 0 && <section className='classe' style={css}>
            <h3 style={cssBorder}>{props.nome}</h3>
            <div className='herois'>
                {props.herois.map( heroi => <Heroi corDeFundo={props.corPrimaria} key={heroi.nome} nome={heroi.nome} imagem={heroi.imagem}/>)}
            </div>
        </section>
    )
}

export default Classe