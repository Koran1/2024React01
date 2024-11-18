// function Book(props) {
//     return (
//         <div>
//             {/* `문자열 ${}` */}
//             <h1>{`이 책의 이름은 ${props.bookname} 입니다`}</h1>
//             <h1>{`이 책은 총 ${props.bookpage} 페이지로 이루어져 있습니다`}</h1>
//         </div>
//     );
// }

// 구조 분해 할당
function Book({ bookname, bookpage }) {
    return (
        <div>
            {/* `문자열 ${}` */}
            <h1>{`이 책의 이름은 ${bookname} 입니다`}</h1>
            <h1>{`이 책은 총 ${bookpage} 페이지로 이루어져 있습니다`}</h1>
        </div>
    );
}

export default Book;