import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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
          <h3 style={{ color: 'white' }}>
            Gallery App
          </h3>
        </div>
      </nav>

      <div className='center responsive'>
        <center>
          <h1 style={{ color: 'white' }}>Stunning free images </h1>
          <h6 style={{ color: 'white' }}>Over 2.5 million+ high-quality stock images.</h6><br />

          <Form>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="Search any images"
                onChange={(e) => setImgname(e.target.value)}
                style={{ marginBottom: "10px", padding: '10px' }}
              />
              <InputGroup.Append>
                <Button
                  type="button"
                  className="btn-search"
                  onClick={handleSearch}
                >
                  Search
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </center>
      </div>
    </section>
  );
};

export default Home;
