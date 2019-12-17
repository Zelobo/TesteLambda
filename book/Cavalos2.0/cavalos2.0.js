console.log('ok');

const Tree = function (element, level = 0, children=[]) {

    this.element = element;
    this.level = level;
    this.children = children;


}

arvore = new Tree ('root');

console.log(arvore.element + ' ' + arvore.children);

make_children (arvore);




function make_children (node){
    
    var char = 'a'
    
    //decidir numero de filhos

    let num = Math.ceil(Math.random() * 4);
    
    //ciclo criador de filhos
    
    for (let i = 1; i <= num; i++){
        
        let nivelfilho = 0;
        
        if (node.level < 3) {
            
            // aumentar o nivel do ramo por 1
            
            console.log (node.level);
            
            nivelfilho = node.level + 1;
            
            //aumentar o indice de caracter por 1 (a --> b)
            
            char = nextchar(char);

            //criar nova arvore 

            let child = new Tree(node.element+char , nivelfilho);
            
            if (nivelfilho > 1) {
                
                console.log ( nivelfilho);
                
            }
            

            //inserir nova arvore nos filhos na arvore mãe
            
            debugger;

            node.children.push(child);
            
            make_children (child, nivelfilho);
            
        }
   
    }
    
}

function nextchar (c){
    
    return String.fromCharCode(c.charCodeAt(0) + 1);
    
}

console.log(arvore);

console.log(arvore.children[1].children[0].children);