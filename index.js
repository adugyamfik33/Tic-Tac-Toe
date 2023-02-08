let grid = [[1,2,3],[4,5,6],[7,8,9]];
let all_moves = ['00','01','02','10','11','12','20','21','22'];
let mode = Number(localStorage.getItem('mode'));
let vcomputer = (mode == 1) ? true : false ;
let computer_move;
sessionStorage.setItem('board',JSON.stringify(grid));
let board = JSON.parse(sessionStorage.getItem('board'));
let turn=1;
let winner="";
let player1_wins=0;
let player2_wins=0;
let player1="a";
let player2 ="b";
let start_game = false;
let count =1;
let player1_moves =[];
let player_move;
let available_moves =['00','01','02','10','11','12','20','21','22'];
if(vcomputer){
    document.querySelector('#computer').innerHTML ="Computer";
}
if(vcomputer){
    document.querySelector('#computer1').innerHTML ="Computer";
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
function available(){
    if(available_moves.includes(player_move)){
        available_moves =[];
        for(let i=0;i<all_moves.length;i++){
            if(player_move == all_moves[i]){
                continue;
            }
            else{
                available_moves.push(all_moves[i]);
            }
        }
        all_moves = available_moves;
    }
    if(available_moves.includes(computer_move)){
        available_moves =[];
        for(let i=0;i<all_moves.length;i++){
            if(computer_move == all_moves[i]){
                continue;
            }
            else{
                available_moves.push(all_moves[i]);
            }
        }
        all_moves = available_moves;
    }
}
function checked(){
    alert("Invalid Move!");
}

function gameover(){
    alert('The Game is Over');
}
function checkwin(){
board = JSON.parse(sessionStorage.getItem('board'));
if(board[0][0] == board[0][1] && board[0][0] == board[0][2]){
    if(board[0][0] == player1){
        winner ="Player 1";
        
    }
    else if(board[0][0] == player2){
        winner ="Player 2";
        if(vcomputer){
            winner = "Computer";
        }
    }
    return true;
}
else if(board[1][0] == board[1][1] && board[1][0] == board[1][2]){
    if(board[1][0] == player1){
        winner ="Player 1";
        
    }
    else if(board[1][0] == player2){
        winner ="Player 2";
        if(vcomputer){
            winner = "Computer";
        }
    }
    return true;
}
else if(board[2][0] == board[2][1] && board[2][0] == board[2][2]){
    if(board[2][0] == player1){
        winner ="Player 1";
        
    }
    else if(board[2][0] == player2){
        winner ="Player 2";
        if(vcomputer){
            winner = "Computer";
        }
    }
    return true;
}
else if(board[0][0] == board[1][0] && board[0][0] == board[2][0]){
    if(board[0][0] == player1){
        winner ="Player 1";
        
    }
    else if(board[0][0] == player2){
        winner ="Player 2";
        if(vcomputer){
            winner = "Computer";
        }
    }
    return true;
}
else if(board[0][1] == board[1][1] && board[0][1] == board[2][1]){
    if(board[0][1] == player1){
        winner ="Player 1";
        
    }
    else if(board[0][1] == player2){
        winner ="Player 2";
        if(vcomputer){
            winner = "Computer";
        }
    }
    return true;
}
else if(board[0][2] == board[1][2] && board[0][2] == board[2][2]){
    if(board[0][2] == player1){
        winner ="Player 1";
        
    }
    else if(board[0][2] == player2){
        winner ="Player 2";
        if(vcomputer){
            winner = "Computer";
        }
    }
    return true;
}
else if(board[0][0] == board[1][1] && board[0][0] == board[2][2]){
    if(board[0][0] == player1){
        winner ="Player 1";
        
    }
    else if(board[0][0] == player2){
        winner ="Player 2";
        if(vcomputer){
            winner = "Computer";
        }
    }
    return true;
}
else if(board[0][2] == board[1][1] && board[0][2] == board[2][0]){
    if(board[0][2] == player1){
        winner ="Player 1";
        
    }
    else if((board[0][2] == player2)){
        winner ="Player 2";
        if(vcomputer){
            winner = "Computer";
        }
    }
    return true;
}


return false;
}
function checkdraw(){
    board = JSON.parse(sessionStorage.getItem('board'));
    let one = board[0][0];
    let two = board[0][1];
    let three = board[0][2];
    let four = board[1][0];
    let five = board[1][1];
    let six = board[1][2];
    let seven = board[2][0];
    let eight = board[2][1];
    let nine = board[2][2];

    if(!checkwin()){
        if(one!=1 && two!=2 && three!=3 && four!=4 && five!=5 && six!=6 && seven!=7 && eight!=8 && nine!=9){
            return true;
        }
    }
    return false;
}
function drawBoard(){
    board = JSON.parse(sessionStorage.getItem('board'));
    let cards = document.querySelectorAll('.board-card');
    cards.forEach(card => {

        let row = Number(card.getAttribute('row'));
        let col = Number(card.getAttribute('col'));
        console.log(row,col);
        
        if(board[row][col] === player1){
            card.innerHTML = "0";
            card.style.color ="aqua";
            card.setAttribute('onclick','checked()');
            card.setAttribute('status','checked');
        }
        if(board[row][col] === player2){
            // console.log(board[row][col]);
            card.innerHTML = "1";
            card.style.color ="red";
            card.setAttribute('onclick','checked()');
            card.setAttribute('status','checked');
        }
         
    });
}
function computer_check(move){
   let row = Number(move[0]);
   let col = Number(move[1]);
    board[row][col] = player2;
    computer_move = move;
}
function check(btn){
    if(count%2 == 0){
        turn = 2;
    }
    else{
        turn = 1;
    }
    let row = btn.id[0];
    let col =btn.id[1];
if(!vcomputer){
    if(turn ==1){
        board[row][col] = player1;
     }
     //if player two turn
     else if(turn == 2){
        board[row][col] = player2;
     }
}
else{
    let row1 =['00','01','02'];
    let row2 =['10','11','12'];
    let row3 =['20','21','22'];
    let r1move, r2move,r3move;
    turn = 1;
    if(turn ==1){
        player_move = btn.id;
        board[row][col] = player1;
        player1_moves.push(player_move);
        available();
        if(available_moves.length > 0){
            computer_check(available_moves[getRandomInt(0,available_moves.length-1)]);
            available();
        }
        // if(count > 2 && available_moves.length > 0){
        //     let opponent_moves = player1_moves.length;
        //     switch(opponent_moves){
        //         case 2:
        //             let m1 = player1_moves[0];let m2 = player1_moves[1];
        //             if(row1.includes(m1) && row1.includes(m2)){
        //                 for(let i =0;i<3;i++){
        //                     if(row1[i] != m1 && row1[i] != m2){
        //                         r1move = row1[i];
        //                         computer_check(r1move);
        //                         available();
        //                         break;
        //                     }
        //                 }
        //             }
        //             else if(row2.includes(m1) && row2.includes(m2)){
        //                 for(let i =0;i<3;i++){
        //                     if(row2[i] != m1 && row2[i] != m2){
        //                         r2move = row2[i];
        //                         computer_check(r2move);
        //                         available();
        //                         break;
        //                     }
        //                 }
        //             }
        //             else if(row3.includes(m1) && row3.includes(m2)){
        //                 for(let i =0;i<3;i++){
        //                     if(row3[i] != m1 && row3[i] != m2){
        //                         r3move = row2[i];
        //                         computer_check(r3move);
        //                         available();
        //                         break;
        //                     }
        //                 }
        //             }
        //             else{
        //                 computer_check(available_moves[getRandomInt(0,available_moves.length)]);
        //                 available();
        //             }
        //             break;
        //             default:
        //                 computer_check(available_moves[getRandomInt(0,available_moves.length)]);
        //                 available();
        //                 break;
        //     }
        // }
        // else{
        //     if(available_moves.length > 0){
        //         computer_check(available_moves[getRandomInt(0,available_moves.length)]);
        //         available();
        //     }
        // }


     }
     //if player two turn
    //  else if(turn == 2){
        
    //  }
}
 sessionStorage.setItem('board',JSON.stringify(board));
 count++;
 drawBoard();
 if(checkwin()){
    board = JSON.parse(sessionStorage.getItem('board'));
    //start_game =false;
    console.log(board);
    document.querySelector('.show-winner').style.display ="block";
    document.querySelector('#player').innerHTML = winner;
    let cards = document.querySelectorAll('.board-card');
    cards.forEach(card => {
         card.setAttribute('onclick','gameover()');
    });
}
else if(checkdraw()){
    board = JSON.parse(sessionStorage.getItem('board'));
    //start_game =false;
    document.querySelector('.show-winner').style.display ="block";
    document.querySelector('#player').innerHTML = "No one";
    let cards = document.querySelectorAll('.board-card');
    cards.forEach(card => {
         card.setAttribute('onclick','gameover()');
    });
}
}
function restart(){
    if(vcomputer){
        location.reload();
        localStorage.clear();
        localStorage.setItem('mode','1');
    }
    else{
        localStorage.clear();
        location.reload();
    }
 
  
}
function playAgain(){
    var p1, p2;
    if(vcomputer){
        if(winner == "Player 1"){
            p1=Number(document.querySelector('#player1-wins').innerHTML);
            p1++;
            localStorage.setItem('player1-wins',p1)
        }
        else if(winner == "Computer"){
            p2=Number(document.querySelector('#player2-wins').innerHTML);
            p2++;
            localStorage.setItem('player2-wins',p2);
        }
    }
    else{
            if(winner == "Player 1"){
        p1=Number(document.querySelector('#player1-wins').innerHTML);
        p1++;
        localStorage.setItem('player1-wins',p1)
    }
    else if(winner == "Player 2"){
        p2=Number(document.querySelector('#player2-wins').innerHTML);
        p2++;
        localStorage.setItem('player2-wins',p2);
    }
    }

    location.reload();
}
document.querySelector('#player1-wins').innerHTML = Number(localStorage.getItem('player1-wins'));
document.querySelector('#player2-wins').innerHTML = Number(localStorage.getItem('player2-wins'));
function play(){
 while(start_game){
    if(checkwin()){
        //start_game =false;
        document.querySelector('.show-winner').style.display ="block";
        document.querySelector('#player').innerHTML = winner;
    }
    else if(checkdraw){
        //start_game =false;
        document.querySelector('.show-winner').style.display ="block";
        document.querySelector('#player').innerHTML = "No one";
    }
    else{

    }
 }
}
function start(){
    alert('Player 1 goes first');
    var start_stop = document.querySelector('#startorstop');
    start_stop.setAttribute('class','btn btn-dark');
    start_stop.setAttribute('onclick','terminate()');
    start_stop.innerHTML ="Terminate";
    start_game = true;
    play();
}
