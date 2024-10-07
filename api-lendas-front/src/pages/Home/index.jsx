import { useEffect, useRef, useState } from 'react'
import Lixo from '../../assets/lixo.svg'
import api from '../../services/api'
import './style.css'


function Home() {

  const [lendas, setLendas] = useState([])
  
  const inputNome = useRef()
  const inputDesc = useRef()
  const inputData = useRef()
  const inputPais = useRef()
  const inputCidade = useRef()
  const inputEstado = useRef()
  const inputLocalTipo = useRef()
  const inputLocalDesc = useRef()




  async function getLendas() {
    const lendasFromApi =  await api.get('/lendas')

    setLendas(lendasFromApi.data)
  }


  async function createLendas() {
    const dataPrimeiraAparicao = new Date(inputData.current.value).toISOString();

    await api.post('/lendas', {
      nome: inputNome.current.value,
      descricao: inputDesc.current.value,
      data_primeira_aparicao: dataPrimeiraAparicao,
      origem_pais: inputPais.current.value,
      origem_estado: inputEstado.current.value,
      origem_cidade: inputCidade.current.value,
      localizacao_tipo: inputLocalTipo.current.value,
      localizacao_descricao: inputLocalDesc.current.value
    })

    getLendas()
  }

  async function deleteLendas(id) {
    await api.delete(`/lendas/${id}`)
    getLendas();
  }
  
  

  useEffect(() => {
    getLendas()
  }, [])

  return (
    <div className='container'>
      <div className='column'>
        <form>
          <h1>Cadastro de Lendas</h1>
          <input placeholder='Nome' type="text" name='nome' ref={inputNome} />
          <input placeholder='Descrição' type="text" name='descricao' ref={inputDesc} />
          <input placeholder='Data primeira aparição' type="date" name='data' ref={inputData} />
          <input placeholder='País' type="text" name='pais' ref={inputPais} />
          <input placeholder='Estado' type="text" name='estado' ref={inputEstado} />
          <input placeholder='Cidade' type="text" name='cidade' ref={inputCidade} />
          <input placeholder='Localização Tipo' type="text" name='local_tipo' ref={inputLocalTipo} />
          <input placeholder='Localização Descrição' type="text" name='local_descricao' ref={inputLocalDesc} />


          <button type='button' onClick={createLendas}>Cadastrar</button>
        </form>
        <div>
          { lendas.map( (lenda) => (
            <div key={lenda.id} className='card'>
              <div>
                <h1><span>{lenda.nome}</span></h1><br />
                <p><span>{lenda.descricao}</span></p><br />
                <p>Data Primeira Aparição: <span>{new Date(lenda.data_primeira_aparicao).toLocaleDateString('pt-BR')}</span></p>
                <p>Origem País: <span>{lenda.origem_pais}</span></p>
                <p>Origem Estado: <span>{lenda.origem_estado}</span></p>
                <p>Origem Cidade: <span>{lenda.origem_cidade}</span></p>
                <p>Tipo da Localização: <span>{lenda.localizacao_tipo}</span></p>
                <p>Descrição da Localização: <span>{lenda.localizacao_descricao}</span></p>

              </div>
              <button onClick={() => deleteLendas(lenda.id)}>
                <img src={Lixo}/>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
