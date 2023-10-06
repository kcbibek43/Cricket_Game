//title container
var titlecontainer = document.createElement("div");
titlecontainer.setAttribute("id", "title");
titlecontainer.setAttribute("class", "text-center mt-5");
document.body.appendChild(titlecontainer);
//title
var title = document.createElement("h3");
title.innerHTML = "CRICKET10";
document.getElementById("title").appendChild(title);
//colum container
var row = document.createElement("div");
row.setAttribute("class", "row mt-5");
row.setAttribute("id", "row");
document.body.appendChild(row);
//three column
var column1 = document.createElement("div");
column1.setAttribute("class", "col-sm-4 text-center");
column1.setAttribute("id", "column1");
document.getElementById("row").appendChild(column1);
var column2 = document.createElement("div");
column2.setAttribute("class", "col-sm-4 text-center");
column2.setAttribute("id", "column2");
document.getElementById("row").appendChild(column2);
var column3 = document.createElement("div");
column3.setAttribute("class", "col-sm-4 text-center");
column3.setAttribute("id", "column3");
document.getElementById("row").append(column3);
//column1 items
var titlescrore1 = document.createElement("h5");
titlescrore1.innerHTML = "Team Score 1";
document.getElementById("column1").appendChild(titlescrore1);
var scrore1 = document.createElement("h2");
scrore1.innerHTML = "0";
scrore1.setAttribute("id", "score1");
document.getElementById("column1").appendChild(scrore1);
var button1 = document.createElement("button");
button1.setAttribute("class", "btn btn-primary");
button1.setAttribute("id", "hit1");
// button1.setAttribute("onclick", game.displayRuns);
button1.innerHTML = "HIT 1";
document.getElementById("column1").appendChild(button1);
//column2 items
var timerTitle = document.createElement("h5");
timerTitle.innerHTML = "TIMER";
document.getElementById("column2").appendChild(timerTitle);
//clock
var timer = document.createElement("h2");
timer.innerHTML = "60";
timer.setAttribute("id", "timer");
document.getElementById("column2").appendChild(timer);
//column3 items
var titlescrore2 = document.createElement("h5");
titlescrore2.innerHTML = "Team Score 2";
document.getElementById("column3").appendChild(titlescrore2);
var scrore2 = document.createElement("h2");
scrore2.innerHTML = "0";
scrore2.setAttribute("id", "score2");
document.getElementById("column3").appendChild(scrore2);
var button2 = document.createElement("button");
button2.setAttribute("class", "btn btn-primary disabled");
button2.setAttribute("id", "hit2");
button2.innerHTML = "HIT 2";
document.getElementById("column3").appendChild(button2);
var row_table = document.createElement("div");
row_table.setAttribute("class", "row mt-5");
row_table.setAttribute("id", "row_table");
document.body.appendChild(row_table);
//three column
var table_column1 = document.createElement("div");
table_column1.setAttribute("class", "col-sm-5 text-center");
table_column1.setAttribute("id", "table_column1");
document.getElementById("row_table").appendChild(table_column1);
var table_column2 = document.createElement("div");
table_column2.setAttribute("class", "col-sm-2 text-center");
table_column2.setAttribute("id", "table_column2");
document.getElementById("row_table").appendChild(table_column2);
var table_column3 = document.createElement("div");
table_column3.setAttribute("class", "col-sm-5 text-center");
table_column3.setAttribute("id", "table_column3");
document.getElementById("row_table").append(table_column3);
//table 1
var table1 = document.createElement("table");
table1.setAttribute("class", "table table-bordered");
table1.setAttribute("id", "table1");
document.getElementById("table_column1").appendChild(table1);
// thead 1
var thead1 = document.createElement("thead");
thead1.innerHTML =
    "<tr><th>Team 1</th><th>B1</th><th>B2</th><th>B3</th><th>B4</th><th>B5</th><th>B6</th><th>Total</th></tr>";
document.getElementById("table1").appendChild(thead1);
var tbody1 = document.createElement("tbody");
document.getElementById("table1").appendChild(tbody1);
for (var i = 1; i <= 10; i++) {
    var temptr = document.createElement("tr");
    var temp_player = document.createElement("th");
    temp_player.innerHTML = "Player" + i;
    temptr.appendChild(temp_player);
    for (var j = 1; j < 7; j++) {
        var temp_td = document.createElement("td");
        var idx = "1" + i + j;
        temp_td.setAttribute("id", idx);
        temptr.appendChild(temp_td);
    }
    var tot_td = document.createElement("td");
    tot_td.setAttribute("id", "t1" + i);
    temptr.appendChild(tot_td);
    tbody1.append(temptr);
}
var table2 = document.createElement("table");
table2.setAttribute("class", "table table-bordered");
table2.setAttribute("id", "table2");
document.getElementById("table_column3").appendChild(table2);
// thead 1
var thead2 = document.createElement("thead");
thead2.innerHTML =
    "<tr><th>Team 2</th><th>B1</th><th>B2</th><th>B3</th><th>B4</th><th>B5</th><th>B6</th><th>Total</th></tr>";
