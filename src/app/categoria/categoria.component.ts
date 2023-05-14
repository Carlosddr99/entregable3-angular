import { Component , OnInit  } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit{

  products:any[]= [];
  categoria:any = "";

  constructor(private service:FetchDataService, private router: Router, private params: ActivatedRoute) {}

  ngOnInit(){
    this.categoria = this.params.snapshot.paramMap.get('categoria');
    this.service.getProductsCategorie(this.categoria).subscribe((data:any)=>{
      this.products=data;
    });

  } 

  selectProduct(productId:number){
    this.router.navigate(['/product/'+productId])
  }
}
