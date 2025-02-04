import {useState} from "react"

// Viktigt! 
// så här gör man med formulär. 
// En kontrollerad komponent i React är en komponent där React 
// har full kontroll över formelement såsom <input>, <textarea> 
// och <select>. 
// Detta innebär att värdet av formelementet lagras i komponentens
// state, och varje ändring av detta värde hanteras med en funktion
// som uppdaterar statet. Detta skapar en "single source of truth" 
// inom React-komponenten, vilket gör det enklare att hantera 
// formulärdata och validering

function SearchForm() {

    const [searchTerm, setSearchTerm] = useState<string>('')

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Visar nuvarande state
        console.log(`Du sökte på: ${searchTerm}` )
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Sök"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
               />
            <button type="submit">Sök</button>
        </form>
    )
}

export default SearchForm;

