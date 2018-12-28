import React from 'react';

class SearchBar extends React.Component {
    state = { term:""  }
    render(){
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image search</label>
                        <input type="text" value={this.state.term} onChange={e=>{this.setState({term:e.target.value})}}/>
                    </div>
                </form>
            </div>
        )
    }
    //to onchange event setstate function is hooked to make it 
}

export default SearchBar;