document.getElementById("table2").appendChild(thead2);
var tbody2 = document.createElement("tbody");
document.getElementById("table2").appendChild(tbody2);
for (var i = 1; i <= 10; i++) {
    var temptr = document.createElement("tr");
    var temp_player = document.createElement("th");
    temp_player.innerHTML = "Player" + i;
    temptr.appendChild(temp_player);
    for (var j = 1; j < 7; j++) {
        var temp_td = document.createElement("td");
        var idx = "2" + i + j;
        temp_td.setAttribute("id", idx);
        temptr.appendChild(temp_td);
    }
    var tot_td = document.createElement("td");
    tot_td.setAttribute("id", "t2" + i);
    temptr.appendChild(tot_td);
    tbody2.append(temptr);
}
var Cricketgame = /** @class */ (function () {
    function Cricketgame() {
        var _this = this;
        this.player = 1;
        this.balls = 1;
        this.total = 0;
        this.teamTotal = 0;
        this.team = 1;
        this.randomRunGenerator = function () {
            var run = Math.floor(Math.random() * 7);
            return run;
        };
        this.displayrun = function () {
            if (_this.player === 1 && _this.balls === 1) {
                _this.setTimer();
            }
            if (_this.player < 11) {
                if (_this.balls < 7) {
                    var run = _this.randomRunGenerator();
                    var curId = "" + _this.team + _this.player + _this.balls;
                    var x = document.getElementById(curId);
                    if (run === 0) {
                        if (_this.balls === 1) {
                            var total_id = "t" + _this.team + _this.player;
                            var y = document.getElementById(total_id);
                            y.innerHTML = "0";
                        }
                        _this.balls = 1;
                        _this.player++;
                        _this.total = 0;
                        x.innerHTML = "W";
                    }
                    else {
                        _this.teamTotal += run;
                        _this.total += run;
                        x.innerHTML = "" + run;
                        _this.balls++;
                        var total_id = "t" + _this.team + _this.player;
                        var y = document.getElementById(total_id);
                        y.innerHTML = "" + _this.total;
                    }
                    document.getElementById("score" + _this.team).innerHTML = "" + _this.teamTotal;
                    if (_this.balls == 7) {
                        _this.player++;
                        _this.balls = 1;
                        _this.total = 0;
                    }
                }
            }
            else {
                _this.updateTeam();
            }
        };
        this.generateResult = function () {
            var button_mid = document.createElement("button");
            button_mid.setAttribute("class", "btn btn-primary");
            button_mid.setAttribute("id", "res");
            button_mid.innerHTML = "Generate Result";
            table_column2.appendChild(button_mid);
            document.getElementById("res").addEventListener("click", _this.displayWinner);
            var par = document.createElement("p");
            par.setAttribute("id", "resdel");
            table_column2.appendChild(par);
            var par1 = document.createElement("p");
            par1.setAttribute("id", "motm");
            table_column2.appendChild(par1);
        };
        this.displayWinner = function () {
            var x = document.getElementById("resdel");
            var a = parseInt(document.getElementById("score1").innerText);
            var b = parseInt(document.getElementById("score2").innerText);
            var m = Math.abs(a - b);
            var res1 = "1";
            var res = "Team 1";
            if (b > a) {
                res = "Team 2";
                res1 = "2";
            }
            x.innerHTML = (res + " won by " + m + " runs");
            var mx = -1;
            var mx_idx = -1;
            for (var i = 1; i < 11; i++) {
                var cur = parseInt(document.getElementById("t" + res1 + i).innerText);
                if (mx < cur) {
                    mx = cur;
                    mx_idx = i;
                }
            }
            var y = document.getElementById("motm");
            y.innerHTML = ("Man of The Match is Player " + mx_idx + " from Team" + res1 + ". He socred " + mx + " runs");
        };
        this.updateTeam = function () {
            _this.resetTimer();
            _this.team += 1;
            var h1 = document.getElementById("hit1");
            h1.setAttribute("class", "btn btn-primary disabled");
            var h2 = document.getElementById("hit2");
            h2.setAttribute("class", "btn btn-primary");
            document.getElementById("hit1").removeEventListener("click", _this.displayrun);
            document.getElementById("hit2").addEventListener("click", _this.displayrun);
            _this.player = 1;
            _this.balls = 1;
            _this.total = 0;
            _this.teamTotal = 0;
            if (_this.team == 3) {
                document.getElementById("hit2").setAttribute("class", "btn btn-primary disabled");
                document.getElementById("hit2").removeEventListener("click", _this.displayrun);
                _this.generateResult();
            }
        };
        this.setTimer = function () {
            _this.time_interval = setInterval(_this.displayTimer, 1000);
        };
        this.displayTimer = function () {
            var val1 = document.getElementById("timer");
            var val2 = parseInt(val1.innerHTML);
            val2--;
            val1.innerHTML = "" + val2;
            if (val2 === 0) {
                _this.updateTeam();
            }
        };
        this.resetTimer = function () {
            var x = document.getElementById("timer");
            x.innerHTML = "60";
            clearInterval(_this.time_interval);
        };
    }
    return Cricketgame;
}());
;
var game = new Cricketgame();
document.getElementById("hit1").addEventListener("click", game.displayrun);
