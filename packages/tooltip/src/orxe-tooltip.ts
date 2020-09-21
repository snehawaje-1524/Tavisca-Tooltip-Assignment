import { html, customElement, LitElement, property } from 'lit-element';
import styles from './tooltip-css';
// import "@orxe-components/icons";
// import "@orxe-components/icon";

@customElement('orxe-tooltip')
export default class OrxeTooltip extends LitElement {

  @property({ type: String })
  text = 'The hotels label is used for showing required information of available hotels in selected area.'

  render() {
    return html`
    <div class="tooltip">
      <lable>Hotels</label>
      <orxe-icon icon="ic-information" aria-label="information">
      </orxe-icon>
      <div class="tooltip-text">${this.text}</div>
    </div>
    `;
  }

  static styles = styles;
}
