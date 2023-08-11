// import { useState } from 'react'
import { marked } from 'marked'
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

import './App.css'

function App() {

  const markedContent = marked.parse('# Hello World');
  const purifiedContent = DOMPurify.sanitize(markedContent);
  const jsxContent = parse(purifiedContent);

  return (
    <>
    {jsxContent}
    </>
  )
}

export default App
