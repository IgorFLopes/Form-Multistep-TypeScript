import type { ReactElement, FormEvent } from "react"
import { useState } from "react"

export function useForm(passos: ReactElement[]) {

    const [etapaAtual, setEtapaAtual] = useState(0)

    // como nem sempre o evento vem ou é chamado, colocamos o "?" para esse parametro não ser obrigatório.
         function mudarPasso(i: number, e?: FormEvent) {
        //  e?.preventDefault()
        if(e) {
        e.preventDefault()
        }

        if(i < 0 || i >= passos.length) return

        setEtapaAtual(i)
    }

    

   return {
    mudarPasso,
    componenteAtual: passos[etapaAtual],
    etapaAtual,
    ultimoPasso: etapaAtual + 1 === passos.length 
   }
}


