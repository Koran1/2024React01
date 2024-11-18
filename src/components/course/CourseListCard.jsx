import Courseitem from "./Courseitem";

function CourseListCard(props) {
    return (
        <>
            <div className="card">
                <div className="card__header">강의 목록</div>
                <div className="card__body">
                    <div className="courses">
                        <Courseitem course_img_src="./img/coffee-blue.jpg" course_title="커피 한잔 할래요?"
                            course_description="허준 선생님과 함께하는 바리스타 수업을 같이 즐겨봐요! 플레이팅부터 잔 선택법까지 모두 알려드립니다! " />

                        <Courseitem course_img_src="./img/bear.jpg" course_title="곰돌이 인형 친구 만들기"
                            course_description="우리의 곰돌이 친구를 예쁘게 만들어보아요. 잠잘 때 우리 곁을 지켜줄거에요!" />

                        <Courseitem course_img_src="./img/logo192.png" course_title="원자력 발전해보기"
                            course_description="실제로 원자력 발전은 하지 않고 그만큼의 에너지를 가지고 React를 공부해보아요!" />

                        <Courseitem course_img_src="./img/pds3_z.jpg" course_title="트리케라톱스 체험기"
                            course_description="롤러장에서 안전한 보호장구를 차고 열심히 부딪혀봐요! 트리케라톱스가 된 기분일거에요" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CourseListCard;