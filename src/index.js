import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details'

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBQL6wV2IPiSz5tXVwF4G5cdJJ53Z8jsXA';


class App extends Component{

    constructor(props){
        super(props);

        this.state = { videos: [] }

        this.videoSearch('surfboards');


    }

    videoSearch(term){
        YTSearch({key: API_KEY, term:term },(videos) =>{
            this.setState({
                videos : videos,
                selectedVideo: videos[0]
            });
            //this.setState({videos:videos})
        })
    }

    render(){
        return (
            <div>
                <SearchBar onSearchTermChange={ term=> this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect = {foul => this.setState({selectedVideo: foul})}
                    videos={this.state.videos}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));