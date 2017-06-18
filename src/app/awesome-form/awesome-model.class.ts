import {Animal} from './animal.class';
import {Colour} from './colour.class';

export class AwesomeModel {

    constructor(public email: string,
                public password: string,
                public colour: string,
                public colours: Colour[],
                public animals: Animal[],
                public typeOfTiger: string) {
    };

    get isAnimalTiger(): boolean {
        return this.animals.filter(animal => animal.value == Animal.tiger && animal.isSelected).length == 1;
    }

    get isTypeOfTigerEmpty(): boolean {
        return this.typeOfTiger.length < 1;
    }

    get hasAtLeastTwoAnimals(): boolean {
        return this.animals.filter(animal => animal.isSelected).length > 1;
    }

    get isValid(): boolean {
        return this.hasAtLeastTwoAnimals && !(this.isAnimalTiger && this.isTypeOfTigerEmpty);
    }
}