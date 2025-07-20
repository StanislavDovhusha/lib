import { describe, it, expect, vi } from 'vitest';
import { EventEmitter } from '../index';

describe('EventEmitter', () => {
  it('should emit values to subscribers', () => {
    const emitter = new EventEmitter<string>();
    const callback = vi.fn();

    emitter.subscribe(callback);
    emitter.emit('Hello');

    expect(callback).toHaveBeenCalledWith('Hello');
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should support unsubscribe', () => {
    const emitter = new EventEmitter<number>();
    const callback = vi.fn();
    const sub = emitter.subscribe(callback);

    emitter.emit(1);
    sub.unsubscribe();
    emitter.emit(2);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should support subscribeOnce', () => {
    const emitter = new EventEmitter<number>();
    const callback = vi.fn();

    emitter.subscribeOnce(callback);
    emitter.emit(1);
    emitter.emit(2);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(1);
  });
});
