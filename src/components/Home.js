import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Home = () => {
  const history = useHistory();
  const [imgname, setImgname] = useState('');

  const handleSearch = () => {
    if (imgname) {
      history.push(`/search/${imgname}`);
    }
  };

  return (
    <section className='bgimage responsive'>
      <nav>
        <div className="brand">
          <h3 style={{ color: 'white' }}>Gallery App</h3>
        </div>
      </nav>

      <div className='center responsive'>
        <center>
          <h1 style={{ color: 'white' }}>Stunning free images </h1>
          <h6 style={{ color: 'white' }}>Over 2.5 million+ high-quality stock images.</h6><br />

          <input
            type='text'
            placeholder='Search any images'
            onChange={(e) => setImgname(e.target.value)}
            style={{ marginBottom: "10px", padding: '10px' }}
          /><br />

          <Button
            type="button"
            className="btn-search"
            onClick={handleSearch}
            disabled={!imgname}
          >
            Search
          </Button>
        </center>
      </div>
    </section>
  );
}

export default Home;
