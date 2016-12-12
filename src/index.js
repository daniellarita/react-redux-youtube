import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';
import {Component} from 'react';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY='AIzaSyAVBQHIHCyvTGrF0X7_HVpCALSXlWCdFPk';

class App extends Component {
	constructor(props){
		super(props);

		this.state={
			videos:[]
		};

		YTSearch({key:API_KEY, term:'surfboards'}, (data)=>{
			this.setState({
				videos:data
			});
		});
	}

	render(){
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
				<VideoDetail 
				  video={this.state.videos[0]}
				  />
			</div>
		  );
	}
}


ReactDOM.render(<App/>, document.querySelector('.container'));