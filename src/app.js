import React from 'react';




export default class App extends React.Component {

    componentDidMount() {
        this.vocalAudio = document.getElementById('vocalAudio');
        this.drumsAudio = document.getElementById('drumsAudio');
        this.restAudio = document.getElementById('restAudio');


        // this.urlAudio = new Audio('https://drive.google.com/open?id=1stQJZZsWNIWWNz0DpKb6A7_GYt3MIdCr');
        // a.play();
    }

    playAudio = () => {
        this.vocalAudio.play();
        this.drumsAudio.play();
        this.restAudio.play();

        // this.urlAudio.play();
    }

    pauseAudio = () => {
        this.vocalAudio.pause();
        this.drumsAudio.pause();
        this.restAudio.pause();
    }

    volumeUp = () => {
        this.vocalAudio.volume = 1;
        this.drumsAudio.volume = 1;
        this.restAudio.volume = 1;
    }

    volumeDown = () => {
        this.vocalAudio.volume = 0.1;
        this.drumsAudio.volume = 0.1;
        this.restAudio.volume = 0.1;
    }

    onVocalSliderChange = (e) => {
        const volume = e.target.value / 100;
        this.vocalAudio.volume = volume;
    }

    onDrumsSliderChange = (e) => {
        const volume = e.target.value / 100;
        this.drumsAudio.volume = volume;
    }

    onRestSliderChange = (e) => {
        const volume = e.target.value / 100;
        this.restAudio.volume = volume;
    }

    render() {

        return (
            <div className="app">

                <div style={{display: 'flex', margin: 5}}>
                    <div style={{ margin: 5}} className="app-button" onClick={this.playAudio} type="button">Play</div>
                    <div style={{ margin: 5}} className="app-button" onClick={this.pauseAudio} type="button">Pause</div>
                </div>

                <div className="container">
                    <span>Vocal</span>
                    <input type="range" min="1" max="100" onChange={this.onVocalSliderChange} />
                </div>
                <div className="container">
                    <span>Band</span>
                    <input type="range" min="1" max="100" onChange={this.onDrumsSliderChange} />
                </div>
                <div className="container">
                    <span>All</span>
                    <input type="range" min="1" max="100" onChange={this.onRestSliderChange} />
                </div>

                <div className="container">
                    <audio id="vocalAudio" controls="controls">
                        <source src="./assets/audio/vocal.mp3" type="audio/mpeg" />
                    </audio>
                </div>
                <div className="container">
                    <audio id="drumsAudio" controls="controls">
                        <source src="./assets/audio/band.mp3" type="audio/mpeg" />
                    </audio>
                </div>
                <div className="container">
                    <audio id="restAudio" controls="controls">
                        <source src="./assets/audio/all.mp3" type="audio/mpeg" />
                    </audio>
                </div>








            </div>
        );
    }
}
