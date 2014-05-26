var galleryApp = angular.module('galleryApp',['ngSanitize'])
				.controller('galleryController', function($scope, gFact) {
					$scope.heading="Search Images";
					 $scope.getPhotos = function(sValue) {
						gFact.getImages(sValue).then(function(data) {
						$scope.photos = data.photos.photo;
						//console.warn(data.photos.photo.length);
					})
					}
					$scope.getPhotos('Tiger');
				})
				.factory('gFact', function($http, $q) {
					return {
						getImages: function(sValue) {
							var deferred = $q.defer();
							var config = {
								params : {
											method : 'flickr.tags.getClusterPhotos',
											api_key : '43a076b0fc28d0010759d0ed62357b64',
											tag : sValue,
											format:'json',
											jsoncallback : 'JSON_CALLBACK',
											per_page:2000
										}	
									};
							
							var url = 'https://api.flickr.com/services/rest/';
							

							$http.jsonp(url, config).success(function(data,status,headers,config) {
								deferred.resolve(data);
								
							})
							.error(function(data,status,headers,config) {
								deferred.reject(data);
								alert("error")
							})
							return deferred.promise;
					}
					}
				})
//?method=flickr.tags.getClusterPhotos&api_key=43a076b0fc28d0010759d0ed62357b64&tag=tiger&format=json&jsoncallback=JSON_CALLBACK-->