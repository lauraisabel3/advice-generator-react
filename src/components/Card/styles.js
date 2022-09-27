import styled from "@emotion/styled";
import buttonImage from '../../assets/icon-dice.svg'
import dividerImg from '../../assets/pattern-divider-mobile.svg'

const Container = styled.div `
  width: 100%;
  height: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--blue);
  border-radius: 8px;
`

const Title = styled.h1 `
  font-size: 1.4rem;
  color: var(--neon-green);
`

const Content = styled.p `
  margin: 16px 0;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;
  color: var(--cyan);
  text-align: center;
`

const Divider = styled.span `
  width: 200px;
  height: 16px;
  margin: 0 0 20px;
  display: flex;
  background-image: url(${dividerImg});
  background-size: cover;
  background-position: center;
`

const Button = styled.button `
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: var(--neon-green);
  background-image: url(${buttonImage});
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
`
export { Container, Title, Content, Divider, Button}

