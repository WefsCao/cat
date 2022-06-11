import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { changePostContent } from "../../../slices/writeSlice";
import { Input, TagBlock, TagList } from "./TagElements";

const Tag = ({ post }) => {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!input) return;

      if (tags.includes(input)) return;
      const newTags = tags.concat(input);
      setTags(newTags);

      // originalPost.tags
      //   ? setTags(newTags.concat(originalPost.tags))
      //   : setTags(newTags);

      dispatch(changePostContent({ key: "tags", value: newTags }));
      setInput("");
    },
    [tags, dispatch, input]
  );
  const handleClick = (id) => {
    const newTags = tags.filter((tag) => tag.id !== id);
    setTags(newTags);
    dispatch(changePostContent({ key: "tags", value: newTags }));
  };

  return (
    <TagBlock>
      <form onSubmit={handleSubmit}>
        <span style={{ marginLeft: "20px" }}>Tags: </span>
        <Input onChange={handleChange} value={input} />
      </form>
      <TagList>
        <ul>
          {/* edit post */}
          {/* {originalPost.tags &&
            originalPost.tags.map((tag, index) => (
              <li key={index}>{`#${tag}`}</li>
            ))} */}
          {/* write post */}
          {tags &&
            tags.map((tag, index) => (
              <li
                key={index}
                onClick={() => handleClick(tag.id)}
              >{`#${tag}`}</li>
            ))}
        </ul>
      </TagList>
    </TagBlock>
  );
};
export default Tag;
