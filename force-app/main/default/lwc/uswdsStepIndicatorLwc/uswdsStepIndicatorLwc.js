import { LightningElement, api } from 'lwc';

const VALID_VARIANTS = ['default', 'centered', 'counters', 'counters-sm'];

export default class UswdsStepIndicatorLwc extends LightningElement {
    @api variant = 'default';
    @api currentStep = 1;
    @api labels = '';

    get safeVariant() {
        return VALID_VARIANTS.includes(this.variant) ? this.variant : 'default';
    }

    get indicatorClass() {
        const classes = ['step-indicator'];
        const v = this.safeVariant;
        if (v === 'centered') classes.push('step-indicator--centered');
        if (v === 'counters') classes.push('step-indicator--counters');
        if (v === 'counters-sm') classes.push('step-indicator--counters step-indicator--counters-sm');
        return classes.join(' ');
    }

    get showCounters() {
        return this.safeVariant === 'counters' || this.safeVariant === 'counters-sm';
    }

    get parsedLabels() {
        if (!this.labels) return [];
        return this.labels.split(';').map(l => l.trim()).filter(l => l.length > 0);
    }

    get totalSteps() {
        return this.parsedLabels.length;
    }

    get currentLabel() {
        const idx = Number(this.currentStep) - 1;
        return this.parsedLabels[idx] || '';
    }

    get steps() {
        const current = Number(this.currentStep);
        const total = this.parsedLabels.length;
        const isLast = (i) => i === total - 1;

        return this.parsedLabels.map((label, i) => {
            const number = i + 1;
            const isComplete = number < current;
            const isCurrent = number === current;

            let segState = 'incomplete';
            if (isComplete) segState = 'complete';
            if (isCurrent) segState = 'current';

            return {
                id: `step-${number}`,
                number,
                label,
                isComplete,
                isCurrent,
                segmentClass: `step-segment step-segment--${segState}`,
                barClass: `step-bar step-bar--${segState}`,
                counterClass: `step-counter step-counter--${segState}`,
                connectorClass: isLast(i) ? 'step-connector step-connector--hidden' : `step-connector step-connector--${segState}`,
                labelClass: isCurrent ? 'step-label step-label--current' : 'step-label'
            };
        });
    }
}
