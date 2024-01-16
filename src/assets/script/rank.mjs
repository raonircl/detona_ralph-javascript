export const rank = () => {
    const playerTopRankList = document.createElement('div');
    playerTopRankList.classList.add('player-toplist');

    const heading = document.createElement('h1');
    heading.textContent = 'Rank';

    const playerList = document.createElement('p');
    playerList.id = 'playerList';

    playerTopRankList.appendChild(heading);
    playerTopRankList.appendChild(playerList);
    document.body.appendChild(playerTopRankList);

    const fetchTopRank = async () => {
        try {
            const response = await fetch('https://ill-pear-clam-slip.cyclic.app/player');
            const data = await response.json();
    
            const playersArray = Array.isArray(data) ? data : Object.values(data);
    
            if (playersArray && Array.isArray(playersArray)) {
                playerList.innerHTML = '';
    
                playersArray.forEach(player => {
                    if (player && player.name && player.score) {
                        const listItem = document.createElement('li');
                        listItem.textContent = `${player.rank}:${player.name} - ${player.score}`;
                        playerList.appendChild(listItem);
                    } else {
                        console.error('Dados inválidos para o jogador:', player);
                    }
                });
            }
        } catch (error) {
            console.error('Erro ao buscar jogadores:', error);
        }
    };
    

    fetchTopRank();
};
