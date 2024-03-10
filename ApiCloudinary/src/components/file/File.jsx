import React from 'react';


const ReadBicycles = () => {
  const [bicycles, setBicycles] = useState([]); // Inicializa el estado con un array vacío

  useEffect(() => { // Utiliza el hook useEffect para realizar una solicitud GET al montar el componente
    const fetchData = async () => { // Define una función asincrónica llamada fetchData
      const response = await fetch('db.json'); // Realiza la solicitud GET al archivo db.json
      const data = await response.json(); // Convierte la respuesta en formato JSON
      setBicycles(data.bicycles); // Actualiza el estado con los datos obtenidos
    };

    fetchData(); // Llama a la función fetchData cuando el componente se monta
  }, []);

  return ( // Renderiza el componente
    <div> 
      <h2>Bicycles List</h2>
      <ul>
        {bicycles.map(bicycle => ( // Mapea el array de bicicletas y renderiza un elemento <li> por cada una /* Utiliza el ID de la bicicleta como clave 
          <li key={bicycle.id}>  
            {bicycle.model} -Speeds: {bicycle.speeds} - Frame: {bicycle.frame} - Electric: {bicycle.electric.toString()}  
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadBicycles; // Exporta el componente ReadBicycles para poder utilizarlo en otros archivos