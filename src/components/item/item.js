export default function Item({ lord }) {

    const { id, name } = lord;

    return (
        <li
            key={id}
            className="list-group-item">{name}
            <button onClick={() => console.log(this)}>
                Delete
            </button>
        </li>
    );
}