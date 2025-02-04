import {useState} from "react"

function List() {

    const [list, setList] = useState<string[]>([]) 


    const handleAdd = () => {
        const text = prompt("Vad ska du lägga till");
        // Lägg endast till i listan om text är "truthy"
        if(text) {
            const newList = [...list, text]; // Lägg till listelement så här med spread => immutable way => copy av listan
            setList(newList);
        }
       
    }


    return (
       <>
            <h2>Listan</h2>
            <ul>
                {/* Ideala är om key var en id...*/}
                {list.map(item => <li key={item}>{item}</li>)}
            </ul>
            <button onClick={handleAdd}>Lägg till i listan</button>
        </> 
    )


}

export default List;