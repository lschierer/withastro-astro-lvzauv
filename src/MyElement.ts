import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { AsyncDirective, ChildPart, directive } from 'lit/async-directive.js';

class MyDirective extends AsyncDirective {
  private newPart: ChildPart | null = null;

  update(part: ChildPart) {
    //this.newPart = new ChildPart(part.startNode, null, part.parentNode);
    return this.render();
  }

  render() {
    return html`<div class='MDclass'>test 5</div>`;
  }
}

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  private myDirective = directive(MyDirective);

  render() {
    console.log(`in render`);
    return html`
      
      test 2 <br/>
      ${this.myDirective()}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
