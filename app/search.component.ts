import { Component } from '@angular/core';
import {GetArtistService} from './get-artist.service'


@Component({
    moduleId:module.id,
    selector: 'search',
    templateUrl: `search.html`,
    providers:[GetArtistService]
  })
  export class SearchComponent {
    response ={};
    photo:string="http://is4.mzstatic.com/image/thumb/Video60/v4/0e/c8/a4/0ec8a439-7b69-4509-d391-a51c3113c918/source/100x100bb.jpg";
    
    errorMsg:string;
    showSearchorData:boolean=true;
    constructor(private _artistService : GetArtistService){}

    onClick(name,tracks){
     this._artistService.getArtistDetails(name,tracks)
     .subscribe(resArtistData => this.response=resArtistData,
    resArtistError =>this.errorMsg=resArtistError
   );
   this.showSearchorData=false;
    }

    reset(){
      this.showSearchorData=true;
    }
   }