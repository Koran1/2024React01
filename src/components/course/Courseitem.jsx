function Courseitem({ course_img_src, course_title, course_description }) {
    const alt = "강의 이미지";
    const course_info = {
        c_title: "강의명 : ",
        c_desc: "강의 소개"
    }

    return (
        <>
            <article className="course">
                <a href="https://www.w3schools.com/"><img className="course__img" src={course_img_src} alt={alt} /></a>
                <div className="course__body">
                    <div className="course__title"><b>{course_info.c_title} {course_title}</b></div>
                    <p>{course_info.c_desc}</p>
                    <div className="course__description">{`→ ${course_description}`} </div>
                    {/* 백틱은 문자 + 변수 하고 싶을 때 사용 */}
                </div>
            </article>
        </>
    );
}

export default Courseitem;

