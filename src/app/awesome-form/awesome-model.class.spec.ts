import {AwesomeModel} from "./awesome-model.class";
import {Colour} from "./colour.class";
import {Animal} from "./animal.class";

describe('A awesome form model', function () {
    let model: AwesomeModel;

    beforeEach(() => {
        let colours = [
            new Colour('', 'Choose colours'),
            new Colour('blue', 'Blue')
        ];
        let animals = [
            new Animal('bear', 'Bear', true),
            new Animal(Animal.tiger, 'Tiger', true),
            new Animal('snake', 'Snake', false),
            new Animal('donkey', 'Donkey', false)
        ];
        model = new AwesomeModel('stefanos.aslanidis@googlemail.com', '123456789', 'blue', colours, animals, 'Malaysian Tiger');
    });

    it('should be valid', () => {
        expect(model.isValid).toBe(true);
    });

    it('should be invalid with only one animal', () => {
        model.animals[0].isSelected = false;
        expect(model.isValid).toBe(false);
    });

    it('should be invalid with a tiger and no tiger type', () => {
        model.typeOfTiger = '';
        expect(model.isValid).toBe(false);
    });
});