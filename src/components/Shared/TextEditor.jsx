import { EditorState } from "draft-js";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { editorToolBarOptions } from "../../utils/editorToolBarOptions";

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorStateChange = (newState) => {
    setEditorState(newState);
  };

  return (
    <div className="w-full h-[350px] bg-[#fff] text-black rounded-lg p-5 overflow-y-auto">
      <Editor
        editorState={editorState}
        toolbar={editorToolBarOptions}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={handleEditorStateChange}
      />
    </div>
  );
};

export default TextEditor;
