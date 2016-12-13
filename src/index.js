import React from 'react';
import _ from 'lodash';
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
			videos:[],
			videoSelected:null
		};
		this.videoSearch('surfboards');

	}

	videoSearch(term){
       YTSearch({key:API_KEY, term:term}, (videos)=>{
			this.setState({
				videos:videos,
				selectedVideo:videos[0]
			});
		});
	}

	render(){
		const videoSearch=_.debounce((term)=>{this.videoSearch(term)},300);
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail 
				  video={this.state.selectedVideo}
				  />
				<VideoList
				  videos={this.state.videos}
				  onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
				 />
			</div>
		  );
	}
}


ReactDOM.render(<App/>, document.querySelector('.container'));