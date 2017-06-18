import {Injectable} from '@angular/core';
import {Animal} from './animal.class';
import {Colour} from './colour.class';

@Injectable()
export class AnimalService {
    getColours() {
        return [
            new Colour('', 'Choose colours'),
            new Colour('blue', 'Blue'),
            new Colour('green', 'Green'),
            new Colour('red', 'Red'),
            new Colour('black', 'Black'),
            new Colour('brown', 'Brown')
        ]
    };

    getAnimals(): Animal[] {
        return [
            new Animal('bear', 'Bear', false),
            new Animal(Animal.tiger, 'Tiger', false),
            new Animal('snake', 'Snake', false),
            new Animal('donkey', 'Donkey', false)
        ];
    }
}