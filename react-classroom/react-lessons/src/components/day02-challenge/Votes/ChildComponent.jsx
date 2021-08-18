function ChildComponent(props) {
    const { name, count } = props.votes;
    //Final Output: abe Lincoln had a total vote count of 139033
    return (
        <div>
            {name} had a total vote count of {count}. {props.phrase}
        </div>
    );
}

export default ChildComponent;