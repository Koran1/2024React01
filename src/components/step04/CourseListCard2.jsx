import CourseItem2 from "./CourseItem2";

function CourseListCard2({ items }) {
    const [course1, course2, course3] = items;

    return (
        <>
            <div className="card">
                <div className="card__header">강의 목록 2</div>
                <div className="card__body">
                    <div className="courses">
                        <CourseItem2 {...course1} />
                        <CourseItem2 {...course2} />
                        <CourseItem2 {...course3} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CourseListCard2;