import React from 'react';
import './ImageList.css';

const ImageList = (props)=>{
    const imageList = props.images.map(({description, id, urls})=>{
        return <img alt={description} key={id} src={urls.small} />
    })
    return <div className="image-list">{imageList}</div>
}

export default ImageList;