// gitting name from input
let fname = document.getElementById("name");
let display = document.getElementsByClassName("main")[0];
let main = document.getElementsByClassName("main")[0];
const Player = [];
let i = 0;
let person = {};
let isGameStart = false;

// player defined main function
function add() {
  if (Player.length < 6 && fname.value != "") {
    Player.push({
      id: Player.length + 1,
      name: fname.value,
      score: 0,
    });
    reset();
  } else {
    reset();
    alert(
      "!!!اگر بیشتر از شش بازیکن وارد کنبد یا یک بازیکن بدون نام وارد کنید با این خطا مواجه میشوید"
    );
  }
}

function reset() {
  fname.value = "";
}
// create the main body flixable

function gameStart() {
  if (Player.length >= 2 && isGameStart == false) {
    isGameStart = true;
    Player.map((item) => {
      let card = document.createElement("div");
      card.id = "card";

      let nameSection = document.createElement("h2");
      nameSection.id = "nameS";

      let scoreSection = document.createElement("h2");
      scoreSection.id = `s${item.id}`;
      scoreSection.className = "ss";

      let displayName = document.createTextNode(item.name);

      let displayScore = document.createTextNode(item.score);
      let placeS = document.createElement("p");
      placeS.className = "place";
      let place = document.createTextNode(item.id + "    بازیکن شماره");

      placeS.appendChild(place);
      card.appendChild(placeS);
      nameSection.appendChild(displayName);
      scoreSection.appendChild(displayScore);
      card.appendChild(nameSection);
      card.appendChild(scoreSection);

      main.appendChild(card);
      card.id = `player${item.id}`;
      card.className = "card";
    });
  } else {
    alert("حداقل باید دو بازیکن وارد کنید ");
  }
  selection();
  whichIsSelected();
}
//selection

function selection() {
  person = Player[i];
  return person;
}
function goBefore() {
  if (i > 0) {
    i--;
    selection();
    whichIsSelected();
  }
}
function goNext() {
  if (i < Player.length - 1) {
    i++;
    selection();
    whichIsSelected();
  }
}
// score section
function addScore(value) {
  let player = selection();
  player.score += value;
  update();
}

function minusScore(value) {
  let player = selection();
  player.score -= value;
  update();
}

function update() {
  let player = selection();
  let dispaly = document.getElementById(`s${player.id}`);
  dispaly.innerText = player.score;
}

function whichIsSelected() {
  let element = Player[i];
  if (i != 0) {
    document.getElementById(`player${i + 1}`).style.border = "2px solid black";
    document.getElementById(`player${i}`).style.border = "none";
    document.getElementById(`player${i + 2}`).style.border = "none";
  }
  if (i == 0) {
    document.getElementById("player1").style.border = "2px solid black";
    document.getElementById("player2").style.border = "none";
  }
}
