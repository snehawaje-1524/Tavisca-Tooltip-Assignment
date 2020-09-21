var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, customElement, LitElement, property } from 'lit-element';
import styles from './tooltip-css';
let OrxeTooltip = class OrxeTooltip extends LitElement {
    constructor() {
        super(...arguments);
        this.text = 'The hotels label is used for showing required information of available hotels in selected area.';
    }
    render() {
        return html `
    <div class="tooltip">
      <lable>Hotels</label>
      <orxe-icon icon="ic-information" aria-label="information">
      </orxe-icon>
      <div class="tooltip-text">${this.text}</div>
    </div>
    `;
    }
};
OrxeTooltip.styles = styles;
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], OrxeTooltip.prototype, "text", void 0);
OrxeTooltip = __decorate([
    customElement('orxe-tooltip')
], OrxeTooltip);
export default OrxeTooltip;
