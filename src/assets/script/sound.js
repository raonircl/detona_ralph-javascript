const soundHit = () => {
    const clickSound = document.getElementById('clickSound');

    clickSound.currentTime = 0;
    clickSound.play().catch(error => {
        console.error('Erro ao reproduzir som de hit', error);
    });
};

const soundHitFail = () => {
    const clickSound = document.getElementById('clickSoundFail');

    clickSound.currentTime = 0;
    clickSound.play().catch(error => {
        console.error('Erro ao reproduzir som de hitFail', error);
    });
};

const endgameSound = (soundId) => {
    const audioElement = document.getElementById(soundId);
    audioElement.currentTime = 0;
    audioElement.play().catch(error => {
        console.error(`Erro ao reproduzir som "endgame":`, error);
    });
};

const stopSound = (soundId) => {
    const audioElement = document.getElementById(soundId);
    audioElement.pause();
    audioElement.currentTime = 0;
};

module.exports = {
    soundHit,
    soundHitFail,
    endgameSound,
    stopSound
};