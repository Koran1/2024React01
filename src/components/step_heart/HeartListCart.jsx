import HeartItem from "./HeartItem";

function HeartListCart({ items }) {
    const [course1, course2, course3] = items;
    return (
        <>
            <div className="card">
                <div className="card__header">강의 목록 - Heart</div>
                <div className="card__body">
                    <div className="courses">
                        <HeartItem {...course1} />
                        <HeartItem {...course2} />
                        <HeartItem {...course3} />
                    </div>
                </div>
            </div>
        </>
    )

}
export default HeartListCart;