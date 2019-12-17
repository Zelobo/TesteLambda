function f(num){
    
    //var num = process.argv[2];
    
    var contador = 0;
    
    // testar paridade

   while (num != 1) {
            
        if (num % 2 == 0) {
                
            num = num / 2;  
              
        } else {
          
            num = (num * 3) + 1;
        
        }
        
        contador++;
            
    } 
    
    return contador;
    
}

var arr = [];

var num = 1;

do {
    
    arr.push(f(num));
    
    num++;
    
    console.clear();
    
    console.log('processing', num);
    
} while (num <= 100);

    
console.clear();

console.log(arr);
