var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Paper = /** @class */ (function () {
    function Paper() {
    }
    Paper.prototype.shred = function (piece) {
        if (piece === void 0) { piece = 0; }
        console.log("paper shredded into " + piece + " piece(s)");
    };
    return Paper;
}());
var BookCover = /** @class */ (function (_super) {
    __extends(BookCover, _super);
    function BookCover() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BookCover.prototype.shred = function (piece) {
        if (piece === void 0) { piece = 0; }
        if (piece > 10) {
            console.log('cannot shred more than 10 pieces');
            return;
        }
        console.log("paper shredded into " + piece + " piece(s)");
    };
    BookCover.prototype.read = function () {
        console.log('reading book cover...');
    };
    return BookCover;
}(Paper));
var bookcover = new BookCover();
bookcover.read();
bookcover.shred();
bookcover.shred(2);
bookcover.shred(25);
