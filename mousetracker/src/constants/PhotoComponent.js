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

    photoUrl(image, size_text){
        return (
            <span>
                Image: {image}, Size Letter: {sizeToLetterMap[size_text]}
            </span>
        )
    }

    render(){
        return(
            <div className="photo-wrapper">
                The url is : {this.photoUrl(this.props.image, this.props.size_text)}
            </div>
        )
    }
}

export default PhotoComponent;