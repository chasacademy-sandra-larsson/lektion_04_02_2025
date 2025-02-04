
function ColorGenerator() {

    // Skapar en array av 50 olika hexvärden
    const colors = Array.from({length: 50}, () => "#" + Math.floor(Math.random()*16777215).toString(16));

    const handleClick = () => {
        console.log("Button clicked");
    }

    return (
        <div>
            <h1>Color Generator</h1>
            <button onClick={handleClick}>Generate colors</button>
            <section style={{display: "flex", flexWrap: "wrap"}}>
                {colors.map(color => (
                    <Color color={color} />
                ))}
            </section>
        </div>
    )
}

function Color({color}: {color: string}) {
    return (
        <div 
            style={{backgroundColor: color, width: "100px", height: "100px", margin: "10px"}}>
            <p>{color}</p>
        </div>
    )
}

export default ColorGenerator;