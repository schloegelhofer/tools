import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-upload-profile-picture',
  templateUrl: './upload-profile-picture.component.html',
  styleUrls: ['./upload-profile-picture.component.scss']
})
export class UploadProfilePictureComponent {
    selectedFile: File | null = null;
    selectedFileUrl: string | ArrayBuffer | null = null;

    constructor(private http: HttpClient) { }

    onFileSelected(event: any): void {
      const file: File = event.target.files[0];
      if (file) {
        this.selectedFile = file;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.selectedFileUrl = reader.result;
        };
      }
    }

    uploadProfilePicture(): void {
      if (!this.selectedFile) {
        return;
      }
      const formData = new FormData();
      formData.append('profilePicture', this.selectedFile, this.selectedFile.name);

      this.http.post<any>('YOUR_BACKEND_UPLOAD_ENDPOINT', formData)
        .subscribe(
          (response) => {
            console.log('Profilbild hochgeladen: ', response);
            // Hier kannst du die Benutzerdaten aktualisieren oder andere Aktionen durchführen
          },
          (error) => {
            console.error('Fehler beim Hochladen des Profilbildes: ', error);
          }
        );
    }
  }
