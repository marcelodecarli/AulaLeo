"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NobleHouse = void 0;
class NobleHouse {
    constructor(nameHouse, houseMotto) {
        this.listHeir = [];
        this.nameHouse = nameHouse,
            this.houseMotto = houseMotto;
    }
    methodHeir(heir) {
        this.listHeir.push(heir);
    }
    methodInformationHouse() {
        console.log(`Nome da casa: ${this.nameHouse} Lema da casa: ${this.houseMotto} Herdeiros:`);
        console.log(this.listHeir);
    }
}
exports.NobleHouse = NobleHouse;
//# sourceMappingURL=NobleHouse.js.map