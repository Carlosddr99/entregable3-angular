import { Component, OnInit  } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {

  categorias: any[]=[]

  constructor(private service:FetchDataService, private router: Router) {}

  ngOnInit(){
    this.service.getCategories().subscribe((data:any)=>{
      this.categorias = data;
    });
  } 

  selectCategory(categoria:String){
    this.router.navigate(['/category/'+categoria])
  }
}
