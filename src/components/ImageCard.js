import React from'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            spans:0
        }

        this.imageRef = React.createRef();
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpan);
    }
    setSpan =()=>{
        let clent = this.imageRef.current.clientHeight;
        let spans = Math.ceil(clent/10);
        this.setState({spans});
    }
     render(){
        const { description, urls } = this.props.images;
        return (
            <img ref={this.imageRef} style={{ gridRowEnd:`span ${this.state.spans}` }} alt={description} src={urls.regular} />
        )
     }
}

export default ImageCard;