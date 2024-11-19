
function HeartIconBtn({ isFavorite = false }) {
    if (isFavorite) {
        return (
            <button className="btn">
                <img className="btn_img" src="./img/heart-fill-icon.svg" />
            </button>
        )
    }
    return (
        <button className="btn">
            <img className="btn_img" src="./img/heart-icon.svg" />
        </button>
    )
}

function HeartItem({ title, description, thumbnail, isFavorite }) {

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

export default HeartItem;
