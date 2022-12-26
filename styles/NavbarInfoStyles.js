import styled from "styled-components";
import {motion} from "framer-motion";


export const NavbarInfoStyles = styled.nav`
  background: #faf6f2;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem 0;

  .phone-info {
    display: flex;
    align-items: center;

    > h4,
    svg {
      color: #a2a5a1;
      font-size: 1.8rem;
      font-weight: 500;
      padding: 0;
      margin: 0;
    }

    > h4 {
      cursor: pointer;
      :hover {
        color: #F66E72;
      }
    }
  }

  .stay-connected {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > svg {
      color: #a2a5a1;
      cursor: pointer;
      margin-left: 1rem;
      :hover {
        color: #F66E72;
      }
    }
  }

  .languages {
    display: flex;
    gap: 1rem;

    > h4 {
      cursor: pointer;
      :hover {
        color: #F66E72;
      }
    }
  }
  
  .active {
    color: #F66E72;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    gap: 1rem;
    padding: 1.5rem 0;
  }
`;

export const StyledH4 = styled(motion.h4)`
  color: #a2a5a1;
  font-size: 1.8rem;
  font-weight: 500;
  padding: 0;
  margin: 0;
`;
