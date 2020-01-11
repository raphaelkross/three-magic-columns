import React from "react";
import ContentEditable from 'react-contenteditable'

export const Text = ({text}) => {
  return (
      <div className="text">
        <ContentEditable
          html={text}
          tagName="p"
        />
      </div>
  )
}

export default Text;