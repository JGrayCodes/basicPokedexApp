function logic() {

    // First thing to do is get input from user
    let name = document.getElementById("name");
    let type = document.getElementById("type");
    let region = document.getElementById("region");


    // Will only give objects
    console.log( name + " - " + type + " - " + region + " region") // remove once you have clear understanding


    // Get String values of variables
    name = name.value;
    type = type.value;
    region = region.value;
    

    // Can log them since they are now pure Strings
    console.log( name + " - " + type + " - " + region + " region"); // remove once you have clear understanding

/*-----------------------------------------------
 * Add your solution code here
 *---------------------------------------------*/

    /* --- Part 1 : Create pokemon data Object --- */

	// Use If to ensure input validation (ensure input fields are !empty)

    if (name.trim() === "" || type.trim() ==="" || region.trim() === "") 
    // used trim() method to remove any white space, "" denotes blank string
        {
        document.getElementById("invalidInput").innerHTML = "Please make sure you have completed each entry"
        }

    // Create pokemon object here (const pokemon) using user input Strings
    const pokemon = [name, type, region];

    console.log(pokemon); //logging the "pokemon" variable 

    // Create a span element (const pokemonData) and put the pokemon objects properties inside of it

    const pokemonData = document.createElement("span");

    let nameNode = document.createTextNode("Pokemon name:" + pokemon[0] );
    let typeNode = document.createTextNode("Pokemon type:" + pokemon[1] );
    let regionNode = document.createTextNode("Pokemon region:" + pokemon[2] );

    pokemonData.appendChild(nameNode);
    pokemonData.appendChild(typeNode);
    pokemonData.appendChild(regionNode);

    console.log(pokemonData)


    // pokemonData.innerHTML = 
    //     " Pokemon name: " + pokemon[0] + 
    //     " Pokemon type: " + pokemon[1] +
    //     " Pokemon region: " + pokemon[2]


    /* --- Part 2 : Creating other DOM Objects --- */
        
    // Create HTML li element here (const pokedexEntry)
    const pokedexEntry = document.createElement("li")

    // Give pokedexEntry (li) a new class equal to the "type" property of the pokemon object
    pokedexEntry.className = (pokemon[1])

    // Creating a preview button (using a Template Literal)
    // this code is for an html form that will Google search the name of the pokemon
    const previewButton = `
        <form action="http://google.com/search" target="_blank">
            <input name="q" hidden value="${pokemon[0]}">
            <input type="submit">
        </form>
    `
    console.log(pokemon[0]); //logging the "pokemon" variable at index 0 (which is the name) 
    console.log(pokemon[1]); //logging the "pokemon" variable at index 1 (which is the type) 
    console.log(pokemon[2]); //logging the "pokemon" variable at index 2 (which is the region) 

    /* --- Part 3 : Add things into the DOM --- */

    console.log(pokemonData)

    // Firstly append pokemonData to the innerHTML of pokedexEntry
    pokedexEntry.appendChild(pokemonData);

    console.log(pokedexEntry)

    // Secondly append the previewButton to innerHTML of pokedexEntry
    pokedexEntry.innerHTML += previewButton;

    console.log(pokedexEntry)

    // Lastly we will get the ul List element that is meant to contain all pokedex entries
    document.getElementById("pokedexEntries").appendChild(pokedexEntry);
    // The we will append pokedexEntry to the innerHTML of the pokedexEntries ul element


/*-----------------------------------------------
 * Solution must be above this comment
 *---------------------------------------------*/
}
