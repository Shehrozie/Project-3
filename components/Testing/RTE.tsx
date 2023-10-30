import React, { Component } from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = () => { 
    return (
        <div>
            <Editor
    wrapperClassName="demo-wrapper"
    editorClassName="demo-editor"
    localization={{
      locale: 'ko',
    }}
  />
        </div>
    );
};

export default TextEditor;
