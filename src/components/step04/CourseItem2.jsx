function CourseItem2({ title, description, thumbnail }) {
    // function CourseItem2({ course_title, course_description, course_img_src }) {
    const alt = "강의 이미지";
    const course_info = {
        c_title: "강의명 : ",
        c_desc: "강의 소개"
    }

    return (
        <>
            <article className="course">
                <img className="course__img" src={thumbnail} alt={alt} />
                <div className="course__body">
                    <div className="course__title"><b>{course_info.c_title} {title}</b></div>
                    <p>{course_info.c_desc}</p>
                    <div className="course__description">{`→ ${description}`} </div>
                </div>
            </article>
        </>
    );
}

export default CourseItem2;
