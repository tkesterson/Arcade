let audio = new Audio("you-done-messed-up-a-aron.mp3");
let gameState = {
  players: ["X", "O"],
  playerNames: [],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  cpuOpponent: [false],
};
let askForNames = () => {
  $(".modal2").addClass("open");
};
let whoGoesFirst = () => {
  const startingPlayer = Math.floor(Math.random() * 2);
  if (startingPlayer === 1) {
    [gameState.playerNames[0], gameState.playerNames[1]] = [
      gameState.playerNames[1],
      gameState.playerNames[0],
    ];
  }
  $(".player").html(
    `Current Player: ${gameState.playerNames[0]} - ${gameState.players[0]}`
  );
};
let setPlayerNames = () => {
  $(".modal2").addClass("open");
  gameState.playerNames[0] = $("#player1Input").val();
  gameState.playerNames[1] = $("#player2Input").val();
  whoGoesFirst();
  if (gameState.cpuOpponent === true) {
    computerTurn();
  }
};
let clickTheBoard = (cell) => {
  // console.log($(this));
  if (cell.hasClass("occupied") || gameState.playerNames[0] === "Computer") {
  } else {
    placeMark(cell);
  }
};
let placeMark = (cell) => {
  $(".cell").unbind("click");
  cell.addClass("occupied");
  const player = gameState.players[0];
  const boardX = cell.attr("x");
  const boardY = cell.attr("y");

  cell.text(player);
  gameState.board[boardX][boardY] = player;
  let wasThereAWinner = didYouWin(gameState, winnerScreen);
  let wasThereADraw = didYouDraw();
  if (wasThereAWinner === true) {
    return;
  } else if (wasThereADraw === true) {
    winnerScreen("Draw");
    return;
  } else if (gameState.cpuOpponent === true) {
    setTimeout(function () {
      changeActivePlayer();
    }, 500);
  } else {
    changeActivePlayer();
  }
};
let changeActivePlayer = () => {
  [gameState.players[0], gameState.players[1]] = [
    gameState.players[1],
    gameState.players[0],
  ];
  [gameState.playerNames[0], gameState.playerNames[1]] = [
    gameState.playerNames[1],
    gameState.playerNames[0],
  ];
  $(".player").html(
    `Current Player: ${gameState.playerNames[0]} - ${gameState.players[0]}`
  );

  if (gameState.cpuOpponent === true) {
    computerTurn();
  }
  $(".cell").click(function () {
    clickTheBoard($(this));
  });
};
let computerTurn = () => {
  if (
    gameState.cpuOpponent == true &&
    gameState.playerNames[0] === "Computer"
  ) {
    let newX = Math.floor(Math.random() * 3);
    let newY = Math.floor(Math.random() * 3);
    let vsCpu = $(".cell[x=" + newX + "][y=" + newY + "]");
    if (!vsCpu.hasClass("occupied")) {
      placeMark(vsCpu);
    } else {
      computerTurn();
    }
  }
};
let didYouDraw = () => {
  const draw = gameState.board.flat();
  if ((draw2 = !draw.includes(null))) {
    return true;
  }
};
let winnerScreen = (winner) => {
  $(".winner").text("");
  $(".modal").addClass("open");
  setTimeout(function () {
    $(".winner").text(winner);
  }, 700);
};
let boardReset = () => {
  gameState.board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  $(".cell")
    .text("")
    .removeClass("occupied")
    .css("pointer-events", "all")
    .click(function () {
      clickTheBoard($(this));
    });
  $(".modal").removeClass("open");
  whoGoesFirst();
  if (gameState.cpuOpponent === true) {
    computerTurn();
  }
};
$(".cell").click(function () {
  clickTheBoard($(this));
});
$(".modal button").click((event) => {
  event.preventDefault();
  boardReset();
});
$(".modal2 button").click((event) => {
  event.preventDefault();
  setPlayerNames();
  $(".modal2").removeClass("open");
});
$("#player2name").change(() => {
  if ($("#player2name").val() == 2) {
    $("#player2Input").addClass("hidden");
    $("#player2Input").val("Computer");
    gameState.cpuOpponent = true;
  } else {
    $("#player2Input").removeClass("hidden");
    $("#player2Input").val("");
    gameState.cpuOpponent = false;
  }
});
askForNames();
$(document).ready(function () {
  $("#player1Input").keyup(function () {
    var text = $(this).val();
    if (text.indexOf("Computer") != -1) {
      audio.play();
      alert("You done messed up, AA-ron");
      $("#player1Input").val("");
      $(".warning").removeClass("hidden");
    }
  });
});
$(document).ready(function () {
  $("#player2Input").keyup(function () {
    var text = $(this).val();
    var text2 = $("#player1Input").val();
    if (text.indexOf("Computer") != -1 && $("#player2name").val() == 1) {
      audio.play();
      alert("You done messed up, AA-ron");
      $("#player2Input").val("");
      $(".warning").removeClass("hidden");
      $(".warning2").addClass("hidden");
    } else if (text === text2) {
      $("#player2Input").val("");
      $(".warning2").removeClass("hidden");
      $(".warning").addClass("hidden");
    }
  });
});
