import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Redirect } from 'react-router-dom';

function Search({ match }) {
  const [data, setData] = useState([]);
  const [back, setBack] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pixabay.com/api/?key=25850788-198f1932e82eefef8db8d5b36&q=${match.params.imgname}&image_type=photo`);
        setData(response.data.hits);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [match.params.imgname]);

  const handleBack = () => {
    setBack(true);
  };

  if (back) {
    return <Redirect to='/' />;
  }

  return (
    <section>
      <div className='gallery'>
        <h3>Gallery</h3>
      </div>
      <div className='row head'>
        {data.map(imgobj => (
          <div className='col-md-4 my-4' key={imgobj.id}>
            <div className='card index'>
              <img className='card-img-top' src={imgobj.largeImageURL} alt={imgobj.tags} height="250" width="250" />
              <div className='card-body'>
                <h5 className='card-title text-center'>{imgobj.tags}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className='back' onClick={handleBack}><IoMdArrowRoundBack /></button>
    </section>
  );
}

export default Search;
