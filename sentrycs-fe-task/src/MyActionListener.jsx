export default class MyActionListener {
  constructor() {
    // actionListeners is a map from actionName => array of listeners
    this.actionListeners = new Map();
  }

  // Register a listener function to a named action
  registerListener(action, listener) {
    if (!this.actionListeners.has(action)) {
      this.actionListeners.set(action, []);
    }
    this.actionListeners.get(action).push(listener);
  }

  // Remove all listeners for a given action
  removeListener(action) {
    this.actionListeners.delete(action);
  }

  // Trigger all listeners for the action, or throw if not registered
  emit(action, data) {
    if (!this.actionListeners.has(action)) {
      throw new Error(`Can't emit an event. Event "${action}" doesn't exist.`);
    }
    const listeners = this.actionListeners.get(action);
    listeners.forEach((fn) => fn(data));
  }
}
