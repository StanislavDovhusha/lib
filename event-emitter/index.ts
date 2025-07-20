import { ISubscription, IObservable } from "./src/common";
import { EventEmitter } from "./src/event-emitter";
import { BehaviorEventEmitter } from "./src/behavior-event-emitter";

export default {
  EventEmitter,
  BehaviorEventEmitter,
}

export {
  EventEmitter,
  BehaviorEventEmitter,
  IObservable,
  ISubscription
};