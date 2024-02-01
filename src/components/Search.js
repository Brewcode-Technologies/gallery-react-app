import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Redirect } from 'react-router-dom';

function Search({ match }) {

	const [data, setData] = useState([])
	useEffect(() => {
		axios.get(`https://pixabay.com/api/?key=25850788-198f1932e82eefef8db8d5b36&q=${match.params.imgname}&image_type=photo`).then(
			res => setData(res.data.hits)
		)
	}, [])
	const [back, setBack] = useState(false);
	if (back) {
		return <Redirect to='/' />
	}
	return (
		<section>
			<div className='gallarey'>
				<h3 >Gallery</h3>
			</div>
			<div className='row  head' style={{ margin: '28px 0px 2px 2px' }}>
				{
					data && data.map(imgobj =>
						<div className='col-md-4 my-4' >
							<div className='card index' style={{ borderRadius: '10px' }}>
								<img className='card-img-top' src={imgobj.largeImageURL} height="250" width="250" style={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }} />
								<div className='card-body' style={{ backgroundColor: '#F0EBE3', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }} >
									<h5 className='card-title text-center' >{imgobj.tags}</h5>

								</div>
							</div>
						</div>
					)
				}
			</div>
			<button className='back' onClick={() => setBack(true)}><IoMdArrowRoundBack /></button>
		</section>



	)
}

export default Search