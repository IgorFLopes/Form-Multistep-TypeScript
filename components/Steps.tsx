import { AiOutlineUser, AiOutlineStar } from "react-icons/ai"
import {FiSend} from 'react-icons/fi'

import './Steps.css'

type stepsProps = {
    etapaAtual: number
}

const Steps = ({etapaAtual}: stepsProps) => {
  return (
    <div className='steps'>
        <div className='step active'>
            <AiOutlineUser />
            <p>Identificação</p>
        </div>
        <div className={`step ${etapaAtual >= 1 ? "active" : ""}`}>
            <AiOutlineStar />
            <p>Avaliação</p>
        </div>
        <div className={`step ${etapaAtual >= 2 ? "active" : ""}`}>
            <FiSend />
            <p>Envio</p>
        </div>
    </div>
  )
}

export default Steps
