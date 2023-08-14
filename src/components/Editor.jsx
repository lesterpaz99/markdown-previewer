// eslint-disable-next-line react/prop-types
export const Editor = ({ markdownHandler, markdown }) => {
	return (
		<div className='editor-container'>
			<label htmlFor='editor'></label>
			<textarea
				id='editor'
				className='editor'
				title='markdown editor'
				placeholder='Editor'
				onChange={(e) => markdownHandler(e.target.value)}
				value={markdown}
			></textarea>
		</div>
	);
};
