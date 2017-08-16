'use strict';

angular.module('myApp.ingresoVenta', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/ingresoVenta', {
                    templateUrl: 'view1/ingresoVenta.html',
                    controller: 'IngresoVentaCtrl'
                });
            }])

        .controller('IngresoVentaCtrl', ['$scope', '$http', function ($scope, $http) {

                var linkPedidos = 'http://localhost:3000/pedidos';

                $scope.registrarPedido = function () {

                    var pedido = {
                        nombreCliente: $scope.cliente,
                        pedido: $scope.pedido
                    };

                    $http({
                        method: 'POST',
                        url: linkPedidos,
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: pedido
                    }).then(function (response) {
                        console.log(response.status + ' OK: El pedido se ha registrado');
                    }).catch(function (response) {
                        console.log(response.status + ': Error al registrar el pedido');
                    });
                };

            }]);