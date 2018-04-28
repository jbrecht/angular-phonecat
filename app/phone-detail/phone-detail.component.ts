'use strict';
// Register `phoneDetail` component, along with its associated controller and template

class PhoneDetailController {
  phone: any;
  mainImageUrl: string;

  static $inject = ['$routeParams', 'Phone']
  
  constructor($routeParams: angular.route.IRouteParamsService, Phone: any) {
    this.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      this.setImage(phone.images[0]);
    })
  }

  setImage = function setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  };
}

angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: PhoneDetailController
  });
