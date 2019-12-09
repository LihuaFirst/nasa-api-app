import React from 'react';
import LazyLoad from 'react-lazy-load';
import styles from './GalleryItem.module.css';

const GalleryItem = (props) => (
   <div className={styles['GalleryItem']}>
      <a href="/#" title={props.title} className={styles['GalleryItem-wrapper']}>
         <div className={styles['GalleryItem-imageWrapper']}>
            <LazyLoad height={200} once>
               <img src={props.href}
                  alt={props.alt}
                  title={props.title}
                  className={styles['GalleryItem-image']}
               />
            </LazyLoad>
         </div>   
            
         {props.title && <p className={styles['GalleryItem-title']}>{props.title}</p>}

      </a>
   </div >
);

export default GalleryItem;


