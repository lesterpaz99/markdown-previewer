/* eslint-disable react/prop-types */
export const Previewer = ({ jsxContent }) => {
	return (
		<div className='previewer-container' id='preview'>
			{jsxContent}
		</div>
	);
};
