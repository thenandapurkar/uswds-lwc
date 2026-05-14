import { LightningElement, api } from 'lwc';

export default class UswdsEmergencyBannerLwc extends LightningElement {
    @api heading = 'No active emergencies';
    @api message = '';
    @api isEmergency = false;
    @api height = '';

    get bannerClass() {
        return this.isEmergency
            ? 'site-alert site-alert--emergency'
            : 'site-alert site-alert--info';
    }

    get bannerStyle() {
        if (!this.height) return '';
        return `min-height: ${this.height}px`;
    }
}
