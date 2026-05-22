import { LightningElement, api } from 'lwc';

const VALID_VARIANTS = ['cyan', 'green', 'purple'];

export default class UswdsSummaryBoxLwc extends LightningElement {
    @api heading = 'Key information';
    @api variant = 'cyan';
    @api items = '';
    @api richContent = '';

    get boxClass() {
        const v = VALID_VARIANTS.includes(this.variant) ? this.variant : 'cyan';
        return `summary-box summary-box--${v}`;
    }

    // Use richContent if available, otherwise fall back to legacy items
    get displayValue() {
        if (this.richContent) {
            return this.richContent;
        }
        if (this.items) {
            const bullets = this.items
                .split(';')
                .map(line => line.trim())
                .filter(line => line.length > 0)
                .map(text => `<li>${text}</li>`)
                .join('');
            return `<ul>${bullets}</ul>`;
        }
        return '';
    }
}
