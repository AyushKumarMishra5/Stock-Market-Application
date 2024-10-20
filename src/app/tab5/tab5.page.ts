import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  chart: Chart | undefined;
  data: number[] = [20, 165, 50, 175, 180, 60, 190, 10, 200, 160, 20, 60, 190, 10, 200, 160];
  labels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'aug', 'sep', 'oct', 'nov', 'dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  animationDuration = 1200000;
  frameInterval = 1000;
  totalEarning = 54000;

  constructor() { }

  ngOnInit() {
    this.initializeChart();
    this.animateChart();
    this.changeEarning();
    this.change2();
    this.change3();
    this.change4();
    this.change5();
    this.change6();
    this.change7();
    this.change8();
    this.change9();
  }
  ionViewWillEnter(){
   console.log("Page has to enter!")
  }
  ionViewDidEnter(){
   console.log("Page entered!")
  }
  ionViewWillLeave(){
    console.log("Page is going to leave")
  }
  changeEarning(){
    setTimeout(()=>{
      this.totalEarning = 104000
    }, 10000)
  }
  change2(){
    setTimeout(()=>{
      this.totalEarning = 308000
    }, 15000)
  }
  change3()
  {
    setTimeout(()=>{
      this.totalEarning = 89000
    }, 20000)
  }
  change4()
  {
    setTimeout(()=>{
      this.totalEarning = 9200890
    }, 25000)
  }
  change5()
  {
    setTimeout(()=>{
      this.totalEarning = 87000
    }, 30000)
  }
  change6(){
    setTimeout(()=>{
      this.totalEarning = 308000
    }, 35000)
  }
  change7()
  {
    setTimeout(()=>{
      this.totalEarning = 89000
    }, 40000)
  }
  change8()
  {
    setTimeout(()=>{
      this.totalEarning = 9200890
    }, 45000)
  }
  change9()
  {
    setTimeout(()=>{
      this.totalEarning = 87000
    }, 50000)
  }

  initializeChart() {
    Chart.register(...registerables);
    const canvas = document.getElementById('stockChart') as HTMLCanvasElement;

    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        this.chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: this.labels,
            datasets: [{
              label: 'Mishra INC',
              data: this.data,
              backgroundColor: 'rgba(34, 202, 236, 0.2)',
              borderColor: 'rgba(34, 202, 236, 1)',
              borderWidth: 2,
            }]
          },
          options: {
            responsive: true,
            animation: {
              duration: 0
            },
            plugins: {
              legend: {
                display: true,
                position: 'bottom',
              }
            },
            scales: {
              x: {
                grid: {
                  display: false
                }
              },
              y: {
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)',
                },
                beginAtZero: true
              }
            }
          }
        });
      } else {
        console.error('Failed to get 2D context');
      }
    } else {
      console.error('Canvas element not found');
    }
  }

  animateChart() {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;

      if (elapsedTime >= this.animationDuration) {
        clearInterval(interval);
        return;
      }

      const newValue = Math.floor(80 + Math.random() * 100);
      this.data.push(newValue);
      this.labels.push(`Month ${this.labels.length + 1}`);

      if (this.chart) {
        this.chart.update('none');
      }

      if (this.data.length > 12) {
        this.data.shift();
        this.labels.shift();
      }
    }, this.frameInterval);
  }
}
