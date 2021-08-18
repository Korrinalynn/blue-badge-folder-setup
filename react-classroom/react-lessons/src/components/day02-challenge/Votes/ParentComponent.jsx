import ChildComponent from './ChildComponent';

function ParentComponent(props){
    const votes = [
        {name: "Abe Lincoln", count: 139033 },
        {name: "Stephen Douglas", count: 115509},
    ];

    return (
    <div>
        <div>Hello from ParentComponent</div>
        {votes.map(vote=> (<ChildComponent votes={vote} phrase={props.phrase} />
        ))}
    </div>
  );
}

export default ParentComponent;