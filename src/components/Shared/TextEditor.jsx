import React, { useState, useRef, useMemo } from "react";
import JoditEditor, { Jodit } from "jodit-react";

const TextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    height: 300,
    askBeforePasteHTML: false,
    askBeforePasteFromWord: false,
    events: {
      paste: function (event) {},
    },
  };
  return (
    <div className="w-full  bg-[#fff] text-black rounded-lg p-3 overflow-y-auto">
      <JoditEditor
        ref={editor}
        config={config}
        value={content}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {}}
      />
    </div>
  );
};

export default TextEditor;
