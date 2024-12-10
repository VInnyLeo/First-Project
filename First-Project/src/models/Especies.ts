//este modelo lo generamos automaticamente 
//como lo hacemos nos vamos a a la api ej https://pokeapi.co/api/v2/pokemon-species
//ctrl + a, ctrl + c, ctrl + v
//regresamos al archivo creado o lo creamos en este casoEspeceies ts ya que no es un funtional componenet
// en la barra de busqueda parte superior escribimos >
// luesto paste to json as code,  escribimos el nombre del archivo especies.tsx y enter
//nos genera automaticamente los datos o su formato

export interface EspeciesTs {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

export interface Result {
    name: string;
    url:  string;
}
