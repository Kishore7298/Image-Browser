import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component{
    render(){
        return(
            <div className="ui container" style={{marginTop:"10px"}}>
                <SearchBar></SearchBar>
            </div>
        )
    }
}

export default App;