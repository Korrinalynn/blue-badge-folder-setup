function AboutMe() {

    const style = {
        header: {color: "red"},
        listItems: {listStyle: "none"},
    };
    return (
        <div className="AboutMe">
            <h1 style={style.header}>Hi, my name is Korrina Shaw</h1>
            <p>I grew up in Dyer, Indiana. Not only have I visited, but I have lived in...</p>
            <ul>
                <li style = {style.listItems}>Tennessee</li>
                <li style = {style.listItems}>Nevada</li>
                <li style = {style.listItems}>and Nebraska</li>
            </ul>
        </div>
    );
}

export default AboutMe;