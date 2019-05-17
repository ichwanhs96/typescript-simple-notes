import fs = require('fs');
const path = './note.txt';

export class Writer {
    write(text: string) : string {
        fs.writeFileSync(path, text);

        return this.read();
    }

    read() : string {
        const note = fs.readFileSync(path);

        return note.toString();
    }
}