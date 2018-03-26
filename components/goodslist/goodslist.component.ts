import { Component, OnInit, Input } from '@angular/core';
import {Http,Jsonp,Headers} from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/Rx";
@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css'],

})
export class GoodslistComponent implements OnInit {

  constructor(public http:Http, public jsonp:Jsonp) { 

  }
  @Input() list:Array<any>;

  headers = new Headers({'Content-Type':'application/x-www-from-urlencoded'});
  ngOnInit() {
    // this._activeRouter.queryParams.subscribe(data=>{
    //   console.log(data);
    // })
   this.jsonp.get('http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK').subscribe(data=>{
     console.log(data['_body']);
     this.list= data['_body'];
   },err=>{
     console.log(err);
   });
  }
}
