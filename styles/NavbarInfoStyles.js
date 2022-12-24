import styled from "styled-components";

export const NavbarInfoStyles = styled.nav`
  background: #FAF6F2;
  height: 3rem;
  font-family: Helvetica Neue, sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem 0;
  
  .phone-info {
    display: flex;
    align-items: center;
    
    > h4, svg {
      color: #A2A5A1;
      font-size: 1.4rem;
      font-weight: 500;
      padding: 0;
      margin: 0;
    }
    
    > h4 {
      cursor: pointer;
      :hover {
        color: red
      }
    }
  }
  
  .stay-connected {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    > svg {
      color: #A2A5A1;
      cursor: pointer;
      margin-left: 1rem;
      :hover {
        color: red
      }
    }
  }
  
  .languages {
    display: flex;
    gap: 1rem;
    
    > h4 {
      cursor: pointer;
      :hover {
        color: red
      }
    }
    
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    gap: 1rem;
    padding: 1.5rem 0;
  }
`

export const StyledH4 = styled.h4`
  color: #A2A5A1;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0;
  margin: 0;
`