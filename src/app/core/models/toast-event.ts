import { EventTypes } from '../../shared/models/event-types';

export interface ToastEvent {
  type: EventTypes;
  title: string;
  message: string;
}
