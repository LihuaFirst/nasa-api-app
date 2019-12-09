import React from 'react';
import styles from './Gallery.module.css';

const Gallery = ({children }) => {
   const galleryItems = children.map(child => (
      <div className={styles['gallery-item']} key={Math.random()}>
         {child}
      </div>
   ));
   return <div className={styles['gallery-wrapper']}>{galleryItems}</div>;
};

export default Gallery;