class livro {
    constructor(titulo, autor, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.lido = false;
    }

    marcarComoLido(){
        this.lido = true;
        console.log(`${this.titulo} foi marcado como lido.`);
    }
}

const meuLivro = new livro("O senhor dos Anéis", "J.R.R Tolkien", "Fantasia");
meuLivro.marcarComoLido();