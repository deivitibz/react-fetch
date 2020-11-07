import { React } from 'react';
const List = (props) => {
    const { repos } = props;
    if (!repos || repos.length === 0) return <p>No repos , sorry</p>;
    return (
        <ul>
            <h2 className="list-head">Available Public Repositories</h2>
            {repos.map((repo)=>{
                return (
                    <li key="repo.id" className="list">
                        <span className="repo text">{repo.title}</span>
                        <input type="checkbox" name="" id="" defaultChecked={repo.completed} />
                    </li>
                )
            })}
        </ul>
    )
}

export default List