import React from 'react';

const sizeToLetterMap = {
    small_square: 's',
    large_square: 'q',
    thumbnail: 't',
    small_240: 'm',
    small_320: 'n',
    medium_640: 'z',
    medium_800: 'c',
    large_1024: 'b',
    large_1600: 'h',
    large_2048: 'k',
    original: 'o'
  };

//https://stackoverflow.com/questions/32291851/how-to-define-constants-in-reactjs
class PhotoComponent extends React.Component{
    constructor(args){
        super(args);
    }

    photoUrl(image_url, src, size_text){
        const height = 1024;
        const width = 768;
        //var imageName = require(src);
        return (
            <span>
                <img image_url={image_url} src={ require("../constants/cat.jpg")} height = {height} width = {width} />
                <span>Image: {image_url}, Size Letter: {sizeToLetterMap[size_text]} </span>
            </span>
        )
    }

    render(){
        return(
            <div className="photo-wrapper">
                The image is : {this.photoUrl(this.props.image_url, this.props.src, this.props.size_text)}
            </div>
        )
    }
}

export default PhotoComponent;