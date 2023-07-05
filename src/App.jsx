import { useState } from 'react'
import styles from './App.module.css'
import Header from './Components/UI/Header.jsx'
import Container from './Components/UI/Container'
import FormComponent from './Components/FormComponents/FormComponent'
import TableComponent from './Components/TableComponent/TableComponent'

function App() {

  const [investmentData, setInvestmentData] = useState('');

  const formValuesHandler = (data) =>{
    setInvestmentData(data)
  }

  return (
    <div>
      <Header></Header>
      <Container>
        <FormComponent handler={formValuesHandler}></FormComponent>
      </Container>
      <TableComponent values={investmentData}></TableComponent>
    </div>
  )
}

export default App
