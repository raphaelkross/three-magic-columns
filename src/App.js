import React from 'react';

import './App.css';

import { Container } from './components/Container';
import { Button } from './components/Button';
import { Text } from './components/Text';

import {Editor, Frame, Canvas} from "@craftjs/core";

const App = () => {
  return (
    <div style={{margin: "0 auto", width: "800px"}}>
      <Editor resolver={{Button, Text, Container}}> 
        <Frame>
          <Canvas is={Container} padding={5} background="#eee">
            <Text text="Rafael" />
            <Text text="Angeline" />
            <Button>Drag me</Button>
            <h2>OOOOO</h2>
            <h2>OOOOO</h2>
          </Canvas>
        </Frame>
      </Editor>
    </div>
  );
}

export default App;