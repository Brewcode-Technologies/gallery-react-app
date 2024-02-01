import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router';
const Home = () => {

	let history = useHistory();
	const [imgname, setImgname] = useState('');

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
				<center >
					<h1 style={{ Color: 'white' }}>Stunning free images </h1>
					<h6 style={{ Color: 'white' }}>Over 2.5 million+ high quality stock images.</h6><br />


					<input type='text' placeholder='search any images ' size='' onChange={(e) => setImgname(e.target.value)} style={{ marginBottom: "10px", padding: '10px', }} /><br />
					<Button type="button" className="btn-search" onClick={() => imgname && history.push(`/search/${imgname}`)}>Search</Button>
				</center>
			</div>
		</section>
	)
}

export default Home