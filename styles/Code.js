import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import  Style  from './Code.module.css'

 function Code({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className={Style.Code}>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}

export default Code

