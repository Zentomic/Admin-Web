//auth.service.ts
/*
 Custom login with Auth0
*/
import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

// Avoid name not found warnings
declare var auth0: any;

@Injectable()
export class Auth {

  // Configure Auth0
  auth0 = new auth0.WebAuth({
    domain: 'zentomic.auth0.com',
    clientID: 'SoWV58W6HVqkJDYkP84YB5mmSLGFGNBL',
    // specify your desired callback URL
    // have to have real link for call back
    callbackURL: 'http://localhost:4300',
    redirectUri: 'https://pwdlessdemo.auth0.com/login/callback',
    responseType: 'token id_token'
  });

  constructor(private router: Router) { 
  }
  
  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        this.router.navigate(['/home']);
      } else if (authResult && authResult.error) {
        alert('Error: ' + authResult.error);
      }
    });
  }
  /**
   * login with AUTH0 Service
   * @param username
   * @param password
   */
  public login(username: string, password: string): void {
    this.auth0.client.login({
      realm: 'Username-Password-Authentication',
      username,
      password
    }, (err, authResult) => {
      if (err) {
        alert('Error: ' + err.description);
        return;
      }
      if (authResult && authResult.idToken && authResult.accessToken) {
        this.setUser(authResult);
        this.router.navigate(['/home']);
      }
    });
  }

  public signup(email, password): void {
    this.auth0.redirect.signupAndLogin({
      connection: 'Username-Password-Authentication',
      email,
      password,
    }, function (err) {
      if (err) {
        alert('Error: ' + err.description);
      }
    });
  }

  public loginWithGoogle(): void {
    this.auth0.authorize({
      connection: 'google-oauth2',
      
    });
  }

  public isAuthenticated(): boolean {
    // Check whether the id_token is expired or not
    return tokenNotExpired();
  }

  public logout(): void {
    // Remove token from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
  }

  private setUser(authResult): void {
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
  }
}