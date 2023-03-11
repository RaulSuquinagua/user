import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public goalList: any = [];
  public loadedGoalList: any = [];
  
  constructor(
    private afdb: AngularFireDatabase,
    private cartService: CartService,
  ) {



   }



  ngOnInit() {

    this.afdb.list('/products').snapshotChanges().subscribe((data: any) => {
      let tmp = [];
      data.forEach(product => {
        let p = product.payload.val();
        tmp.push({ key: product.key, ...product.payload.val() });
      });
      this.goalList = tmp;
      this.loadedGoalList = tmp;
    });
    
  }

  initializeItems(): void{
    this.goalList = this.loadedGoalList;
  }

  filterList(evt){
    this.initializeItems();
    const searchTerm = evt.srcElement.value;
    if(!searchTerm){
      return;
    }
    this.goalList = this.goalList.filter(currentGoal => {
      if(currentGoal.name && searchTerm){
        if(currentGoal.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){
          return true;
          
        }
        return false;
      }
    });
    
  }

  addToCart(product) {
    this.cartService.add(product);
  };

}
