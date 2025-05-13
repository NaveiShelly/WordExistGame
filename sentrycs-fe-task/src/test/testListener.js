// Your MyActionListener class
class MyActionListener {
  constructor() {
    this.actionListeners = new Map();
  }

  registerListener(action, listener) {
    if (!this.actionListeners.has(action)) {
      this.actionListeners.set(action, []);
    }
    this.actionListeners.get(action).push(listener);
  }

  removeListener(action) {
    this.actionListeners.delete(action);
  }

  emit(action, data) {
    if (!this.actionListeners.has(action)) {
      throw new Error(`Can't emit an event. Event "${action}" doesn't exist.`);
    }
    const listeners = this.actionListeners.get(action);
    listeners.forEach((fn) => fn(data));
  }
}

// ---------------------------
// TEST CASE (from the PDF)
// ---------------------------

const actionListener = new MyActionListener();

actionListener.registerListener("PRINT", (data) =>
  console.log(`Don't tell me what I ${data} or ${data}'t do`)
);

actionListener.registerListener("PRINT", (data) =>
  console.log(`I eat pickles right of the ${data}`)
);

actionListener.emit("PRINT", "Can");

actionListener.removeListener("PRINT");

try {
  actionListener.emit("PRINT", "Can");
} catch (err) {
  console.error("Caught error:", err.message);
}
