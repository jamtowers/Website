export class Message {
    constructor(
        public name: string,
        public email: string,
        public content: string,
        public subject?: string
    ) { }
}
