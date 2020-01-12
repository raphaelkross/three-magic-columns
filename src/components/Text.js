import React from "react";
import ContentEditable from "react-contenteditable";

export const Text = () => {
  const text = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Pellentesque ut mi lacinia, imperdiet magna eu, congue ipsum. Mauris semper vehicula arcu, a varius tortor varius gravida.
  Fusce bibendum ipsum eget convallis volutpat. Etiam cursus eu arcu ac consequat. Integer in egestas magna.
  Integer ut arcu eros. Praesent eget dictum erat. Aliquam erat volutpat.
  
  Fusce blandit nunc eu nulla suscipit, at ultricies felis lobortis.
  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  `;

  return (
    <div className="text">
      <ContentEditable
        html={text}
        tagName="p"
      />
    </div>
  );
};

export default Text;
