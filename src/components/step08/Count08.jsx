function Count08() {
    let cnt = 5;
    let increment = () => {
        cnt += 1;
        console.log(cnt)
    }
    function decrement() {
        cnt -= 1;
        console.log(cnt)
    }


    return (
        <div>
            <button onClick={increment}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    margin: "5px",
                    cursor: "pointer",
                }}> + </button>
            <span style={{ margin: "0 20px", fontSize: "20px" }}>{cnt}</span>
            <button onClick={decrement}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    margin: "5px",
                    cursor: "pointer",
                }}> - </button>
        </div>
    );
}

export default Count08;