

let gates = [
 
   {
       name: 'nand',
       func: function (x, y) {
           if (x == true && y==true) {
               return false;
           } else {
               return true;
           }
       },
       auth: 'lobo'
   },
 
   {
       name: 'and',
       func: function (x,y) {
           if (x == true && y == true){
               return true;
           } else {
               return false;
           }
       },
       auth: 'lobo'
   },
 
   {
       name: 'or',
       func: function (x,y) {
           if (x==true || y==true){
               return true;
           } else {
               return false;
           }
       },
       auth: 'lobo'
   },
 
   {
       name: 'xnor',
       func: function (x, y) {
           if ((x == true && y==false) || (x== false && y==true)){
               return false;
           } else {
               return true;
           }
       },
       auth: 'lobo'
   },
 
   {
       name: 'xor',
       func: function (x, y) {
           if ((x == true && y==false) || (x== false && y==true)){
               return true;
           } else {
               return false;
           }
       },
       auth: 'lobo'
   },
 
   {
       name: 'nor',
       func: function (x, y) {
           if (x == false && y == false){
               return true;
           } else {
               return false;
           }
       },
       auth: 'lobo'
   }
 
];


let testeindividual = function (arr, corr){

    let cicle = 0;

    let result = null;
            
    do {
        
        console.log(cicle);
                
        if (arr[cicle] != corr[cicle]) {
        
            result = false;
                    
        } else {
                    
            result = true;
            
        }
                
        cicle++;                
                
    } while (result == true && cicle < arr.length)
        
    return result;
                
}

//funcao para testar os gates dai chamar se teste gates buurro
// aceita um objeto que tenha as propriedades auth func e name e testa a sua validade. true/false

var testgate = function (gate) {
   
    var arr = [gate.func(0,0), gate.func(0,1), gate.func(1,0), gate.func(1,1)]
    
    let result = null;
    
//corr variavel com o resultado esperado para logic gate escolhido
    
    var corr = null 
    
    switch (gate.name) {
            
        case 'or' :
            
            corr = [false, true, true, true];
                        
            break;
            
        case 'nor' :
            
            corr = [true, false, false, false];
                    
            break;
            
        case 'nand' :
            
            corr = [true, true, true, false];
                       
            break;
        
        case 'and' :
            
            corr = [false, false, false, true];
                       
            break;
        
        case 'xnor' :
            
            corr = [true, false, false, true];
                       
            break;
            
        case 'xor' :
            
            corr = [false, true, true, false];
                       
            break;
            
        default:
            
            console.log('Logic Gate não reconhecida');
        
    }
    
    result = testeindividual(arr, corr);
    
    if (result == true) {
        
        console.log('A função ' + gate.name + ' passou no teste.');
        
        console.log(corr);
        
    }else {
        
        console.log(result + '. O resultado esperado para ' +gate.name+ ' seria ['+ corr+ '], o inserido foi ['+ arr + ']');
        
        console.log(corr);
        
    }
    
    return result;    
    
}

// testgate(gates[2]);


gates.forEach(function(element) {
    
    res = testgate(element);
    
    console.log(res);
    
});

// expected output: "a"
// expected output: "b"
// expected output: "c" */



