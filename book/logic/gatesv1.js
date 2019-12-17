/*
var add = function (x,y) { return x + y} ;
add(3,6)
var add = function (x,y) { return x + y} ;
add(3,6)
var func = function (x) 
{
    return x + 3
    };
    
func(8)
var glob;

var addglob = function(x)
{
   return x + th;
}
*/
var nand = function (x, y) {
    if (x == true && y==true) {
        return false     
    } else {
        return true  
    }
}
    
var and= function (x,y){
    if (x==true && y==true){
        return true;
    }else {
        return false;
    }
}

var or = function (x,y){
    if (x==true || y==true){
        return true;
    }else {
        return false;
    }
}

var not = function (x) {
    if (x){
        return false
    }else{
        return true
    }
}

/* rever este */

var xnor = function (x, y){
    if ((x == true && y==false) || (x== false && y==true)){
        return false;
    }else {
        return true;
    }
}

var xor = function (x, y){
    if ((x == true && y==false) || (x== false && y==true)){
        return true;
    }else {
        return false;
    }
}

var nor = function (x, y){
    if (x == false && y == false){
        return true;
    }else {
        return false
    }
}

var functionhigh= function (x){
   console.log( [x(0,0), x(0,1), x(1,0), x(1,1)])
}


var obj = {
    name:'nand',
    func:nand,
    auth:'Lobo'
}



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





var testgen = function (x) {
   
   
   if (arr = [false, true, true, true]) {

       return true;
   
   }else return false;
       
}


var testgate = function (gate) {
   
    var arr = [gate.func(0,0), gate.func(0,1), gate.func(1,0), gate.func(1,1)]
    
     let result = null;
    
    switch (gate.name) {
            
        
        case 'or' :
                 
            result = arr == [false, true, true, true];

            break;
        
        case 'nor' :
                   
            result = arr == [true, false, false, false];

            break;
            
        case 'nand' :
                       
            result = arr == [true, true, true, false];

            break;
        
        case 'and' :
                       
            result = arr == [false, false, false, true];

            break;
        
        case 'xnor' :
                       
            result = arr == [true, false, false, true];

            break;
            
        case 'xor' :
                       
            result = arr == [false, true, true, false];

            break;
        
    }
    
        console.log(result);
        
    
}

gates.foreach(testgate(gate))