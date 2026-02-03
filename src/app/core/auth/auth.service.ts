import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface AuthUser {
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private readonly loggedInSubject = new BehaviorSubject<boolean>(false);
  private readonly userSubject = new BehaviorSubject<AuthUser | null>(null);

  readonly isLoggedIn$: Observable<boolean> = this.loggedInSubject.asObservable();
  readonly user$: Observable<AuthUser | null> = this.userSubject.asObservable();

  login(user?: AuthUser): void {
    console.log(user);

    this.loggedInSubject.next(true);
    this.userSubject.next(user ?? { firstName: 'first', lastName: 'last' });
  }

  logout(): void {
    this.loggedInSubject.next(false);
    this.userSubject.next(null);
  }

  // optional, praktisch für Guards etc.
  get isLoggedInValue(): boolean {
    return this.loggedInSubject.value;
  }
}

