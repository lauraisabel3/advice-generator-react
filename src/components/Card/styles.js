import styled from "@emotion/styled";
import buttonImage from '../../assets/icon-dice.svg'
import dividerImg from '../../assets/pattern-divider-mobile.svg'
import { breakPoints as bp } from "../../styles/breakPoints";

const Container = styled.div `
  width: 300px;
  height: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--blue);
  border-radius: 8px;

  ${bp.desktop} {
    width: 500px;
  }
`

const Title = styled.h1 `
  font-size: 1.4rem;
  font-weight: 200;
  color: var(--neon-green);
`

const Content = styled.p `
  margin: 16px 0;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;
  color: var(--cyan);
  text-align: center;

  ${bp.desktop} {
    font-size: 2rem;
    line-height: 2.8rem;
  }
`

const Divider = styled.span `
  width: 100%;
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
  cusor: pointer;

  :hover {
    -webkit-box-shadow: 3px 5px 16px -2px var(--neon-green)); 
    box-shadow: 3px 5px 16px -2px var(--neon-green);
  }

  ${bp.desktop}{
    width: 60px;
    height: 60px;
  }
`
export { Container, Title, Content, Divider, Button}

