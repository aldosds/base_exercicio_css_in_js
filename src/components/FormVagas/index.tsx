import { FormEvent, useState } from 'react'

import { FormVagas as FormeVagasEstilo } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormeVagasEstilo>
      <form onSubmit={aoEnviarForm}>
        <input
          placeholder="Front-end, fullstack, node, design"
          onChange={(e) => setTermo(e.target.value)}
          type="search"
        />
        <button type="submit">Pesquisar</button>
      </form>
    </FormeVagasEstilo>
  )
}
export default FormVagas
