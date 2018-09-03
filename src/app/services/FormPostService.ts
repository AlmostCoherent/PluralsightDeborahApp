import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "../../../node_modules/rxjs/Observable";

import { Employee } from "../models/employee.model";

@Injectable()

export class FormPosterService {

    extractLanguages(res: Response): any {
        let body = res.json();
        return body.data || { };
    }
    
    handleError(error: any): any {
        return Observable.throw(error.statusText);
    }

    extractData(res: Response) {
        let body = res.json();
        return body.fields || { };
    }

    getLanguages() : Observable<any> {
        return this.http.get('http://localhost:3100/getlanguages')
                    .map(this.extractLanguages)
                    .catch(this.handleError)
    }

    postEmployeeForm(employee: Employee): Observable<any> {
        let body = JSON.stringify(employee).toString();
        let headers = new Headers({ 'Content-Type' : 'application/json'});
        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://localhost:3100/', body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    constructor(private http: Http) {
    }

}