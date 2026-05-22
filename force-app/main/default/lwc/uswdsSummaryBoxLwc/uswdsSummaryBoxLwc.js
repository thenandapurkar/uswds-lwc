import { LightningElement, api } from 'lwc';

const VALID_VARIANTS = ['cyan', 'green', 'purple'];

export default class UswdsSummaryBoxLwc extends LightningElement {
    @api heading = 'Key information';
    @api variant = 'cyan';
    @api items = '';

    _hasSlotContent = false;

    get boxClass() {
        const v = VALID_VARIANTS.includes(this.variant) ? this.variant : 'cyan';
        return `summary-box summary-box--${v}`;
    }

    // Show fallback bullets only when no rich text is slotted in
    get showFallbackList() {
        return !this._hasSlotContent && this.bulletItems.length > 0;
    }

    get bulletItems() {
        if (!this.items) return [];
        return this.items
            .split(';')
            .map(line => line.trim())
            .filter(line => line.length > 0)
            .map((text, index) => ({ id: `item-${index}`, text }));
    }

    handleSlotChange() {
        const slot = this.template.querySelector('slot');
        if (slot) {
            this._hasSlotContent = slot.assignedElements().length > 0;
        }
    }
}
