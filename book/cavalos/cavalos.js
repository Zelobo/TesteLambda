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
    
    console.log('ze() -- ITERAÇÃO: ', ++iteracoes, '\n');

    //Por os cavalos no estabulo --preencher array estabulo
    let criarestabulo = function () {

        var i = 0;

        var estabulo = [];

        do {

            i++;

            //Cavalo(Math.floor(Math.random() * 25));

            estabulo.push(new Cavalo(i)); //[cavalo.merda]

        }while (i<25);

        //console.log('estabulo:', estabulo);

        estabulo = estabulo.sort(function(a, b) {

            return a.index - b.index;

        });

        //console.log('organized', estabulo);

        return estabulo;    

    }
    
    //funçao para criar cavalos
    let Cavalo = function (number) {

        this.number = number;

        this.corridas = 0;

        this.merda = false;

        this.fasterthan = new Set();

        this.slowerthan = new Set();

        this.index = getRandomInt(1000);

    }
    
    //funçao para atribuir index aleatorio ao cavalo
    let getRandomInt = function (max) {

      return Math.floor(Math.random() * Math.floor(max));

    }

    //Ciclo para escolher os cavalos p/ pista e por a correr
    let proximos = function (estabulo) {

        //console.log('running proximos');

        // var de posiçao do cavalo no estabulo

        var x = 0;

        //array de proximos cavalos a 'correr'

        var prox = [];

        //ciclo para inserir cavalos no array Prox até ter 5.

        estabulo = estabulo.sort(function(a, b) {

            return a.corridas - b.corridas;

        });

        while (estabulo.length > 3 && prox.length < estabulo.length && prox.length < 5 ) {

                //console.log('filtro', estabulo);

            //verifica se cavalo deve entrar na corrida e em caso afirmativo, insere no array Prox

                prox.push(estabulo[x]);      // [cavalo{}, cavalo{}, cavalo{}, cavalo{this.merda = true}, cavalo{}]

                estabulo[x].corridas++;

                x++;

        }

        //console.log('pushed', prox);

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
                
        for (let fasteri = 0; fasteri < sorted.length; fasteri++) { 
            
            fast(sorted, fasteri);
            //console.log('sorted', sorted);

        }
        
        for (let sloweri = 1; sloweri < sorted.length; sloweri++) {

            slow(sorted, sloweri);
            //console.log('sorted', sorted);

        }

        // check if relations are correct
        check(estabulo);
        
        estabulo = estabulo.filter(cavalo => cavalo.slowerthan.size < 3);
        
    }
    
    let fast = function (sorted, fasteri){

        for (var sloweri = fasteri+1; sloweri < sorted.length; sloweri++){
            
            //console.log('pushing', y, 'into', x);

            sorted[fasteri].fasterthan.add( sorted[sloweri].number );
            
            sorted[sloweri].fasterthan.forEach(function(slowercavalo){

                sorted[fasteri].fasterthan.add( slowercavalo );

            });
        
        }

    }

    let slow = function (sorted, sloweri){

        for (var fasteri = 0; fasteri < sloweri; fasteri++){

            sorted[sloweri].slowerthan.add( sorted[fasteri].number );

            sorted[fasteri].slowerthan.forEach(function(fastercavalo){
                
                sorted[sloweri].slowerthan.add( fastercavalo );
                
            });

        }

    }
    
    let estabulo = criarestabulo(); // puxa proximos // puxa pista

    let campeoes = estabulo;

    var contagem = 0;

    while (estabulo.length > 3) {
        
        //console.log(estabulo);
        
        contagem++;
        
        pista( proximos(estabulo) );

        console.log(
            'contagem', contagem, '\n',
            'qualified:', estabulo.length, 'horses', '\n'
        );

    }
    
    console.log(campeoes);

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
