import React, { useState } from "react";
import {
  EditorState,
  ContentState,
  genKey,
  ContentBlock,
  List,
  Repeat,
  CharacterMetadata,
  convertFromHTML,
} from "draft-js";
import htmlToDraft from "html-to-draftjs";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./App.css";
import { stateToHTML } from "draft-js-export-html";

import { convertToHTML } from "draft-convert";

import { useCallback } from "react";

import { useRef } from "react";

const EditPage = () => {
  // var overview = "";

  // const contentDataState = ContentState.createFromBlockArray(
  //   convertFromHTML(overview)
  // );
  // const editorDataState = EditorState.createWithContent(contentDataState);

  // const [editorState, setEditorState] = useState(editorDataState);
  ////////////////////////////

  // const contentBlocksArray = input.map((word) => {
  //   return new ContentBlock({
  //     // key: genKey(),
  //     // type: "unordered-list-item",
  //     // characterList: new List(Repeat(CharacterMetadata.create(), word.length)),
  //     text: word,
  //   });
  // });

  // // console.log(contentBlocksArray);
  // const [editorState, setEditorState] = useState(
  //   EditorState.createWithContent(
  //     ContentState.createFromBlockArray(contentBlocksArray)
  //   )
  // );

  // const [editorState, setEditorState] = useState(() =>
  //   EditorState.createWithContent(
  //     ContentState.createFromText("Theodore")
  //   )
  // );

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const [inputs, setInputs] = useState(["man", "bird", "animal"]);

  const onEditorStateChange2 = (input) => {
    console.log("editor state=>", editorState);
    console.log("input=>", input);
    setEditorState((prev) => ({ ...prev, input }));
    console.log("editor state 2---**=>", editorState);
  };

  //   const [convertedContent, setConvertedContent] = useState(null);

  // const handleEditorChange = (state) => {
  //   setEditorState(state);
  //   convertContentToHTML();
  // };
  // const convertContentToHTML = () => {
  //   let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
  //   setConvertedContent(currentContentAsHTML);
  // }
  const [newSectionValue, setNewSectionValue] = useState(null);
  const [oldSectionValue, setOldSectionValue] = useState(null);

  const valueToEditor = useCallback(
    (value) => {
      const contentBlock = htmlToDraft(value);
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      return EditorState.createWithContent(contentState);
    },
    [editorState]
  );

  return (
    <div className="App">
      {/* {console.log("inside app")} */}
      {console.log(editorState)}
      <header className="App-header">Rich Text Editor Example</header>
      {inputs.map((input, index) => (
        <>
          {/* {console.log("INDEX123123=>",index)} */}

          {/* <h4 key={input}>{input}</h4> */}
          <Editor
            key={input}
            // rawContentState={ContentState.createFromBlockArray(
            //   convertFromHTML(input))}
            editorState={valueToEditor(input)}
            // onEditorStateChange={handleEditorChange}
            // onEditorStateChange={onEditorStateChange2}

            // onEditorStateChange={(editorState) => {
            //   const newState = { input };
            //   newState.editorStates[index] = editorState;
            //   setEditorState(newState);
            // }}

            //working
            // onChange={(e) => {
            //   // console.log(e.blocks[0].text)
            //   setInputs(oldSectionValue => {
            //     const newSectionValue = [...oldSectionValue];
            //     newSectionValue[index] =

            //       // text: e.target.value,
            //        e.blocks[0].text;

            //     console.log("new value", newSectionValue)
            //     return newSectionValue;
            //   });
            // }}
            //working

            onEditorStateChange={(editorState) => {
              setEditorState(editorState);
              console.log(
                "inside editorstate",
                editorState.getCurrentContent()
              );
              setInputs((oldSectionValue) => {
                const newSectionValue = [...oldSectionValue];
                // console.log("old", oldSectionValue);
                // console.log("new", newSectionValue);
                // console.log(
                //   "editor",
                //   stateToHTML(editorState.getCurrentContent())
                // );
                // newSectionValue[index] = stateToHTML(
                //   editorState.getCurrentContent()
                // );
                console.log("old sec value index", oldSectionValue[index]);
                newSectionValue[index] = stateToHTML(editorState.getCurrentContent())
            
                console.log(
                  "state value",
                  stateToHTML(editorState.getCurrentContent())
                );
                console.log("old", oldSectionValue);
                console.log("new", newSectionValue);

                return newSectionValue;
              });
            }}
            // defaultEditorState={input}
            // onChange={(editorState) => setEditorState(editorState)}
            // onChange={(e)=>onEditorStateChange2(e)}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
          />
        </>
      ))}
    </div>
  );
};
export default EditPage;

// import React, { Component } from "react";
// import { EditorState, convertToRaw } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";
// import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// export default class EditPage extends Component {
//   state = {
//     editorState: EditorState.createEmpty(),
//   };

//   array_one = [{"name":"theodore", "name2:":"john"}];
//   // array_two = ["theo", "sjohn"];
//   onEditorStateChange: Function = (editorState) => {
//     this.setState({
//       editorState,
//     });
//   };

//   render() {
//     const { editorState } = this.state;
//     return (
//       <div>
//         <Editor
//           editorState={editorState}
//           wrapperClassName="demo-wrapper"
//           editorClassName="demo-editor"
//           onEditorStateChange={this.onEditorStateChange}
//         />
//         <textarea
//           disabled
//           value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
//         />
//       </div>
//     );
//   }
// }
