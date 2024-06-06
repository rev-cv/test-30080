import { useRef } from "react"
import './style.css'

function Search(props) {

    const lineSearchNode = useRef();

    function find () {
        const text = lineSearchNode.current.value.trim();
        if (text != "") {
            fetch(`http://localhost:3000/?term=${text}`)
                .then(response => response.json())
                .then(data => props.setData(data))
                .catch(error => console.error('Error:', error));
        } else {
            fetch(`http://localhost:3000/`)
                .then(response => response.json())
                .then(data => props.setData(data))
                .catch(error => console.error('Error:', error));
        }
    }
    return (

<div className='search-panel'>
    <input 
        ref={lineSearchNode} 
        onKeyUp={e => { if (e.key === "Enter") find() }} />
    <button onClick={find}>
        <svg className='icon'><use xlinkHref='#ico-search' /></svg>
    </button>
</div>

    )
}

export default Search
