function Item({ name, isChecked }) {
    // return (
    //     // <li>
    //     //     {name} {isChecked ? "✅" : null}
    //     // </li>

    //     isChecked ? <li>{name} ✅</li> : null

    // );

    // return (
    //     <li>
    //         {name} {isChecked && '✅'}
    //     </li>
    // )
    let itemContent = name;
    if (isChecked) {
        itemContent = name + '✅';
    }
    return (
        <li>
            {itemContent}
        </li>
    );
}

export default Item;