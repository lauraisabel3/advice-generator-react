import React, { useEffect, useState } from 'react'
import { Container, Title, Content, Divider,Button} from './styles'

const Card = () => {
  const [advice, setAdvice] = useState({})
  const [recharge, setRecharge] = useState(false)
  useEffect(() => {
    const getAdvices = async (url) => {
      let rest = await fetch(url),
        json = await rest.json()
        console.log(json)
          let newAdvice = {
            id: json.slip.id,
            content: json.slip.advice
          }
          setAdvice(newAdvice)
        console.log(json)

    }
    getAdvices('	https://api.adviceslip.com/advice')
  }, [recharge])

  

  console.log(advice)
  return(
    <Container>
      <Title>ADVICE #{advice.id}</Title>
      <Content>"{advice.content}"</Content>
      <Divider />
      <Button onClick={() => setRecharge(!recharge)} />
    </Container>
  )
}

export default Card