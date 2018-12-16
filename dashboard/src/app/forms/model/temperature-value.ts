export class TemperatureValue {
    constructor(
        public id: number,
        public name: string,
        public temperature: number,
        public humidity: number,
        public time: string
    ) {}
}
