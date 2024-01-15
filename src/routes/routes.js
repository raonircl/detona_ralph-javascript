const express = require('express');
const { addPlayer, getAllPlayers } = require('../controller/GameRanks_controller');

const routes = express();

routes.post('/player', addPlayer);
routes.get('/player', getAllPlayers);

module.exports = routes;