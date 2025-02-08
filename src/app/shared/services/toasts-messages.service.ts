import { Injectable } from '@angular/core'
import Swal, { SweetAlertIcon } from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class ToastsMessagesService {
  Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: toast => {
      toast.onmouseenter = Swal.stopTimer
      toast.onmouseleave = Swal.resumeTimer
    }
  })

  showToast(state: SweetAlertIcon, message: string) {
    this.Toast.fire({
      icon: state,
      title: message
    })
  }
}
