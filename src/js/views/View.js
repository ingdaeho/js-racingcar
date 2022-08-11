export default class View {
  constructor(element) {
    this.element = element;
    this.originalDisplay = this.element.style.display || '';
  }

  hide() {
    this.element.style.display = 'none';
    return this;
  }

  show() {
    this.element.style.display = this.originalDisplay;
    return this;
  }

  on(eventName, handler) {
    this.element.addEventListener(eventName, handler, false);
    return this;
  }

  emit(eventName, data) {
    const event = new CustomEvent(eventName, { detail: data });
    this.element.dispatchEvent(event);
    return this;
  }
}
