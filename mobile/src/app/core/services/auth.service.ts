import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AuthService {

    getToken() {
        const token = localStorage.getItem('loginToken')

        if(token)
            return token

        return ''
    }

}