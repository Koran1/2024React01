import Item from "./Item";

function PackingList(props) {
    return (
        <section>
            <h1>조건부 렌더링</h1>
            <ul>
                <Item
                    isChecked={true}
                    name="고길동" />

                <Item
                    isChecked={true}
                    name="희동이" />

                <Item
                    isChecked={false}
                    name="둘리" />

            </ul>
        </section>
    );
}
export default PackingList;
