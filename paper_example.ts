class Paper {
    shred(piece: number = 0) {
        console.log(`paper shredded into ${piece} piece(s)`);
    }
}

class BookCover extends Paper {
    shred(piece: number = 0) {
        if (piece > 10) {
            console.log('cannot shred more than 10 pieces');
            return;
        }
        console.log(`paper shredded into ${piece} piece(s)`);
    }
    read() {
        console.log('reading book cover...');
    }
}

const bookcover = new BookCover();
bookcover.read();
bookcover.shred();
bookcover.shred(2);
bookcover.shred(25);