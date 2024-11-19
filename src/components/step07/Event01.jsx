function Event01() {
    function handleClick() {
        alert("안녕하시오?");
    }
    return (
        <>
            <button onClick={handleClick}>
                Click me!
            </button>
            <button onDoubleClick={() => {
                alert("안녕하시오2?")
            }}  >
                Double Click Me!
            </button>
        </>
    );
}

export default Event01;