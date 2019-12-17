var Constr = function( a = 'No Name' , b = () => null, c = 'anonymous', proto = 'default' ) {
    
    this.name = null || a;
    
    this.func = null || b;
    
    this.auth = null || c;
    
    this.proto = 'coisas'
    
}

var novoobj =  new Constr ('Zé' , 'funcao', 'Lobo') ;

console.log(novoobj);

console.log(novoobj instanceof Object)

Constr.prototype = {
    
    proto: 'outras';
    
}

