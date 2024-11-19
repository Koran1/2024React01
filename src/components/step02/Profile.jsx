import Avatar from "./Avatar";

function Profile() {
    return (
        <div>
            <Avatar person={{ name: "hong", age: "17", img: "bear" }}
                size="150" />
            <Avatar person={{ name: "kong", age: "22", img: "coffee-blue" }}
                size="120" />
            <Avatar person={{ name: "jong", age: "33", img: "pds3_z" }}
                size="90" />
        </div>
    );
}

export default Profile;