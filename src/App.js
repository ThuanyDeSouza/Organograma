import { useState } from 'react';
import Banner from './componentes/Banner';
import Classe from './componentes/Classe';
import Formulario from './componentes/Formulario';

function App() {

  const classes = [
    {
      nome: 'Tanque',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Dano',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7EB'
    },
    {
      nome: 'Suporte',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [herois, setHeroi] = useState([])

  const aoNovoHeroiAdicionado = (heroi) => {
      debugger
      setHeroi([...herois, heroi])
  }

  return (
    <div className="App"><Banner /><Formulario classes={classes.map(classe => classe.nome)} aoHeroiCadastrado={heroi => aoNovoHeroiAdicionado(heroi)}/>
      
      {classes.map(classe => <Classe 
        key={classe.nome} 
        nome={classe.nome} 
        corPrimaria={classe.corPrimaria} 
        corSecundaria={classe.corSecundaria}
        herois={herois.filter(heroi => heroi.classe === classe.nome)}
      />)}

    </div>
  );
}

export default App;