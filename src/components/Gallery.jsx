import React from 'react'
import classes from './css/Gallery.module.css'
// import ArtPieceCard from './ArtPieceCard' TODO: This will be for when different hosting is figured out besides gh pages.

const Gallery = () => {
  return (
    <div className={classes.main}>
      <h2>Gallery</h2>
      <ul>
        <li>
          <img />
          <h3>Art Piece</h3>
          <p>Description ...</p>
          <h4>Price: $85</h4>
        </li>
      </ul>
    </div>
  )
}

export default Gallery