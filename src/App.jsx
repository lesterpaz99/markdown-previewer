import { useState } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

import './App.css';

function App() {
	const [text, setText] = useState('');

	const markedContent = marked.parse(text);

	// sanitize the HTML content generated by the `marked` library.
	const purifiedContent = DOMPurify.sanitize(markedContent);
	const jsxContent = parse(purifiedContent);

	const changeHandler = (e) => {
		setText(e.target.value);
	};

	return (
		<div className='flex justify-between'>
			<div>
				<label htmlFor='editor'></label>
				<textarea
					id='editor'
					title='markdown editor'
					placeholder='Editor'
					onChange={changeHandler}
					value={text}
				></textarea>
			</div>
			{jsxContent}
		</div>
	);
}

export default App;
