import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getAll(path: string) {
    let url = this.getUrl(path);

    return this.httpClient.get(url);
  }

  getOne(path: string, id: string) {
    let url = this.getUrl(path, id)

    return this.httpClient.get(url, { params: this.getDefaultParams() })
  }

  post(path: string, object: object) {
    let url = this.getUrl(path)
    return this.httpClient.post(url, object, { params: this.getDefaultParams() })
  }

  put(path: string, id: string, object: object) {
    let url = this.getUrl(path, id)
    return this.httpClient.put(url, object, { params: this.getDefaultParams() })
  }

  private getDefaultParams() {
    let params = new HttpParams()
    params.append('Authorization', this.authService.getToken())

    return params
  }

  private getUrl(path: string, id: string = '') {
    let url = environment.api.url;

    url += `/${path}`

    if (id != '')
      url += `/${id}`

    return url;
  }
}