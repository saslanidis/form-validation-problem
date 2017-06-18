export class Animal {

    static get tiger(): string {
        return 'tiger';
    }

    constructor(public value: string,
                public display: string,
                public isSelected: boolean) {
    };
}
