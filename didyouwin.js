let didYouWin = (gameState, winnerScreen) => {
  if (
    JSON.stringify(gameState.board[0]) ==
    JSON.stringify([
      gameState.players[0],
      gameState.players[0],
      gameState.players[0],
    ])
  ) {
    winnerScreen(gameState.playerNames[0]);
    return true;
  } else if (
    JSON.stringify(gameState.board[1]) ==
    JSON.stringify([
      gameState.players[0],
      gameState.players[0],
      gameState.players[0],
    ])
  ) {
    winnerScreen(gameState.playerNames[0]);
    return true;
  } else if (
    JSON.stringify(gameState.board[2]) ==
    JSON.stringify([
      gameState.players[0],
      gameState.players[0],
      gameState.players[0],
    ])
  ) {
    winnerScreen(gameState.playerNames[0]);
    return true;
  } else if (
    JSON.stringify([
      gameState.board[0][0],
      gameState.board[1][0],
      gameState.board[2][0],
    ]) ==
    JSON.stringify([
      gameState.players[0],
      gameState.players[0],
      gameState.players[0],
    ])
  ) {
    winnerScreen(gameState.playerNames[0]);
    return true;
  } else if (
    JSON.stringify([
      gameState.board[0][1],
      gameState.board[1][1],
      gameState.board[2][1],
    ]) ==
    JSON.stringify([
      gameState.players[0],
      gameState.players[0],
      gameState.players[0],
    ])
  ) {
    winnerScreen(gameState.playerNames[0]);
    return true;
  } else if (
    JSON.stringify([
      gameState.board[0][2],
      gameState.board[1][2],
      gameState.board[2][2],
    ]) ==
    JSON.stringify([
      gameState.players[0],
      gameState.players[0],
      gameState.players[0],
    ])
  ) {
    winnerScreen(gameState.playerNames[0]);
    return true;
  } else if (
    JSON.stringify([
      gameState.board[0][0],
      gameState.board[1][1],
      gameState.board[2][2],
    ]) ==
    JSON.stringify([
      gameState.players[0],
      gameState.players[0],
      gameState.players[0],
    ])
  ) {
    winnerScreen(gameState.playerNames[0]);
    return true;
  } else if (
    JSON.stringify([
      gameState.board[0][2],
      gameState.board[1][1],
      gameState.board[2][0],
    ]) ==
    JSON.stringify([
      gameState.players[0],
      gameState.players[0],
      gameState.players[0],
    ])
  ) {
    winnerScreen(gameState.playerNames[0]);
    return true;
  }
};
