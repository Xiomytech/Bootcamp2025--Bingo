function tabla(){
    this.tabla = []; //Matriz
this.tapada=[];
    for (var f = 0; f < 5; f++) {
        this.tabla[f] = []; //matriz
        this.tapada[f] = []; //matriz para tapar
        for (var c = 0; c < 5; c++) {
            if (!(c == 2 && f == 2)) { // Dejar el centro vacío
            this.tabla[f][c] = c * 15 + Math.floor(Math.random() * 15) + 1;//Asignar los numeros
            }
            else {
                this.tabla[f][c] = "X"; // Centro vacío
            }
            this.tapada[f][c] = false; // Inicializar tapada como false
        }
    }
    this.taparNumero=function(balotaSacada) {
        for (var f = 0; f < 5; f++) {
            for (var c = 0; c < 5; c++) {
                if (this.tabla[f][c] === balotaSacada) {
                    this.tapada[f][c] = true; // Marcar como tapada
                }
            }
        }
    }
}
