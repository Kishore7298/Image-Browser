import React from 'react';

class SearchBar extends React.Component {
    state = { term:""  }
    /* onFormSubmit function which prevents default refreshing of webpage
    and whenever we are using "this" inside function make sure that the 'this' is bound.*/
    onFormSubmit = (event)=>{
        event.preventDefault();
        console.log(this.state.term);
    }
    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image search</label>
                        <input type="text" value={this.state.term} onChange={e=>{this.setState({term:e.target.value})}}/>
                    </div>
                </form>
            </div>
        )
    }
     
}

export default SearchBar;