import Comment from "./Comment";

const comments = [
    {
        name: "홍길동",
        comment: "반갑소이다 홍길동이올세다"
    },
    {
        name: "고길동",
        comment: "반갑다 고길동이다 둘리 찾아와주시오"
    },
    {
        name: "둘리",
        comment: "방가방가 둘리임다 숨는중이니 조용히 해주소"
    },
    {
        name: "희동이",
        comment: "안녕하세요 희동이입니다"
    }
];

function CommentList() {
    return (
        <div>
            {
                comments.map((k) => {
                    return (
                        <Comment name={k.name}
                            comment={k.comment} />
                    );
                })
            }
        </div>
    );
}

export default CommentList;