function Avatar({ person, size }) {
    return (
        <>
            <p>{`이름 : ${person.name}`}</p>
            <p>나이 : {person.age}</p>
            <img alt={person.name} src={makeImgURL(person.img)}
                width={size} height={size} />
            <hr />
        </>
    );
}

function makeImgURL(img) {
    return (
        './img/' + img + '.jpg'
    )
}

export default Avatar;