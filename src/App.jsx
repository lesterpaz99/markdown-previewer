// components
import { Header } from './components/Header';
import { Editor } from './components/Editor';
import { Previewer } from './components/Previewer';

import { useState } from 'react';
import { useMarkdownParser } from './hooks/useMarkdownParser';
import { data } from './data/markdown';
import './App.css';

function App() {
	const [markdown, setMarkdown] = useState(data);

	const jsxContent = useMarkdownParser(markdown);

	const markdownHandler = (markdown) => {
		setMarkdown(markdown);
	};

	return (
		<>
			<Header markdownHandler={markdownHandler} />
			<div className='main-wrapper'>
				<Editor markdownHandler={markdownHandler} markdown={markdown} />
				<Previewer jsxContent={jsxContent} />
			</div>
		</>
	);
}

export default App;
