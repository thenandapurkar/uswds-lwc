import { LightningElement, api } from 'lwc';

export default class UswdsBannerLwc extends LightningElement {
    // Allow parent components to control expanded state
    @api expanded = false;

    _isExpanded = false;

    connectedCallback() {
        this._isExpanded = this.expanded;
    }

    get isExpanded() {
        return this._isExpanded;
    }

    get ariaExpanded() {
        return this._isExpanded ? 'true' : 'false';
    }

    handleToggle() {
        this._isExpanded = !this._isExpanded;
    }
}
