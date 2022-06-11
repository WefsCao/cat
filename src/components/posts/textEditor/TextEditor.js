import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { PencilAltIcon } from "@heroicons/react/solid";

import {
  Container,
  QuillWrapper,
  TextEditorBlock,
  TitleBlock,
  TitleInput,
} from "./TextEditorElement";

const TextEditor = ({ title, body, onChange, originalPost }) => {
  const quillElement = useRef(null); // Quill container
  const quillInstance = useRef(null);

  const handleChangeTitle = (e) => {
    onChange({ key: "title", value: e.target.value });
  };

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "snow",
      placeholder: "今何を考えていますか?",
      modules: {
        toolbar: [
          [{ header: 1 }, { header: 2 }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block", "link", "image"],
        ],
      },
    });

    // get text from text-editor
    const quill = quillInstance.current;
    quill.on("text-change", (delta, oldDelta, source) => {
      if (source === "user") {
        onChange({
          key: "body",
          value: quill.root.innerHTML,
        });
      }
    });
  }, [onChange]);

  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    quillInstance.current.root.innerHTML = body;
  }, [body]);

  return (
    <TextEditorBlock>
      <Container>
        <TitleBlock>
          <PencilAltIcon className='icon' />
          <TitleInput
            placeholder='タイトル'
            onChange={handleChangeTitle}
            value={title}
          />
        </TitleBlock>
        <QuillWrapper>
          <div ref={quillElement} />
        </QuillWrapper>
      </Container>
    </TextEditorBlock>
  );
};
export default TextEditor;
