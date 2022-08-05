import React from 'react';
import PhotoList from //photolist path here 
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio(props) {
    const { currentCategory } = props;
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <PhotoList category={currentCategory.name} />
        </section>
    );
}

export default Portfolio;