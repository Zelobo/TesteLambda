let iteracoes = 0;
    
function check (cs) {
    
    for (c of cs) {
        
        for (n of c.fasterthan) {
            
            if (n > c.number) throw new Error('fasterthan error')
            
        }
        
        for (n of c.slowerthan) {
            
            if (n < c.number) throw new Error('fasterthan error')
            
        }
        
    }
    
}

function ze () {
        
    console.info('ze() -- ITERAÇÃO: ', ++iteracoes, 'globaveis variais \n');

    //Por os cavalos no estabulo --preencher array estabulo
    let criarestabulo = function () {

        var i = 0;

        var estabulo = [];

        do {

            i++;

            //Cavalo(Math.floor(Math.random() * 25));

            estabulo.push(new Cavalo(i)); //[cavalo.merda]

        }while (i<25);

        //console.info('estabulo:', estabulo);

        estabulo = estabulo.sort(function(a, b) {

            return a.index - b.index;

        });

        //console.info('organized', estabulo);

        return estabulo;    

    }

    //funçao para criar cavalos
    let Cavalo = function (number) {

        this.number = number;

        this.corridas = 0;

        this.merda = false;

        this.slowerthan = new Set();

        this.index = getRandomInt(1000);

    }

    //funçao para atribuir index aleatorio ao cavalo
    let getRandomInt = function (max) {

        return Math.floor(Math.random() * Math.floor(max));

    }

    //Ciclo para escolher os cavalos p/ pista e por a correr
    let proximos = function (campeoes) {

        //console.info('running proximos');

        // var de posiçao do cavalo no estabulo

        var x = 0;

        //array de proximos cavalos a 'correr'

        var prox = [];

        //ciclo para inserir cavalos no array Prox até ter 5.

        campeoes = campeoes.sort(function(a, b) {

            return a.corridas - b.corridas;

        });

        while (campeoes.length > 3 && prox.length < campeoes.length && prox.length < 5 ) {

            //console.info('filtro', estabulo);

            //verifica se cavalo deve entrar na corrida e em caso afirmativo, insere no array Prox

            prox.push(campeoes[x]);      // [cavalo{}, cavalo{}, cavalo{}, cavalo{this.merda = true}, cavalo{}]

            campeoes[x].corridas++;

            x++;

        }

        //console.info('pushed', prox);

        return prox;

    }

    //pista p/ cavalos
    /*Passar cavalos (objeto) de array estabulo como argumentos para funçao
    Funçao recebe recebe os 5 objectos e insere dentro do array Pista e atribui a cada atributo corrida = 1
    Funçao organiza os cavalos por ordem crescente pelo atributo numero
    Aos dois ultimos objectos da funcao atribui true a propriedade Merda*/
    let pista = function (cavalos){ 

        let sorted = cavalos.sort(function(a, b) {

            return b.number - a.number;

        });

        for (let sloweri = 1; sloweri < sorted.length; sloweri++) {

            slow(sorted, sloweri);
            //console.info('sorted', sorted);

        }

        // check if relations are correct

        for (cavalo of estabulo) {

            cavalo.slowerthan.forEach(function(fastercavalo){

                fastercavalo.slowerthan.forEach(function(fasterercavalo){

                    cavalo.slowerthan.add(fasterercavalo);

                });

            });

        }

        campeoes = campeoes.filter(cavalo => cavalo.slowerthan.size < 3);

        //console.info('podio'. podio);
        //console.info(cavalos);
    }

    let slow = function (sorted, sloweri){

        for (var fasteri = 0; fasteri < sloweri; fasteri++){

            sorted[sloweri].slowerthan.add( sorted[fasteri] );

        }



    }    

    let estabulo = criarestabulo(); // puxa proximos // puxa pista

    let campeoes = estabulo;

    var contagem = 0;

    while ( campeoes.length > 3 ) {

        contagem++;

        pista( proximos(campeoes) );

        /*console.info(

            'contagem', contagem, '\n',
            'qualified:', campeoes.length, 'horses', '\n'

        );*/

    }

    //console.info( 'contagem:', contagem );

    return contagem;

}

let i = process.argv[2];

let results = new Map();

let x = 0;

while (x < i) {

    let r = ze();

    results[r] = ++results[r] || 1;

    x++;

}

console.log('-> RESULTS:', results);

debug = true;

if (!debug) {
    
    console.info = function () {};
    
}
