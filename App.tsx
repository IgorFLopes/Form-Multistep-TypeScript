// Components
import UserForm from "./components/UserForm"
import ReviewForm from "./components/ReviewForm"
import Thanks from "./components/Thanks"
import Steps from "./components/Steps"

import {GrFormNext, GrFormPrevious,} from "react-icons/gr"
import { FiSend } from "react-icons/fi"

// Hooks
import { useState } from "react"
import {useForm} from "./hooks/useForm"

// CSS

import './App.css'

type CamposDoFormulario = {
  name: string,
  email: string,
  review: string,
  comment: string,
}

// por ser typeScript preciso criar uma maneira de tipar esses dados
const formTemplate: CamposDoFormulario = {
  name: "",
  email: "",
  review: "",
  comment: "",
}


function App() {

  const [data, setData] = useState(formTemplate)

  const atualizarManipuladorDeCampo = (key: string, value: string) => {

    setData((prev) => {
      return {...prev, [key]: value}
    })
  }
  
  const formComponents = [<UserForm key={"userForm"} data={data} atualizarManipuladorDeCampo={atualizarManipuladorDeCampo} />,<ReviewForm data={data} atualizarManipuladorDeCampo={atualizarManipuladorDeCampo} key={"reviewForm"} />,<Thanks data={data} key={"thanks"} />]


  const {etapaAtual, componenteAtual, mudarPasso, ultimoPasso} = useForm(formComponents)
  
  return (
    <div className='app'>
      <div className='header'>
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com sua compra, utilize o formulário abaixo para avaliar o produto</p>
      </div>
      <div className="form-container">
        <Steps etapaAtual={etapaAtual} />
        {/* <p>passos</p> */}
        <form onSubmit={(e) => mudarPasso(etapaAtual + 1, e)}>
          <div className="inputs-container">
            {componenteAtual}
          </div>
          <div className='actions'>
            <button onClick={() => mudarPasso(etapaAtual -1)} type='button'><GrFormPrevious /><span>Voltar</span></button>
            {!ultimoPasso ? (<button type='submit'><span>Avançar</span><GrFormNext /></button>) : (<button type='button'><span>Enviar</span><FiSend/></button>)}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
