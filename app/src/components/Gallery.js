import React from 'react';
import { connect } from 'react-redux';
import ImageCard from './ImageCard';
import Categories from './Categories/Categories';

function Gallery({ images, error }) {
  return error ? (
    <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>
  ) : (
    <>
      <Categories />

      <div className='gallery'>
        {images.map((image) => (
          <ImageCard key={image.id} imageUrl={image.largeImageURL} />
        ))}
      </div>
    </>
  );
}

const mapStateToProps = ({ images, error }) => ({
  images,
  error,
});

export default connect(mapStateToProps)(Gallery);
