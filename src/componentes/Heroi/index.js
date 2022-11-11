import './Heroi.css'

const Heroi = ({ nome, imagem, corDeFundo }) => {
    return (
        <div className='heroi'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
            </div>
        </div>
    )
}

export default Heroi