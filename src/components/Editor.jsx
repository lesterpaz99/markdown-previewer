// eslint-disable-next-line react/prop-types
export const Editor = ({ textHandler, text }) => {
	return (
		<div className='editor-container'>
			<label htmlFor='editor'></label>
			<textarea
				id='editor'
				className='editor'
				title='markdown editor'
				placeholder='Editor'
				onChange={(e) => textHandler(e.target.value)}
				value={text}
			></textarea>
		</div>
	);
};
