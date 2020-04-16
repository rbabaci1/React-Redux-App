import React, { useState } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchAllImages } from '../../actions';

function SearchForm({ fetchAllImages, loading }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchAllImages(
      `https://pixabay.com/api/?key=14685436-4a2efb015ccaa4b983c6b66ae&per_page=200&page=1&q=${searchTerm}`,
      1000
    );
    setSearchTerm('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <button type='submit' disabled={loading}>
          <span role='img' aria-label='search'>
            🔍
          </span>
        </button>

        <input
          type='text'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          disabled={loading}
          placeholder='...Search'
          required
        />
      </label>

      {loading && <CircularProgress color='secondary' />}
    </form>
  );
}

const mapStateToProps = ({ loading }) => ({ loading });

export default connect(mapStateToProps, { fetchAllImages })(SearchForm);