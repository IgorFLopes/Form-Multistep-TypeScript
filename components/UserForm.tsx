type UserProps = {
  data: {
    name: string,
    email: string,
  }
  // para tipar a funçaõ precisamos colocar os argumentos e retorno delas....
  // quando eu tenho um retorno nulo ou não tenho retorno na função eu tipo como "void"
  atualizarManipuladorDeCampo: (key: string, value: string) => void
}

const UserForm = ({ data, atualizarManipuladorDeCampo }: UserProps) => {
    
  return <div>
    <div className="form-control">
      <label htmlFor="name">Nome:</label>
      <input type="text" name='name' id='name' placeholder='Digite seu nome' required value={data.name || ""} onChange={(e) => atualizarManipuladorDeCampo("name", e.target.value)} />
    </div>
    <div className="form-control">
      <label htmlFor="email">E-mail:</label>
      <input type="text" name='email' id='email' placeholder='Digite seu e-mail' required value={data.email || ""} onChange={(e) => atualizarManipuladorDeCampo("email", e.target.value)}/>
    </div>
    
  </div>
    
  
}

export default UserForm