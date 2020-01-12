import React, { useState, useEffect } from 'react';

import './App.css';

import { Container } from './components/Container';
import { Image } from './components/Image';
import { Text } from './components/Text';
import { Column, ColumnDraggable, ColumnDraggable2 } from './components/Columns';
import { SaveState } from './components/SaveState';

import {Editor, Frame, Canvas} from "@craftjs/core";

import lz from "lzutf8";

const App = () => {

  const stateToLoad = localStorage.getItem('three-cols-editor');
  const decodedJson = lz.decompress(lz.decodeBase64(stateToLoad));
  const [json] = useState( decodedJson );

  return (
    <div className="layout">
      <Column>
        <Text text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut dui sit amet dolor molestie rutrum vitae in massa."} />
      </Column>
      <Editor resolver={{ColumnDraggable, ColumnDraggable2, Image, Container, SaveState}}>
          <Frame json={json}>
            <Canvas is={Container} background="#eee">
              <Image />
              <ColumnDraggable2 background="blue" key="col-blue" />
            </Canvas>
        </Frame>
        <SaveState />
      </Editor>
    </div>
  );
}

export default App;