import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { insereTarefa } from "../services/TaskService"


export default function NovoForm() {
  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()

  function onSubmit(data) {
    try {
    //chamar TaskService
    insereTarefa(data)
    //navegar para Home
    navigate('/')
    }catch (error){
      console.log(error.message)
    }
  }


  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome da Tarefa</label>
        <input type="text" {...register("nome")}/>
      </div>
      <div>
        <label>Prioridade</label>
        <select {...register("prioridade")}>
          <option value="1" >Urgente</option>
          <option value="2" >Importante</option>
          <option value="3" >Normal</option>
        </select>
      </div>
      <button>Salvar</button>
    </form>
    </>
  )
}