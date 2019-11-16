import React from 'react';
import './GaleryPhoto.scss';

function GaleryPhoto(props: any) {
    return (
        <img className="galery__photo"
            src={'./assets/img/galery/' + props.src + '.jpeg'}
            alt={props.src} />
    );
};

export { GaleryPhoto };