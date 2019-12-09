import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import styles from './GalleryItem.module.css';

const GalleryItem = (props) => (
   <div className={styles['galleryItem']}>
      <a href="/#" title={props.title} className={styles['galleryItem-wrapper']}>
         <div className={styles['galleryItem-image-wrapper']}>
            <LazyLoad height={200} once>
               <img src={props.href}
                  alt={props.alt}
                  title={props.title}
                  className={styles['galleryItem-image']}
               />
            </LazyLoad>
         </div>
         {props.title && <p className={styles['galleryItem-title']}>{props.title}</p>}
      </a>
   </div >
);

export default GalleryItem;


