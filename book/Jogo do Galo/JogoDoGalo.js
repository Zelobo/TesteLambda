const present = require("present");
const moment = require ("moment");
const Jogo = require ("jogo");

const ini = present()

/*Nove Objectos. um para cada quadrado. Uma das propriedades sera o Status

Indicar status do Quadrado

_|_|_
_|_|_
 | |
    
0 para vazio
1 para cruz
2 para Bola 

Ter array c/ lista de quadrados vazios. Filtrar conforme Status.

Critérios de paragem:

Nenhum dos objetos ter Status = 0. Ou seja Jogaveis == []

Ter 3 quadrados seguidos c/ Status 1 ou 2. Como definir Seguidos?*/

/*Array que contem os jogos todos */

let todosjogos = [];

/*contador de jogos criados */

let numjogo = 0;

/*funçao criadora de novos jogos */  

let mapa = new Map([['X', 0], ['e', 0], ['O', 0]]);


let root = {
    
    print: function() {
        console.log('ROOT\n');    
    },

    tree: 0,
    
}






    //this.jogaveis = jogaveis; /* funcao que devolve os jogaveis com base no board */


Jogo.prototype = {
    
    //root () = ;
    
    //branch () = ;
    
    print: function () {
        
        console.log(this.tree);
        console.log(this.board[0] + '|' + this.board[1] + '|' + this.board[2]);
        console.log(this.board[3] + '|' + this.board[4] + '|' + this.board[5]);
        console.log(this.board[6] + '|' + this.board[7] + '|' + this.board[8]+'\n');
        console.log('v:', this.vitoria, '\n');
        this.parent.print();
        
    }
    
    
}

/*let jogaveis = function(board){
    
    let vazios = [];
    
    for (i in board) {
        
        if (board[i] === 0) {
            
            vazio.push[i];
            
        }
        
    }
    
}*/

/*Verificar condiçoes de paragem. Arescentar condiçao de paragem caso nao haja jogadas Jogaveis = [] */

let end = function (board) {
    
    if (

        (board[0] === board [1] && board[0] === board[2] && board[0] !== ' ')
        ||
        (board[3] === board [4] && board[3] === board[5] && board[3] !== ' ')
        || 
        (board[6] === board [7] && board[6] === board[8] && board[6] !== ' ')
        || 
        (board[0] === board [3] && board[0] === board[6] && board[0] !== ' ')
        || 
        (board[1] === board [4] && board[1] === board[7] && board[1] !== ' ')
        || 
        (board[2] === board [5] && board[2] === board[8] && board[2] !== ' ')
        || 
        (board[0] === board [4] && board[0] === board[8] && board[0] !== ' ')
        || 
        (board[2] === board [4] && board[2] === board[6] && board[2] !== ' ')
    ) {

        return 'vit';
        
    }else if (vazios(board).length === 0){

        return 'e';

    }else {

        return false;

    }
    
}


let replace = function(string, i, vez){
    
    let copia = '';
    
    for (letra in string) {
        
        if (letra == i){
            
            copia += vez;
            
        }else {
            
            copia += string[letra];
            
        }
        
    }
    
    return copia;
    
}


/*

  
    


//
///* Criar o primeiro jogo. */
//
//let primeirajogada = function (board){
///*Simular primeira jogada */
//
//    /*Para cada posicao disponivel (que esta indicado em jogaveis)*/
//    
//        todosjogos[numjogo].jogaveis.forEach(function(posicao){
//                                             
//            /*Criar um novo jogo igual ao presente*/
//
//            todosjogos.push(new Jogo(numjogo, todosjogos[numjogo].board, todosjogos[numjogo].jogaveis)); /* Dar-lhe um numero de jogo novo. O restante é igual ao jogo presente */
//
//            /*preencher com o numero 1 para essa posiçao no novo Board*/
//
//            todosjogos[numjogo].board[posicao] = 1; /*  1 = X e isto é a primeira jogada */
//
//            /*Retirar essa posiçao do array dos jogaveis no novo jogo HEEEEEEELP REVER*/
//
//            todosjogo[numjogo].jogaveis = todosjogos[0].jogaveis.filter(jogo => jogo.jogaveis)
//
//            /* Volta atras para a proxima posiçao disponvel */
//                                             
//        });

//Ve posiçoes vazias e devolve
        
let vazios = function (board){
    
    let poss = [];
         
    for (i in board){
        
        if (board[i] === ' '){
            
            poss.push(+i);
            
        }
    }
    
    //console.log(poss);
    
    return poss;

}


let jogar = function(jogo){
    
    let poss = vazios(jogo.board);
    
    //console.log('poss:', poss);
    
    let vez = null;
    
    poss.forEach(function(element) {
        
        let board_copy = jogo.board;
        
        let nj = new Jogo(board_copy, jogo.jogadas, jogo);
        
        //console.log('jogada:', jogo.jogadas, '->', nj.jogadas);
        
        todosjogos.push(nj);
        
        //element = 1 porque é o x
        
        if ( nj.jogadas % 2 ){
            
            vez = 'O';
            
        } else {
            
            vez = 'X';
            
        }
        
        nj.board = replace(nj.board, element, vez);

        if (end(nj.board) == 'e' ) {
            
            nj.acabado = true;
            nj.vitoria = 'e';
            mapa.set('e', mapa.get('e') + 1);            
            
        }else if (end(nj.board) == 'vit') {
                
            nj.acabado = true;
            nj.vitoria = vez;
            mapa.set(vez, mapa.get(vez) + 1); 
            
        }else {
            
            jogar(nj);
            
        }
        
        nj.jogado = true;
        
    })
    
    
}




//NEste momento, board e jogadas esta martelado tal como o num do jogo e de quem é a jogada (1 ou 2)

let board = "   "
          + "   "
          + "   "
          ;
    
//['X', 'O', ' ', 'X', 'O', 'X', ' ', ' ', 'X'];

let jogada = 0;

let primeirojogo = new Jogo(board, jogada); 

todosjogos.push(primeirojogo);



jogar(primeirojogo);



/*for (jogo of todosjogos) {
    jogo.print();
}*/
//console.log(todosjogos);






console.log(mapa);

let en = present();

let duration = (en - ini)* 60000 ;



console.log(moment.duration(duration, "milliseconds").humanize());


   




