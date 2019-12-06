import React from 'react';
//import {Box, Text} from 'gestalt';
import LazyLoad from 'react-lazy-load';
import styles from './GalleryItem.module.css';

const GalleryItem = (props) => (
   <div className={styles['item-wrapper']}>
      <a href="#" title={props.title} className={styles['item-link']}>
         <LazyLoad height={200} once>
            <img src={props.href}
               alt={props.alt}
               title={props.title}
               className={styles['item-image']}
            />
         </LazyLoad>
      </a>
      {props.title && <p className={styles['item-title']}>{props.title}</p>}
   </div>
);

export default GalleryItem;