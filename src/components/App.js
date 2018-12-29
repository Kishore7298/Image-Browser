import React from 'react';
import Unsplash from '../api/Unsplash';
import SearchBar from './SearchBar';


class App extends React.Component{
    state={ images:[] };
     onSearchSubmit = async (term)=>{
        //console.log(term);
        let response = await Unsplash.get('/search/photos',{
            params:{
                query:term
            }
        });
        console.log(response.data.results);
        this.setState({images:response.data.results});
        /*
        refactoring the code!!
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