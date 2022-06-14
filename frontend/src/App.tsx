import { ReactElement } from 'react';
import styled from 'styled-components';
import { ActivateDeactivate } from './components/ActivateDeactivate';
import { Greeter } from './components/Greeter';
import { SectionDivider } from './components/SectionDivider';
import { SignMessage } from './components/SignMessage';

const StyledAppDiv = styled.div`
  display: grid;
  grid-gap: 20px;
  background-color: #00EED0;  
  border: 2px solid grey;
  border-radius: 25px;
  box-shadow: 5px 5px 20px 2px grey;
`;

const P = styled.div`
  display: grid;
  place-self: center;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  color: orange;
  text-shadow: 2px 2px 4px #000000;
`;

export function App(): ReactElement {
  return (
    <StyledAppDiv>
      <P>Status DApp</P>
      <SectionDivider />
      <ActivateDeactivate />
      <SectionDivider />
      <SignMessage />
      <Greeter />
    </StyledAppDiv>
  );
}
