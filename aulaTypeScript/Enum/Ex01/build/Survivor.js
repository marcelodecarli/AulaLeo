"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Survivor = void 0;
const Level_1 = require("./Level");
class Survivor {
    constructor(level = Level_1.Level.BLUE) {
        this.level = level;
    }
    getLevel() {
        return this.level;
    }
    levelUp() {
        const nextLevel = this.getNextLevel();
        if (nextLevel !== null) {
            this.level = nextLevel;
            return this.level;
        }
        else {
            console.log("Não há próximo nível disponível.");
            return null;
        }
    }
    getNextLevel() {
        switch (this.level) {
            case Level_1.Level.BLUE:
                return Level_1.Level.YELLOW;
            case Level_1.Level.YELLOW:
                return Level_1.Level.ORANGE;
            case Level_1.Level.ORANGE:
                return Level_1.Level.RED;
            case Level_1.Level.RED:
                return null;
        }
    }
}
exports.Survivor = Survivor;
//# sourceMappingURL=Survivor.js.map