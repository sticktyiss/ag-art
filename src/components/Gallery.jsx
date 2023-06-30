import React from "react";
import classes from "./css/Gallery.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
// import ArtPieceCard from './ArtPieceCard' TODO: This will be for when different hosting is figured out besides gh pages.
import Paintings from './Paintings'
import Drawings from './Drawings'
import Photography from './Photography'

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState('')

  // const scroll = () => window.scrollTo(0, 0);

  return (
    <div className={classes.main}>
      <h2>Gallery</h2>
      <h3>"The world is but a canvas to our imagination."<br/><span>- Henry David Thoreau</span></h3>
      <nav>
        <button onClick={() => setGalleryItems('paintings')}>
          Paintings
        </button>
        <button onClick={() => setGalleryItems('drawings')}>
          Drawings
        </button>
        <button onClick={() => setGalleryItems('photography')}>
          Photography
        </button>
      </nav>
      {galleryItems === 'paintings' ? 
      <Paintings />
      : galleryItems === 'drawings' ?
      <Drawings />
      : galleryItems === 'photography' ? 
      <Photography />
    : ('')}
    </div>
  );
};

export default Gallery;
