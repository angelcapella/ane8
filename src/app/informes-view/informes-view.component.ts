import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informes-view',
  templateUrl: './informes-view.component.html',
  styleUrls: ['./informes-view.component.css']
})

export class InformesViewComponent {

  data: any;
  
  ngOnInit() {
      this.data = {
          labels: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio'],
          datasets: [
              {
                  label: 'Stock',
                  backgroundColor: '#42A5F5',
                  borderColor: '#1E88E5',
                  data: [65, 59, 80, 81, 56, 55, 40]
              },
              {
                  label: 'Categoria',
                  backgroundColor: '#9CCC65',
                  borderColor: '#7CB342',
                  data: [28, 48, 40, 19, 86, 27, 90]
              }
          ]
      }
 

      
  }
}
