'use strict';

angular.module('adf.widget.book', ['adf.provider'])
  .config(function(dashboardProvider){
    dashboardProvider
      .widget('book', {
        title: 'Buch',
        description: 'Buch Dashboard Widget',
        templateUrl: 'widgets/book/view.html',
        edit: {
          templateUrl: 'widgets/book/edit.html'
        }
      });
  });
