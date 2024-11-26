import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getAll(path: string) {
    let url = this.getUrl(path);

    return this.httpClient.get(url);
  }

  getOne(path: string, id: string) {
    let url = this.getUrl(path, id)
    console.log('GET: ', url)

    return this.httpClient.get(url, { params: this.getDefaultParams() })
  }

  post(path: string, object: object) {
    let url = this.getUrl(path)
    console.log('POST: ', url);
    console.log('USING: ', object)

    return this.httpClient.post(url, object, { params: this.getDefaultParams() })
      .subscribe(resultado => console.log(resultado))
  }

  put(path: string, id: string, object: object) {
    let url = this.getUrl(path, id)
    console.log('PUT: ', url);
    console.log('USING: ', object)

    return this.httpClient.put(url, object, { params: this.getDefaultParams() })
      .subscribe(resultado => console.log(resultado))
  }

  private getDefaultParams() {
    let params = new HttpParams()
    params.append('Authorization', this.authService.getToken())

    return params
  }

  private getUrl(path: string, id: string = '') {
    let url = environment.apiUrl;

    url += `/${path}`

    if (id != '')
      url += `/${id}`

    return url;
  }
}