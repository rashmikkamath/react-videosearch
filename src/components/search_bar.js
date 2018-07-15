import React, {Component} from 'react';
//This component has an input for searching a video.

//class SearchBar extends React.Component
export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};
	}
	render() {
		return (
		<div className="search-bar">
			<input 
			value = {this.state.term}
			onChange={event => this.onInputChange(event.target.value) }/>
		</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);

	}
}
