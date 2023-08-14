// components
import { Header } from './components/Header';
import { Editor } from './components/Editor';
import { Previewer } from './components/Previewer';

import { useState } from 'react';
import { useParser } from './hooks/useParser';
import { data } from './data/markdown';
import './App.css';

function App() {
	const [text, setText] = useState(data);

	const jsxContent = useParser(text);

	const textHandler = (text) => {
		setText(text);
	};

	return (
		<>
			<Header textHandler={textHandler} />
			<div className='main-wrapper'>
				<Editor textHandler={textHandler} text={text} />
				<Previewer jsxContent={jsxContent} />
			</div>
		</>
	);
}

export default App;
