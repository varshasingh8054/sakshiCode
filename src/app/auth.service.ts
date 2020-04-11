import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "./../environments/environment";

@Injectable()
export class AuthService {
  authToken: any;
  token: any;
  baseUrl = environment.test;
  constructor(private http: HttpClient) {}

  login(data) {
    return this.http
      .post(this.baseUrl + "user/login", data)
      .toPromise()
      .then(res => res);
  }

  signUp(data){
    return this.http
    .post(this.baseUrl+ "user/signUp", data)
    .toPromise()
    .then(res => res)
  }

  forgotPassword(data) {
    return this.http
      .post(this.baseUrl + "user/forgot-password", data)
      .toPromise()
      .then(res => res);
  }

  getCountries(){
    return this.http
    .get(this.baseUrl+"user/country")
    .toPromise()
    .then(res => res);
  }

  getState(country){
    return this.http
    .get(this.baseUrl + "user/state/" + country)
    .toPromise()
    .then(res => res);
  }

  getProfile(){
    console.log("access token", this.authToken);
    let headers = { headers: { Authorization:  this.authToken } };
    return this.http
    .get(this.baseUrl + "user/profile-info", headers).toPromise().then(res => res);
  }

  editProfile(data){
    let headers = { headers: { Authorization:  this.authToken } };
    console.log("access token", this.authToken);
    return this.http
    .post(this.baseUrl + "user/edit-info", data, headers).toPromise().then(res => res);
  }

  addDoctor(data){
    let headers = { headers: { Authorization:  this.authToken } };
    console.log("in service___________data",  data);
    return this.http
    .post(this.baseUrl + "user/add-doctor", data, headers).toPromise().then(res => res);
  }

  getDocList(){
    console.log("access token", this.authToken);
    return this.http
    .get(this.baseUrl + "user/doctors-list", { headers: { Authorization: this.authToken }
    }).toPromise().then(res => res);
  }

  getDetail(token){
    console.log("in service____________", token)
    return this.http
    .get(this.baseUrl + "user/signup/" + token ).toPromise().then(res => res)
  }

  deleteDoctor(email){
    let data= {}
    let headers =  { headers: { Authorization:  this.authToken } };
    console.log("email to be delted", email);
    data["email"] = email;
    console.log("data", data);
    return this.http
    .post(this.baseUrl + "user/remove-doctor", data, headers).toPromise().then(res => res);
  }

  getData(){
    console.log("in srvice");
    let headers =  { headers: { Authorization:  this.authToken } };
    return this.http
    .get(this.baseUrl + "cases/form-data",  headers).toPromise().then(res => res);
  }

  // addCase(data){
  //   let headers =  { headers: { Authorization:  this.authToken } };
  //   return this.http.post(this.baseUrl + "cases/add-cases", data, headers).toPromise().then(res => res);
  // }

  storeUserData(token: string) {
    console.log("stroing access token", token);
    localStorage.setItem("id_token", token);
    this.authToken = token;
    console.log("stored",this.authToken);
  }

 
  loadToken() {
    const token = localStorage.getItem("id_token");
    this.authToken = token;
    return localStorage.getItem("id_token");
  }

  loggedIn() {
    return this.loadToken() !== null;
  }

  logout() {
    this.authToken = null;
    localStorage.clear();
  }
}
