import React, { useState } from 'react';

function SearchResults({images}) {
    if (!images.length) {
        return <h2>❗️No ImAgEs FoUnD❗️</h2>;
    }

    


    return (
        <div className="gallery">
            {images.map(image => (
                <div key={image.id} className='gif'>
                    <img src={image.url}/>
                </div>
            ))}
        </div>
    );
}

export default SearchResults;