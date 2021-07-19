class ListaLigada {

    totalElementos; 
	primeiro; 
	ultimo;

	constructor() {
		this.totalElementos = 0;
	}

	adiciona(elemento) {
		if (this.totalElementos === 0)
			this.adicionaInicio(elemento);
		else
			this.adicionaFim(elemento);
	}
	adicionaInicio(elemento) {
		var novo = new ListaLigada.Celula();
		novo.elemento = elemento;
		novo.proximo = this.primeiro;
        
		this.primeiro = novo;
        
		if (this.totalElementos === 0) {
			this.ultimo = this.primeiro;
		}
        
		this.totalElementos += 1;
	}

	adicionaFim(elemento) {
		var novo = new ListaLigada.Celula();
		novo.elemento = elemento;

		this.ultimo.proximo = novo;
		this.ultimo = novo;
		this.totalElementos += 1;
	}
	tamanho() {
		return this.totalElementos;
	}

	pegaCelula(posicao) {
		if (!this.posicaoExiste(posicao))
			throw new Error("Posicao não existe");
		if (posicao === 0)
			return this.primeiro;
		if (posicao === this.totalElementos)
			return this.ultimo;

		var atual = this.primeiro;
		for (var i = 1; i <= posicao; i++) {
			atual = atual.proximo;
		}
		return atual;
	}
	contem(o) {
		return this.pegaPosicao(o) !== -1;
	}

	removeInicio() {
		if (this.totalElementos > 0) {
			this.primeiro = this.primeiro.proximo;
			this.totalElementos -= 1;
		}
	}

	removeFim() {
		if (this.totalElementos === 0)
			throw new Error("Estrutura se encontra vazia");
		this.ultimo = this.pegaCelula(this.totalElementos - 1);
		this.totalElementos -= 1;
	}

	pegaPosicao(elemento) {
		for (var i = 0; i < this.totalElementos; i++) {
			if (this.pega(i).equals(elemento))
				return i;
		}
		return -1;
	}
	posicaoExiste(posicao) {
		if(this.tamanho() === 0) return false;
		return posicao >= 0 && posicao <= this.tamanho();
	}

	pega(posicao) {
		return this.pegaCelula(posicao).elemento;
	}

	pegaInicio() {
		return this.primeiro.elemento;
	}

	pegaFim() {
		return this.ultimo.elemento;
	}

	removeByIndex(posicao) {
		if (this.posicaoExiste(posicao)) {
			if(posicao === 0){
				this.removeInicio();
				return;
			}
			else if(posicao === this.tamanho()){
				this.removeFim();
			}

			var anterior = this.pegaCelula(posicao - 1);
			anterior.proximo = this.pegaCelula(posicao).proximo;
			this.totalElementos -= 1;
		}
	}

	removeByElement(elemento) {
		var posicao = this.pegaPosicao(elemento);
		if (posicao === -1)
			throw new Error("Elemento nao existe dentro da estrutura");
		this.removeByIndex(posicao);
	}
    
    static get Celula () {
        return class Celula {
            elemento
            proximo
        }
    }
    get Celula(){
        return ListaLigada.Celula
    }
}
export default ListaLigada