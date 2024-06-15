import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Hod_ReviewService {

    private apiUrl = 'QAMS_API';

    constructor(private http: HttpClient) { }

}