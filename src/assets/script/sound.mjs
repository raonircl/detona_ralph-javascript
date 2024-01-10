export const soundHit = () => {
    const clickSound = document.getElementById('clickSound');
    clickSound.currentTime = 0;
    clickSound.play().catch(error => {
        console.error('Error when playing sound hit', error);
    });
};

export const soundHitFail = () => {
    const clickSound = document.getElementById('clickSoundFail');
    clickSound.currentTime = 0;
    clickSound.play().catch(error => {
        console.error('Error when playing sound hitFail', error);
    });
};

export const endgameSound = (soundId) => {
    const audioElement = document.getElementById(soundId);
    audioElement.currentTime = 0;
    audioElement.play().catch(error => {
        console.error(`Error when playing sound endgame:`, error);
    });
};

export const stopSound = (soundId) => {
    const audioElement = document.getElementById(soundId);
    audioElement.pause();
    audioElement.currentTime = 0;
};

export const playSound = () => {
    const backgroundMusic = document.getElementById('open');
    backgroundMusic.currentTime = 0;
    backgroundMusic.play().catch(error => {
        console.error(`Error when playing background music open:`, error);
    });
}