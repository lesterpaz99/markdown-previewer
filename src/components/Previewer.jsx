/* eslint-disable react/prop-types */
export const Previewer = ({ jsxContent }) => {
	return (
		<div className='previewer-container'>
			{jsxContent.length > 0 ? jsxContent : <p>Previewer</p>}
		</div>
	);
};
