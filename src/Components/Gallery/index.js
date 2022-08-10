import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {
    const { currentCategory } = props;
    return (
        <section>
            <h2>{capitalizeFirstLetter(currentCategory.name)}</h2>
            <p>{currentCategory.description}</p>
            {/* <PhotoList category={currentCategory.name} /> */}
        </section>
    );
}

export default Gallery;