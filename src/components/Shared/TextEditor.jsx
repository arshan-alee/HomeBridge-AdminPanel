import React, { useState, useRef, useMemo } from "react";
import JoditEditor, { Jodit } from "jodit-react";

const TextEditor = ({ text, placeholder, ...props }) => {
  const editor = useRef(null);

  // const config = {
  //   height: 300,
  //   askBeforePasteHTML: false,
  //   askBeforePasteFromWord: false,
  //   events: {
  //     paste: function (event) {},
  //   },
  // };

  const config = useMemo(
    () => ({
      height: 300,
      askBeforePasteHTML: false,
      askBeforePasteFromWord: false,
      events: {
        paste: function (event) {},
      },
    }),
    []
  );

  return (
    <div className="w-full flex flex-col gap-2 text-black rounded-lg overflow-y-auto">
      <p className="text-[18px] text-[#fff]">{text}</p>
      <JoditEditor
        ref={editor}
        config={config}
        name={props.name}
        value={props.value}
        required={props.required}
        tabIndex={1}
        onBlur={props.onChange}
      />
    </div>
  );
};

export default TextEditor;
