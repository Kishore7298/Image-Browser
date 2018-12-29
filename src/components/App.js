import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component{
    state={ images:[] };
     onSearchSubmit = async (term)=>{
        //console.log(term);
        let response = await axios.get('https://api.unsplash.com/search/photos',{
            params:{
                query:term
            },
           headers:{
            Authorization: "Client-ID 70163fbb4c0f77e17e2d4e26a013d5f73c01a1598a61dbc3d4e9908b5268baba"
           } 
        });
        console.log(response.data.results);
        this.setState({images:response.data.results});
        /*
        onSearchTerm is made as a arrow function to bind the 
        "this" keyword while calling the setstate function
        */
    }
    render(){
        return(
            <div className="ui container" style={{marginTop:"10px"}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Images Fetched:{this.state.images.length} images
            </div>
        );
    }
}

export default App;