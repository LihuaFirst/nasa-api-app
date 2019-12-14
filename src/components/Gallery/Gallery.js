import React from 'react';
import GalleryItem from '../../components/GalleryItem/GalleryItem';
import styles from './Gallery.module.css';

const Gallery = ({ children }) => {
   // passing props.children 
   const galleryItems = children.map(child => (
      <div className={styles['gallery-item']} key={Math.random()}>
         <GalleryItem
            id={child.nasa_id}
            href={child.href}
            alt={child.alt}
            title={child.title}
         />
      </div>
   ));

   return (
       <div className={styles['gallery-wrapper']}>
          {galleryItems}
       </div>);
};

// use React.memo to make it a pure component
// so Gallery only re-renders when the children has really changed
export default React.memo(Gallery);