
import {Injectable} from '@angular/core';
import {Http ,Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class GetArtistService{

private _url:string;

constructor(private _http:Http){}

getArtistDetails(artistName:string,tracks:string){
this._url="http://itunes.apple.com/search?term="+artistName+"&limit="+tracks;

 return this._http.get(this._url)
        .map((response:Response)=> response.json())
        .catch(this._errorHandler);

    }
    _errorHandler(error : Response){
       console.error(error);
       return Observable.throw(error||"Server Error")
    }
}