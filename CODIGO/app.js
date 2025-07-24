angular.module("JuegoBingo",[])
.controller("ControladorJuegoBingo",
    function($scope){
        $scope.cantor= new Cantor();
        $scope.IniciarJuego=function(){
                        $scope.cantor.iniciar();

        }
        $scope.sacarBalota=function(){
            $scope.cantor.sacarBalota();
        }
    }
)
