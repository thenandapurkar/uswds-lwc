import { LightningElement, api } from 'lwc';

export default class UswdsServiceTileLwc extends LightningElement {
    @api label = '';
    @api url = '#';
    @api icon = 'service';
    @api compact = false;

    get tileClass() {
        return this.compact ? 'service-tile service-tile--compact' : 'service-tile';
    }

    get isReport()      { return this.icon === 'report'; }
    get isService()     { return this.icon === 'service'; }
    get isApplication() { return this.icon === 'application'; }
    get isComplaint()   { return this.icon === 'complaint'; }
    get isPermit()      { return this.icon === 'permit'; }
    get isLibrary()     { return this.icon === 'library'; }
    get isWater()       { return this.icon === 'water'; }
    get isParking()     { return this.icon === 'parking'; }
    get isCouncil()     { return this.icon === 'council'; }
    get isBuilding()    { return this.icon === 'building'; }
    get isParks()       { return this.icon === 'parks'; }
    get isAnimal()      { return this.icon === 'animal'; }
    get isPayment()     { return this.icon === 'payment'; }
    get isHealth()      { return this.icon === 'health'; }
    get isElection()    { return this.icon === 'election'; }
    get isTrash()       { return this.icon === 'trash'; }
}
