import * as React from 'react';
import { GaleryPhoto } from './GaleryPhoto/GaleryPhoto';
import './AsideGalery.scss';

function AsideGalery(props: any) {
    const photosSrc = ['galery1', 'galery2', 'galery3', 'galery4',
        'galery5', 'galery6', 'galery7', 'galery8', 'galery9'];
    const photos = photosSrc.map(src => <GaleryPhoto src={src} key={src} />)
    return (
        <section className="aside-right__galery galery">
            <h2 className="galery__heading heading heading--middle heading--grey">PHOTOS</h2>
            <section className="galery__photos photo">
                {photos}
            </section>
        </section>
    );
};

export { AsideGalery };