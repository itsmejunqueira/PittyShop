import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToastEvent } from '../models/toast-event';
import { EventTypes } from '../../shared/models/event-types';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toastEvents: Observable<ToastEvent>;
  private _toastEvents = new Subject<ToastEvent>();

  constructor() {
    this.toastEvents = this._toastEvents.asObservable();
  }

  /**
   * Show success toast notification.
   * @param title Toast title
   * @param message Toast message
   */
  showSuccessToast(title: string, message: string) {
    this._toastEvents.next({
      message,
      title,
      type: EventTypes.Success,
    });
  }

  /**
   * Show info toast notification.
   * @param title Toast title
   * @param message Toast message
   */
  showInfoToast(title: string, message: string) {
    this._toastEvents.next({
      message,
      title,
      type: EventTypes.Info,
    });
  }

  /**
   * Show warning toast notification.
   * @param title Toast title
   * @param message Toast message
   */
  showWarningToast(title: string, message: string) {
    this._toastEvents.next({
      message,
      title,
      type: EventTypes.Warning,
    });
  }

  /**
   * Show error toast notification.
   * @param title Toast title
   * @param message Toast message
   */
  showErrorToast(title: string, message: string) {
    this._toastEvents.next({
      message,
      title,
      type: EventTypes.Error,
    });
  }

  // Lembrete de uso do toast 
  
  // showToast(type: EventTypes) {
  //   switch (type) {
  //     case EventTypes.Success:
  //       this.toastService.showSuccessToast('Success toast title', 'This is a success toast message.');
  //       break;
  //     case EventTypes.Warning:
  //       this.toastService.showWarningToast('Warning toast title', 'This is a warning toast message.');
  //       break;
  //     case EventTypes.Error:
  //       this.toastService.showErrorToast('Error toast title', 'This is an error toast message.');
  //       break;
  //     default:
  //       this.toastService.showInfoToast('Info toast title', 'This is an info toast message.');
  //       break;
  //   }
  // }
}
