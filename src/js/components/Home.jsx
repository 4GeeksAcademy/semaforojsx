import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	

	const [semaforo,setSemaforo] = useState("verde");

	function cambioSemaforo() { 

		if (semaforo === "verde" ) {

			setSemaforo("amarillo")
		}
		if (semaforo==="amarillo") 
		{

			setSemaforo("rojo")
        }
		if (semaforo==="rojo"){


			setSemaforo("verde")
        }

			

		
		
	}

	setInterval( 
		
		cambioSemaforo

	,3000);

	return (
		<div className="soporteSemaforo col-2 ">
			
			<button 
				className={`colorVerde ${semaforo === "verde" ? "resplandor" : ""}`}
				
			></button>

			<button 
				className={`colorAmarillo ${semaforo === "amarillo" ? "resplandor" : ""}`}
				
			></button>

			<button 
				className={`colorRojo ${semaforo === "rojo" ? "resplandor" : ""}`}
				
			></button>

		</div>
	);
};

export default Home;