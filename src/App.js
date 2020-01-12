import React, { useState } from "react";
import lz from "lzutf8";
import { Editor, Frame, Canvas } from "@craftjs/core";

import Container from "./components/Container";
import { Image } from "./components/Image";
import { Text } from "./components/Text";
import Instagram from "./components/Instagram";
import Column from "./components/Column";

import { SaveState } from "./components/SaveState";

import "./App.css";

const App = () => {
  // eslint-disable-next-line no-undef
  const stateToLoad = localStorage.getItem("three-cols-editor");
  const decodedJson = lz.decompress(lz.decodeBase64(stateToLoad));
  const [json] = useState(decodedJson);

  return (
    <div className="layout">
      <Column>
        <Text />
      </Column>
      <Editor resolver={{ Image, Container, Instagram }}>
        <Frame json={json}>
          <Canvas is={Container}>
            <Image />
            <Instagram url="https://www.instagram.com/p/BVU4TFlg-jE/" />
          </Canvas>
        </Frame>
        <SaveState />
      </Editor>
    </div>
  );
};

export default App;
