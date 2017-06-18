import {Component} from '@angular/core';
import {AwesomeModel} from './awesome-model.class';
import {AnimalService} from './animal.service';

@Component({
    selector: 'awesome-form',
    templateUrl: './awesome-form.component.html',
    styleUrls: ['./awesome-form.component.css'],
    providers: [AnimalService]
})

export class AwesomeFormComponent {
    constructor(private animalService: AnimalService) {
    };

    model = new AwesomeModel('', '', '', this.animalService.getColours(), this.animalService.getAnimals(), '');

    submitForm(awesomeForm) {
        if (!awesomeForm.valid || !this.model.isValid) {
            return false;
        }
    }
}