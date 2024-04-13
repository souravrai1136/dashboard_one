import { Component, HostListener } from '@angular/core';
declare let google: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.drawChart();
    this.pieChart();
  }
  ngOnInit() {
    this.drawChart()
    this.pieChart()

  }

  drawChart() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['Week 01', 1000, 400],
        ['Week 02', 1170, 460],
        ['Week 03', 660, 1120],
        ['Week 04', 1030, 540],
        ['Week 05', 1000, 400],
        ['Week 06', 1170, 460],
        ['Week 07', 660, 1120],
        ['Week 08', 1030, 540]
      ]);

      var options = {
        curveType: 'function',
        legend: { position: 'top' },
        responsive: true,
        height: 400,
      };

      var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

      chart.draw(data, options);
    }
  }


  pieChart() {
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Investment', 'invest (in millions)'],
        ['Income', 567], ['Spends', 83], ['Installment', 34],
        ['invest', 78], ['Profit', 46], ['Loss', 300],
      ]);

      var options = {
        legend: { position: 'top' },
        pieSliceText: 'label',
        slices: {
          4: { offset: 0.2 },
          12: { offset: 0.3 },
          14: { offset: 0.4 },
          15: { offset: 0.5 },
        },
        responsive: true,
        height: 400,
      };

      var chart = new google.visualization.PieChart(document.getElementById('piechart'));
      chart.draw(data, options);
    }
  }

}
