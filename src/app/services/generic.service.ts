import {Inject, Injectable, InjectionToken} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, Observable, of, throwError} from "rxjs";
import * as path from "path";

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  // objet de type T specifique a chaque service
  T: any;

  // objet dto de type Tdto specifique a chaque service
  Tdto: any;

  // // bout d'url specifique a chaque service
  // public serviceUrl = '';

  // url de l'api
  url = environment.apiUrl;

  path = '';

  // entetes de l'url
  httpOptions = {
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    //   'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    // }
  }

  // @Inject(new InjectionToken('')) path: string

  constructor(public http: HttpClient) {  }


  // methode generique pour recuperer tous les objets de type T
  getAll(): Observable<typeof this.T []> {
    return this.http.get<typeof this.T []>(this.url, this.httpOptions)
      .pipe(
        catchError(this.handleError<typeof this.T []>('getAll', []))
      )
  }

  // methode generique pour recuperer un objet de type T par son id
  getById(id: number): Observable<typeof this.T> {
    return this.http.get<typeof this.T>(`${this.url}/${id}`)
      .pipe(
        catchError(this.handleError<typeof this.T>('getById', null))
      );
  }


  // methode generique pour creer un objet de type T
  create(obj: typeof this.Tdto): Observable<typeof this.T> {
    return this.http.post<typeof this.T>(this.url, obj)
      .pipe(
        catchError(this.handleError<typeof this.T>('create', null))
      )
  }


  // methode generique pour modifier un objet de type T
  update(obj: typeof this.T): Observable<typeof this.T> {
    return this.http.put<typeof this.T>(this.url, obj)
      .pipe(
        catchError(this.handleError<typeof this.T>('update', null))
      )
  }


  // methode generique pour supprimer un objet de type T
  delete(id: number): Observable<any> {
    return this.http.delete<typeof this.T>(`${this.url}/${id}`)
      .pipe(
        catchError(this.handleError<any>('delete', null))
      )
  }

  // handleError(error: HttpErrorResponse) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     errorMessage = error.error.message; // message d'erreur cote client
  //   } else {
  //     errorMessage = `Code d'erreur: ${error.status}\nMessage: ${error.message}`;// message d'erreur cote serveur
  //   }
  //   window.alert(errorMessage);
  //   return throwError(errorMessage);
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          errorMessage = error.error.message; // message d'erreur cote client
        }
        else {
          errorMessage = `Code d'erreur: ${error.status}\nMessage: ${error.message}`;// message d'erreur cote serveur
        }

        console.log({
          // errorMessages: errorMessage,
          url: this.url,
          error: error
        });

      return of(result as T);
    };
  }

}
