const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
];

function TestList() {
    const pplList = people.map(person => <li>{person}</li>)
    return (
        <ul>
            {pplList}
        </ul>
    );
}
export default TestList;