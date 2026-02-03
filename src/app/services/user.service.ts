import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:80/api/save-user';
  // Pfad zum PHP-Endpunkt über den Proxy


  constructor(private http: HttpClient) { }

  // Methode zum Registrieren eines Benutzers
  registerUser(userData: any): Observable<any> {
    // HTTP-Post-Anfrage an den PHP-Endpunkt senden
    return this.http.post<any>(this.apiUrl, userData);
  }
}
