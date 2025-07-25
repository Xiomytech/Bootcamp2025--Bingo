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
        let totalsacadas = this.balotasSacadas.filter(valor => valor==true).length;
        if (totalsacadas < 75) {
        let balota = Math.floor(Math.random() * 75) + 1;
        while (this.balotasSacadas[balota - 1]) {
            balota = Math.floor(Math.random() * 75) + 1;
        }
        this.balotasSacadas[balota - 1] = true;
        this.ultimabalota = balota;
        this.balotasFaltantes = this.balotasSacadas.map((sacada, index) => !sacada ? index + 1 : null).filter(valor => valor !== null);
    } else {
        this.ultimabalota = "Juego terminado";
        this.balotasFaltantes = "Quedan () balotas";
    }
}
}