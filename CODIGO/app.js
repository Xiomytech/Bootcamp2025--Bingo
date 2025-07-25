angular.module("JuegoBingo", [])
    .controller("ControladorJuegoBingo",
        function ($scope) {
            $scope.cantor = new Cantor();
            $scope.jugadores = [];
            $scope.IniciarJuego = function () {
                const totaljugadores = 7; //Número de jugadores
                for (let i = 0; i < totaljugadores; i++) {
                    $scope.jugadores.push({
                        nombre: "Jugador " + (i + 1),
                        tablajugador: new tabla(),
                        ganador: false
                    });
                }

            }
            $scope.sacarBalota = function () {
                $scope.cantor.sacarBalota();
                for(i=0;i<$scope.jugadores.length;i++){
                    $scope.jugadores[i].tablajugador.taparNumero($scope.cantor.ultimabalota);
                    if ($scope.jugadores[i].tablajugador.tapada.every(fila => fila.every(celda => celda))) {
                        $scope.jugadores[i].ganador = true; // Marcar al jugador como ganador
                        alert($scope.jugadores[i].nombre + " ha ganado!");
                    }
                }
            }
        }
    )
