import React, { Component } from 'react';
import YouTube from 'react-youtube';

// Extracted video ID from the provided link
const videoId = "Q5X62SDhJzI";

class YoutubePlayer extends Component {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        return (
            <YouTube
                videoId={videoId}
                opts={opts}
                onReady={this._onReady}
                onEnd={this._onEnd}
            />
        );
    }

    _onReady = (event) => {
        event.target.playVideo();
    }

    _onEnd = (event) => {
        // Optionally restart the video or perform another action
        event.target.playVideo();
    }
}

export default YoutubePlayer;
