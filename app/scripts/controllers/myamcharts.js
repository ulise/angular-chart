angular.module('angularChartApp').
  controller('AmchartCtrl', ['$scope', function ($scope) {
  $scope.chartData = function(){

    var data = [{
      year: 2005,
      income: 23.5,
      expenses: 18.1
    }, {
      year: 2006,
      income: 26.2,
      expenses: 22.8
    }, {
      year: 2007,
      income: 30.1,
      expenses: 23.9
    }, {
      year: 2008,
      income: 29.5,
      expenses: 25.1
    }, {
      year: 2009,
      income: 24.6,
      expenses: 25
    }];

    return data;
  };

  $scope.amChartOptions = {
    data: $scope.chartData(),
    type: 'serial',
    theme:'black',

    categoryField: 'year',
//    rotate: true,
//    pathToImages: 'https://cdnjs.cloudflare.com/ajax/libs/amcharts/3.13.0/images/',
    legend: {
      enabled: true
    },
    chartScrollbar: {
      enabled: true,
    },
    categoryAxis: {
      gridPosition: 'start',
      parseDates: false
    },
    valueAxes: [{
      position: 'top',
      title: 'Million USD'
    }],
    graphs: [{
//      type: 'column',
      title: 'Income',
      valueField: 'income',
//      fillAlphas: 1,
    }]
  }

  $scope.makeChart = function(divid){
  AmCharts.makeChart(divid,
    {
      'type': 'serial',
      'theme': 'black',
      'categoryField': 'category',
      'startDuration': 1,
      'categoryAxis': {
        'gridPosition': 'start'
      },
      'trendLines': [],
      'graphs': [
        {
          'balloonText': '[[title]] of [[category]]:[[value]]',
          'fillAlphas': 1,
          'id': 'AmGraph-1',
          'labelText': '[[value]]',
          'title': 'graph 1',
          'type': 'column',
          'valueField': 'column-1'
        },
        {
          'balloonText': '[[title]] of [[category]]:[[value]]',
          'bullet': 'round',
          'id': 'AmGraph-2',
          'labelText': '[[value]]',
          'lineThickness': 2,
          'title': 'graph 2',
          'valueField': 'column-2'
        }
      ],
      'guides': [],
      'valueAxes': [
        {
          'id': 'ValueAxis-1',
          'title': 'Axis title'
        }
      ],
      'allLabels': [],
      'balloon': {},
      'legend': {
        'enabled': true,
        'useGraphSettings': true
      },
      'titles': [
        {
          'id': 'Title-1',
          'size': 15,
          'text': 'Chart Title'
        }
      ],
      'dataProvider': [
        {
          'category': 'category 1',
          'column-1': 8,
          'column-2': 5
        },
        {
          'category': 'category 2',
          'column-1': 6,
          'column-2': 8
        },
        {
          'category': 'category 3',
          'column-1': 2,
          'column-2': 5
        }
      ]
    }
  );
}

}]);
