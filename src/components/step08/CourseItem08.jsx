function HeartIconBtn({ isFavorite = false }) {
    function handleFavorite() {
        isFavorite = !isFavorite;
        alert(isFavorite ? "좋아요 입니다" : "모르겠어요")
    }
    return (
        <button className="btn" onClick={handleFavorite}>
            <img className="btn_img" src={isFavorite ? "./img/heart-fill-icon.svg" : "./img/heart-icon.svg"} />
        </button>
    )
}

function CourseItem08({ title, description, thumbnail, isFavorite }) {

    return (
        <>
            <article className="course">
                <img className="course__img" src={thumbnail} alt="강의 이미지" />
                <div className="course__body">
                    <div className="course__title"><b>강의명 : {title}</b></div>
                    <p>강의 소개</p>
                    <div className="course__description">{`→ ${description}`} </div>
                </div>
                <div className="course_icons">
                    <HeartIconBtn isFavorite={isFavorite} />
                </div>
            </article>
        </>
    );
}
export default CourseItem08;