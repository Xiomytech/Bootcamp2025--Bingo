function Cantor() {
    this.balotasSacadas = new Array(75).fill(false);
    this.ultimabalota = 0;

    this.tabla = []; //Matriz

    for (var f = 0; f < 15; f++) {
        this.tabla[f] = []; //matriz
        for (var c = 0; c < 5; c++) {
            this.tabla[f][c] = c * 15 + f + 1 //Asignar los numeros

        }
    }
    this.iniciar = function () {
        this.balotasSacadas = new Array(75).fill(false);

    }
    this.sacarBalota = function () {
        let balota = Math.floor(Math.random() * 75) + 1;
        this.balotasSacadas[balota - 1] = true;
        this.ultimabalota = balota;

    }
}