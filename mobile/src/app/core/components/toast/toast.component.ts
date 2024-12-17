import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ToastService } from './toast.service';
import { Toast } from './toast';

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
})
export class ToastComponent {
    constructor(private toastController: ToastController, private toastService: ToastService) {
        this.toastService.toast.subscribe((toast: Toast | undefined) => {
            if (toast) {
                this.show(toast.message, toast.durationInMilliseconds)
            }
        });
    }

    async show(message: string, durationInMilliseconds = 3000) {
        const toast = await this.toastController.create({
            message: message,
            duration: durationInMilliseconds,
            position: 'bottom',
        });

        await toast.present();
    }
}
