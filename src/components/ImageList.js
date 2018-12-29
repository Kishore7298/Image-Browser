import React from 'react';

const ImageList = (props)=>{
    const imageList = props.images.map(({description, id, urls})=>{
        return <img alt={description} key={id} src={urls.small} />
    })
    return <div>{imageList}</div>
}

export default ImageList;