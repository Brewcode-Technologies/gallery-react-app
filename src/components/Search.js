import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import { fetchSearch } from '../actions/searchSlice';

function Search({ match }) {
	const dispatch = useDispatch();
	const history = useHistory();

	const { data, loading, error } = useSelector((state) => state.search);

	// removed redundent state for back navigation

	useEffect(() => {
		dispatch(fetchSearch(match.params.imgname));
	}, [dispatch, match.params.imgname]);

	const handleBackClick = () => {
		history.goBack();
	};

	return (
		<section>
			<div className='gallarey'>
				<h3>Gallery</h3>
			</div>

			{loading ? (<div>Loading...</div>) :
				error ? (<div>Error: {error}</div>) :
					data.length ? (

						<div className='row  head' style={{ margin: '28px 0px 2px 2px' }}>
							{
								data && data.map(imgobj => (
									<div className='col-md-4 my-4' key={imgobj.id}> {/* added key attribute */}
										<div className='card index' style={{ borderRadius: '10px' }}>
										{/* added alt tag, used optimised image links and added lazy loading and async decoding for unblocking other resourse to load */}
											<img className='card-img-top' alt={imgobj.tags} srcSet={imgobj.webformatURL} src={imgobj.previewURL} loading="lazy" decoding="async" height="250" width="250" style={{ borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }} />
											<div className='card-body' style={{ backgroundColor: '#F0EBE3', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }} >
												<h5 className='card-title text-center' >{imgobj.tags}</h5>
											</div>
										</div>
									</div>)
								)
							}
						</div>)
						: <div>No result found!</div>
			}
			<button className='back' onClick={handleBackClick}><IoMdArrowRoundBack /></button>
		</section>
	);
}

export default Search;
