import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DocumentService {
    private apiUrl = 'QAMS_API';

    constructor(private http: HttpClient) { }

    getAllDocuments(initiativeId: number, initType: string): Observable<any> {
        return this.http.get(this.apiUrl + `/newdocument/getdocbyparent?p_parentId=${initiativeId}&p_Type=${initType}`);
    }

    uploadAndSaveInfo(formData: FormData) {
        return this.http.post(this.apiUrl + '/newdocument/uploadandsave', formData, {
            reportProgress: true,
            observe: 'events'
        });
    }
}