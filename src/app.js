import React from 'react';


// const a = new Audio('https://drive.google.com/open?id=1stQJZZsWNIWWNz0DpKb6A7_GYt3MIdCr');
// a.play();


export default class App extends React.Component {

    componentDidMount() {
        this.vocalAudio = document.getElementById('vocalAudio');
        this.drumsAudio = document.getElementById('drumsAudio');
        this.restAudio = document.getElementById('restAudio');
    }

    playAudio = () => {
        this.vocalAudio.play();
        this.drumsAudio.play();
        this.restAudio.play();
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

                <div className="app-top-bar">
                    <div className="logo" />
                </div>

                <div className="app-content">

                    <audio id="myAudio" src="./assets/audio/adon.mp3" type="audio/mpeg" />
                    <audio id="vocalAudio" src="./assets/audio/adon-vocal.wav" type="audio/wav" />
                    <audio id="drumsAudio" src="./assets/audio/adon-drums.wav" type="audio/wav" />
                    <audio id="restAudio" src="./assets/audio/adon-rest.wav" type="audio/wav" />

                    <div className="app-vertical-container-example">
                        <button onClick={this.playAudio} type="button">Play Audio</button>
                        <button onClick={this.pauseAudio} type="button">Pause Audio</button>
                    </div>

                    <div className="app-vertical-container-example">
                        <button onClick={this.volumeUp} type="button">up</button>
                        <button onClick={this.volumeDown} type="button">down</button>
                    </div>

                    <spna>Vocal</spna>
                    <input type="range" min="1" max="100" onChange={this.onVocalSliderChange} />
                    <spna>Drums</spna>
                    <input type="range" min="1" max="100" onChange={this.onDrumsSliderChange} />
                    <spna>Rest</spna>
                    <input type="range" min="1" max="100" onChange={this.onRestSliderChange} />

                </div>
            </div>
        );
    }
}
