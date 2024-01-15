const knex = require('../config/connection');

const addPlayer = async (req, res) => {
    try {
        const { player, score } = req.body;
        console.log(player, score);
        
        if (!player || !score) {
            return res.status(400).json({ error: 'all fields must be filled.' });
        }

        const [playerId] = await knex('playername').insert({ name: player }).returning('*');
        await knex('score').insert({ score, player_id: playerId.id });

        const playerData = { player_id: playerId, score };

        return res.status(201).json(playerData);
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: 'Failed to add player' });
    }
};

const getAllPlayers = async (req, res) => {
    try {
        const rank = await knex('playername')
        .join('score', 'playername.id', '=', 'score.player_id')
        .select('playername.name', 'score.score')
        .orderBy('score.score', 'desc')
        .select(knex.raw('RANK() OVER (ORDER BY score.score DESC) as rank'));

        return res.status(200).json(rank);
    } catch (error) {
        return res.status(400).json({ error: 'Failed get all of rank' });
    }
};

module.exports = {
    addPlayer,
    getAllPlayers,
}