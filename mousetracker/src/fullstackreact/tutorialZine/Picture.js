// In this example we also have two components - a picture and
//  a picture list. The pictures are fetched from Instagram via AJAX.
class Picture extends React.Component{

    // This component doesn't hold any state - it simply transforms
    // whatever was passed as attributes into HTML that represents a picture.
    clickHandler(){
        // When the component is clicked, trigger the onClick handler that 
        // was passed as an attribute when it was constructed:
        this.props.onClick(this.props.id);
    }

    render(){
        var cls = 'picture ' + (this.props.favorite ? 'favorite' : '');
        return (
            <div className={cls} onClick={this.clickHandler.bind(this)}>
                <img src={this.props.src} width="200" title={this.props.title} />
            </div>
        );
    }
}

class PictureList extends React.Component{

    constructor(props){   
        // The pictures array will be populated via AJAX, and 
        // the favorites one when the user clicks on an image:
        super(props);
        this.state = { 
                pictures: [], 
                favorites: [] 
        };
    }

    componentDidMount(){
        
        // When the component loads, send a jQuery AJAX request
        var self = this;
        // API endpoint for Instagram's popular images for the day
        //key = '642176ece1e7445e99244cec26f4de1f'
        //https://api.instagram.com/v1/media/popular?client_id=642176ece1e7445e99244cec26f4de1f&callback=?';
        var url = 'https://api.instagram.com/v1/media/popular?client_id=' + this.props.apiKey + '&callback=?';

        $.getJSON(url, function(result){
            if(!result || !result.data || !result.data.length){
                return;
        }

        var pictures = result.data.map((p) => {

                return { 
                    id: p.id, 
                    url: p.link, 
                    src: p.images.low_resolution.url, 
                    title: p.caption ? p.caption.text : '', 
                    favorite: false 
                };

        });

        // Update the component's state. This will trigger a render.
        // Note that this only updates the pictures property, and does
        // not remove the favorites array.
        this.setState({ pictures: pictures });
        });
    }

    pictureClick(id){

        // id holds the ID of the picture that was clicked.
        // Find it in the pictures array, and add it to the favorites

        var favorites = this.state.favorites,
            pictures = this.state.pictures;

        for(var i = 0; i < pictures.length; i++){

            // Find the id in the pictures array

            if(pictures[i].id == id) {                  

                if(pictures[i].favorite){
                    return this.favoriteClick(id);
                }

                // Add the picture to the favorites array,
                // and mark it as a favorite:

                favorites.push(pictures[i]);
                pictures[i].favorite = true;

                break;
            }
        }

        // Update the state and trigger a render
        this.setState({pictures: pictures, favorites: favorites});
    }

    favoriteClick(id){

        // Find the picture in the favorites array and remove it. After this, 
        // find the picture in the pictures array and mark it as a non-favorite.

        var favorites = this.state.favorites,
            pictures = this.state.pictures;


        for(var i = 0; i < favorites.length; i++){
            if(favorites[i].id == id) break;
        }

        // Remove the picture from favorites array
        favorites.splice(i, 1);


        for(i = 0; i < pictures.length; i++){
            if(pictures[i].id == id) {
                pictures[i].favorite = false;
                break;
            }
        }
        // Update the state and trigger a render
        this.setState({pictures: pictures, favorites: favorites});
    }

    render() {

        var self = this;
        var pictures = 
            this.state.pictures.map((p) => {
                return 
                    <Picture 
                        id={p.id} 
                        src={p.src} 
                        title={p.title} 
                        favorite={p.favorite} 
                        onClick={self.pictureClick.bind(this)} />
            });

        if(!pictures.length){
            pictures = <p>Loading images..</p>;
        }

        var favorites = this.state.favorites.map((p)=>{
            return <Picture 
                        id={p.id} 
                        src={p.src} 
                        title={p.title} 
                        favorite={true} 
                        onClick={self.favoriteClick.bind(this)} />
        });

        if(!favorites.length){
            favorites = <p>Click an image to mark it as a favorite.</p>;
        }

        return (
            <div>
                <h1>Popular Instagram pics</h1>
                <div className="pictures"> {pictures} </div>
                    
                <h1>Your favorites</h1>
                <div className="favorites"> {favorites} </div>
            </div>

        );
    }
}

// Render the PictureList component, and add it to .container.
// I am using an API key for a Instagram test ap. Please generate and 
// use your own from here http://instagram.com/developer/
ReactDOM.render(
    <PictureList apiKey="642176ece1e7445e99244cec26f4de1f" />,
    document.getElementById('container')
);