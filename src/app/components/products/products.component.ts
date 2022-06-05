import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of, startWith,map } from 'rxjs';
import { Datastate } from 'src/app/state/product.state';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/services/products.service';
import { AppDataState } from 'src/app/state/product.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$:Observable<AppDataState<Product[]>> | null=null;
 readonly Datastate=Datastate
  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
   
  }
  //get all products controller
getAllProducts(){
this.products$=this.productsService.getAllProducts().pipe(
  map(data=>{
    console.log(data);
    
   return ({dataState : Datastate.LOADED,data:data})}),

  startWith({dataState:Datastate.LOADING}),
  
  catchError(err=>of({dataState:Datastate.ERROR,errorMessage:err.message}))
); 

}

  //get all products selected controller
getSelectedProducts(){
  this.products$=this.productsService.getSelectedProducts().pipe(
    map(data=>({dataState : Datastate.LOADED,data:data})),
  
    startWith({dataState:Datastate.LOADING}),
    
    catchError(err=>of({dataState:Datastate.ERROR,errorMessage:err.message}))
  ); 

  }
  
    //get all products available controller
  getAvailableProducts(){
    this.products$=this.productsService.getAvailableProducts().pipe(
      map(data=>({dataState : Datastate.LOADED,data:data})),
    
      startWith({dataState:Datastate.LOADING}),
      
      catchError(err=>of({dataState:Datastate.ERROR,errorMessage:err.message}))
    ); 
     
         
    }
    onSearch(dataForm:any){
      this.products$=this.productsService.onSearch(dataForm.keyword).pipe(
        map(data=>({dataState : Datastate.LOADED,data:data})),
      
        startWith({dataState:Datastate.LOADING}),
        
        catchError(err=>of({dataState:Datastate.ERROR,errorMessage:err.message}))
      );
    }
  
  }

