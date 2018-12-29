import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component{
    async onSearchSubmit(term){
        //console.log(term);
        let response = await axios.get('https://api.unsplash.com/search/photos',{
            params:{
                query:term
            },
           headers:{
            Authorization: "Client-ID 70163fbb4c0f77e17e2d4e26a013d5f73c01a1598a61dbc3d4e9908b5268baba"
           } 
        });
        console.log(response.data.results)
        /*
        adding axios and making get request to the unsplash api to get the list 
        of image url's on search term
        */
    }
    render(){
        return(
            <div className="ui container" style={{marginTop:"10px"}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        )
    }
}

export default App;