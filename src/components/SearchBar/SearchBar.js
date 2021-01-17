import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        term: "",
        location: "",
        sortBy: "best_match"
      }
      this.sortByOptions = {
        "Best Match": 'best_match',
        "Highest Rated": 'rating',
        "Most Reviewed": 'review_count'
      }
    }
    getSortByClass = (sortByOption) => {
      if (sortByOption === this.state.sortBy) {
        return "active";
      }
      return "";
    }
    handleSortByChange = (sortByOption) => {
      this.setState({sortBy: sortByOption});
    }
    handleTermChange = ({target}) => {
      this.setState({term: target.value});
    }
    handleLocationChange = ({target}) => {
      this.setState({location: target.value});
    } 
    handleSearch = (e) => {
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
      e.preventDefault();
    }
    renderSortByOptions = () => {
        return Object.keys(this.sortByOptions).map((sortByOption) => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li onClick={() => this.handleSortByChange(sortByOptionValue)} key={sortByOptionValue} className={() => this.getSortByClass(sortByOptionValue)} >{sortByOption}</li>
        });
    }
    render() {
        return (
            <div className="SearchBar">
              <div className="SearchBar-sort-options">
                <ul>
                  {this.renderSortByOptions()}
                </ul>
              </div>
              <div className="SearchBar-fields">
                <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
                <input placeholder="Where?" onChange={this.handleLocationChange} />
              </div>
              <div className="SearchBar-submit">
                <a onClick={this.handleSearch}>Let's Go</a>
              </div>
            </div>
        )
    }

}
