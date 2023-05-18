import React, { useState } from "react";
// import marked from "marked";
import ReactMarkdown from "react-markdown";
import "./App.css";

const App = () => {
  const [markdown, setMarkdown] = useState("# sup");
  const change = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app">
      <textarea onChange={change} value={markdown}  />

        {/* <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        >
        </div> */}

      
        <ReactMarkdown className='preview' children={markdown}/>
    </div>
  );
};

export default App;
