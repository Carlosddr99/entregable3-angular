import { Component , OnInit  } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit{

  product:any = null;

  constructor(private service:FetchDataService, private params: ActivatedRoute) {}

  ngOnInit(){
    const productId : any = this.params.snapshot.paramMap.get('id');
    this.service.getProduct(productId).subscribe((data:any)=>{
      this.product=data;
    });
  } 

}
