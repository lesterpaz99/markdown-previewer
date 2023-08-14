import { useState, useRef } from 'react';

// icons
import { AiFillFileMarkdown, AiOutlineClear } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types
export const Header = ({ textHandler }) => {
	const [file, setFile] = useState(null); // { name, size, type, ... }
	const inputFileRef = useRef(null);

	const handleFile = (e) => {
		const content = e.target.result;

		// Update the md text state.
		textHandler(content);
	};

	const onFileSelected = (file) => {
		try {
			if (file) {
				let fileData = new FileReader();
				fileData.onloadend = handleFile;
				fileData.readAsText(file);
				setFile(file);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const removeFile = () => {
		textHandler('');
		setFile(null);

		if (inputFileRef.current) {
			inputFileRef.current.value = '';
		}
	};

	return (
		<header className='header'>
			<div className='logo'>fcc-markdown-editor</div>
			{file && (
				<p>
					<AiFillFileMarkdown
						style={{ transform: 'translateY(2px)', color: '#E5E8ED' }}
					/>{' '}
					{file.name.toLowerCase()}
				</p>
			)}
			<div className='buttons'>
				<button
					className='clear-btn'
					onClick={removeFile}
					title='Clear the editor'
					type='button'
				>
					<AiOutlineClear style={{ fontSize: '1.8rem' }} />
				</button>
				<label htmlFor='md-file' className='upload-btn'>
					{file ? 'upload a new file' : 'upload a file'}
				</label>
				<input
					title='upload file'
					ref={inputFileRef}
					onChange={(e) => onFileSelected(e.target.files[0])}
					placeholder='upload md file'
					type='file'
					accept='.md'
					id='md-file'
					className='md-input'
				/>
			</div>
		</header>
	);
};
