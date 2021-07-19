import ListaLigada from './ListaLigada'

class Pilha {
    listaLigada;

    constructor(){
        this.listaLigada = new ListaLigada();
    }
    
    push(elemento){
        this.listaLigada.adiciona(elemento);
    }
    pop(){
        this.listaLigada.removeFim();
    }
    peek(){
        return this.listaLigada.pegaFim();
    }
    peekAndPop(){
        var obj = this.peek();
        this.pop();
        return obj;
    }
    eVazia(){
        return this.tamanho() === 0;
    }
    tamanho(){
        return this.listaLigada.tamanho();
    }
    clone(){
        return Object.assign(new Pilha(), this)
    }
    listToPilha(list){
        var pilha = new Pilha()
        
        for(var i=0; i < list.length; i++){
            pilha.push(list[i])
        }
        return pilha
    }
    addListToPilha(List){
        
        if(this.eVazia()){
 
            for(var i=0; i < List.length; i++){
                this.push(List[i])
            }
        } else {
 
            for(var k=0; k < List.length; k++){
                var aux = this.clone()
                
                while(!aux.eVazia()){
                    var obj = aux.peekAndPop()
                    alert(obj)
                    alert(obj === List[k])
                }
            }
        }
            
    }
    toList(){
        var lista = []
        
        var aux = this.clone()
        
        while(!aux.eVazia()){
            
            let list_item = aux.peekAndPop()
            lista.push(list_item)
        }
        return lista
    }
    containsList(List){
 
        if(this.eVazia())
            return false
        
        let aux = this.clone()

        for(var i = 0; i < List.length; i++){
 
            while(!aux.eVazia()){
                var aux_obj = aux.peekAndPop()
                alert(JSON.stringify(List[i])+" == "+JSON.stringify(aux_obj))
            }
        }
        return true
    }
}
export default Pilha;