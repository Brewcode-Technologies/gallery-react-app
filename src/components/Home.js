import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const Home = () => {
	const history = useHistory();

	// removed redundent state for grabbing user input

	const handleFormSubmit = (event) => {
		event.preventDefault();
		const imgname = event.target.elements.imgname.value.trim();

		if (imgname) {
			history.push(`/search/${imgname}`);
		}
	};

	return (
		<section className='bgimage responsive'>
			<nav>
				<div className="brand">
					<h3 style={{ color: 'white' }}>
						Gallery App
					</h3>
				</div>
			</nav>

			<div className='center responsive'>
				<center>
					<h1 style={{ color: 'white' }}>Stunning free images </h1>
					<h6 style={{ color: 'white' }}>Over 2.5 million+ high quality stock images.</h6><br />

					{/* used form for handling 'Enter' kry press */}
					<form onSubmit={handleFormSubmit}>
						<input
							type='text'
							name='imgname'
							placeholder='Search any images'
							style={{ marginBottom: "10px", padding: '10px' }}
						/>
						<br />
						<Button type="submit" className="btn-search">Search</Button>
					</form>
				</center>
			</div>
		</section>
	);
};

export default Home;
