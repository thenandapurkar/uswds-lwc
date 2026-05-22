import { LightningElement, api } from 'lwc';

const VALID_VARIANTS = ['cyan', 'green', 'purple'];

export default class UswdsSummaryBoxLwc extends LightningElement {
    @api heading = 'Key information';
    @api variant = 'cyan';
    @api items = '';
    @api mode = 'edit';
    @api richContent = '';

    get boxClass() {
        const v = VALID_VARIANTS.includes(this.variant) ? this.variant : 'cyan';
        return `summary-box summary-box--${v}`;
    }

    get isEditMode() {
        return this.mode === 'edit';
    }

    // Use richContent if set, otherwise convert legacy items to HTML bullets
    get richTextValue() {
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

    handleRichTextChange(event) {
        this.richContent = event.target.value;
    }
}
