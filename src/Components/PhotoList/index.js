import React, { useState } from 'react';
import Modal from '../Modal';


const PhotoList = ({ category }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([
        { 
            name: 'Ramen Bowl',
            category: 'Hobbies',
            description: 'Many a good decisions have been made over a good meal'
        },
        { 
            name: 'Dogs',
            category: 'Hobbies',
            description: 'Our two pitties, Riley and Cody'
        },
        {
            name: 'Dragon Mags',
            category: 'Hobbies',
            description: 'A collection of early 90s Dragon magazines'
        },
        {
            name: 'Sneakers',
            category: 'Hobbies',
            description: 'My fledgling sneaker collection'
        },
        {
            name:'Computer',
            category: 'Hobbies',
            description: 'Custom built my pc with all the rgb'
        },
        {
            name: 'Vinyl Collectors',
            category: 'Skills',
            description: 'Group project to build a front to back website'
        },
        {
            name: 'Coding Quiz',
            category: 'Skills',
            description: 'A JavaScript knowledge quiz'
        },
        {
            name: 'Trending Music',
            category: 'Skills',
            description: 'First group project using APIs to create a music video and lyric website'
        },
    ]);

    const currentPhotos = photos.filter(photo => photo.category === category);

    const toggleModal = (image, i) => {
        setCurrentPhoto({...image, index: i});
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            {isModalOpen && (
                <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
            )}
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <img
                    src={require(`../../assets/large${category}/${i}.png`).default}
                    alt={image.name}
                    className="img-thumbnail mx-1"
                    onClick={() => toggleModal(image, i)}
                    key={image.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default PhotoList;