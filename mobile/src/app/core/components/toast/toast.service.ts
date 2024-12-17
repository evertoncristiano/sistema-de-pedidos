import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Toast } from "./toast";

@Injectable({ providedIn: 'root' })
export class ToastService {
    private toastSource = new BehaviorSubject<Toast | undefined>(undefined);
    toast = this.toastSource.asObservable();

    show(message: string, durationInMilliseconds: number = 3000) {
        this.toastSource.next({ message, durationInMilliseconds });
    }
}