import React from'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        
    }
     render(){
        const { description, urls } = this.props.images;
        return (
            <img alt={description} src={urls.regular} />
        )
     }
}

export default ImageCard;