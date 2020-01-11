import React from 'react';

import './App.css';

import { Container } from './components/Container';
import { Button } from './components/Button';
import { Text } from './components/Text';
import { Column, ColumnDraggable } from './components/Columns';

import {Editor, Frame, Canvas} from "@craftjs/core";

const App = () => {
  return (
    <div className="layout">
      <Editor> 
          <Column>
            <p>Rafael Angeline</p>
          </Column>
          <Frame>
            <Canvas is={Container} background="#eee">
              <ColumnDraggable background="red">
                <p>Rafael Angeline</p>
              </ColumnDraggable>
              <ColumnDraggable background="blue">
                <Button>Drag me</Button>
              </ColumnDraggable>
            </Canvas>
        </Frame>
      </Editor>
    </div>
  );
}

export default App;