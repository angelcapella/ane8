import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit{

  products : products[]= [
    {
      nombre:'angel',
      categoria:'1',
      cantidad:5
    },
    {
      nombre:'capella',
      categoria:'2',
      cantidad:10
    },
    {
      nombre:'ruiz',
      categoria:'2',
      cantidad:20
    }
    
  ];

  ngOnInit() {
  }

}



