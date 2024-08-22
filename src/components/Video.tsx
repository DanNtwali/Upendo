import React, { Component } from 'react';
import YouTube, { YouTubeProps, YouTubeEvent } from 'react-youtube';

// Extracted video ID from the provided link
const videoId = "Q5X62SDhJzI";

class YoutubePlayer extends Component {
    // Type definitions for event handlers
    _onReady = (event: YouTubeEvent) => {
        event.target.playVideo();
    }

    _onEnd = (event: YouTubeEvent) => {
        // Optionally restart the video or perform another action
        event.target.playVideo();
    }

    render() {
        // Define player options
        const opts: YouTubeProps['opts'] = {
            height: '390',
            width: '640',
            playerVars: {
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
}

export default YoutubePlayer;
