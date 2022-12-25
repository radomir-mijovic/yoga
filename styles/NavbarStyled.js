import styled from "styled-components";

export const NavbarStyled = styled.nav`
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const LinkStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: 3.5rem;
  color: #a2a5a1;
  cursor: pointer;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`
