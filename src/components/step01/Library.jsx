import Book from "./Book";

function Library() {
    return (
        <div>
            <Book bookname="홍길동전" bookpage="500" /> <hr />
            <Book bookname="장발장" bookpage="321" /> <hr />
            <Book bookname="귀리와아이들" bookpage="141" /> <hr />
        </div>
    );
}

export default Library;