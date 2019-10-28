import React from 'react';


export default class App extends React.Component {

    playAudio() {

        // const a = new Audio('https://drive.google.com/open?id=1stQJZZsWNIWWNz0DpKb6A7_GYt3MIdCr');
        // a.play();

        const x = document.getElementById('myAudioWav');
        const x2 = document.getElementById('myAudioWav2');
        const x3 = document.getElementById('myAudioWav3');
        x.play();
        x2.play();
        x3.play();
    }

    pauseAudio() {
        const x = document.getElementById('myAudioWav');
        const x2 = document.getElementById('myAudioWav2');
        const x3 = document.getElementById('myAudioWav3');
        x.pause();
        x2.pause();
        x3.pause();
    }

    render() {

        return (
            <div className="app">

                <div className="app-top-bar">
                    <div className="logo" />
                </div>

                <div className="app-content">

                    {/* <audio id="myAudioWav" src="https://drive.google.com/open?id=1stQJZZsWNIWWNz0DpKb6A7_GYt3MIdCr" type="audio/wav" /> */}

                    <audio id="myAudio" src="./assets/audio/adon.mp3" type="audio/mpeg" />

                    <audio id="myAudioWav" src="./assets/audio/adon-vocal.wav" type="audio/wav" />
                    <audio id="myAudioWav2" src="./assets/audio/adon-rest.wav" type="audio/wav" />
                    <audio id="myAudioWav3" src="./assets/audio/adon-drums.wav" type="audio/wav" />

                    <p>Click the buttons to play or pause the audio.</p>

                    <button onClick={this.playAudio} type="button">Play Audio</button>
                    <button onClick={this.pauseAudio} type="button">Pause Audio</button>


                </div>
            </div>
        );
    }
}
