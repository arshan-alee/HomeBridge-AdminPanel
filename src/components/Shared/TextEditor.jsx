import React, { useState, useRef, useMemo } from "react";
import JoditEditor, { Jodit } from "jodit-react";

const TextEditor = ({ text, placeholder, ...props }) => {
  const editor = useRef(null);

  const config = {
    height: 300,
    askBeforePasteHTML: false,
    askBeforePasteFromWord: false,
    events: {
      paste: function (event) {},
    },
  };
  return (
    <div className="w-full flex flex-col gap-2 text-black rounded-lg overflow-y-auto">
      <p className="text-[18px] text-[#fff]">{text}</p>
      <JoditEditor
        ref={editor}
        config={config}
        name={props.name}
        value={props.value}
        tabIndex={1}
        onBlur={props.onChange}
        // onBlur={(newContent) => props.onChange(props.name, newContent)} // preferred to use only this option to update the content for performance reasons
        // onChange={props.onChange}
      />
    </div>
  );
};

export default TextEditor;
