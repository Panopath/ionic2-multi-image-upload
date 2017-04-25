import {Component, ViewChild} from '@angular/core';
import {MultiImageUpload} from "../components/multi-image-upload/multi-image-upload";
import {AlertController, ToastController} from "ionic-angular";

@Component({
    templateUrl: 'app.html'
})
export class Ionic2MultiImageUploadDemo {
    @ViewChild(MultiImageUpload) multiImageUpload: MultiImageUpload;
    protected uploadFinished = false;


    constructor(private alertCtrl: AlertController, private toastCtrl: ToastController) {

    }

    protected submit() {
        if (this.multiImageUpload.images.length == 0) {
            this.showToast("Please select at least 1 photo");
            return;
        }

        this.multiImageUpload.uploadImages().then((images) => {
            this.showToast("Upload successful, view console for details");
            this.uploadFinished = true;
            console.dir(images);
        }).catch(() => {
        });
    }

    protected cancel() {
        this.confirm('Are you sure to cancel?').then(value => {
            if (value) {
                this.multiImageUpload.abort();
            }
        })
    }

    private showToast(text: string) {
        this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'bottom'
        }).present();
    }

    private confirm(text: string) {
        return new Promise(
            (resolve) => {
                this.alertCtrl.create({
                    message: text,
                    buttons: [
                        {
                            text: "No",
                            role: 'cancel',
                            handler: () => {
                                resolve(false);
                            }
                        },
                        {
                            text: "Yes",
                            handler: () => {
                                resolve(true);
                            }
                        }
                    ]
                }).present();
            }
        );
    }
}
