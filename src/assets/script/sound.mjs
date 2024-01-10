export const soundHit = () => {
    const clickSound = document.getElementById('clickSound');
    clickSound.currentTime = 0;
    clickSound.play().catch(error => {
        console.error('Erro ao reproduzir som de hit', error);
    });
};

export const soundHitFail = () => {
    const clickSound = document.getElementById('clickSoundFail');
    clickSound.currentTime = 0;
    clickSound.play().catch(error => {
        console.error('Erro ao reproduzir som de hitFail', error);
    });
};

export const endgameSound = (soundId) => {
    const audioElement = document.getElementById(soundId);
    audioElement.currentTime = 0;
    audioElement.play().catch(error => {
        console.error(`Erro ao reproduzir som "endgame":`, error);
    });
};

export const stopSound = (soundId) => {
    const audioElement = document.getElementById(soundId);
    audioElement.pause();
    audioElement.currentTime = 0;
};
