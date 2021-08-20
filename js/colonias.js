const changePais = (pais, ciudad) => {
	let optionArray = [];
	pais = document.getElementById(pais);
	ciudad = document.getElementById(ciudad);
	ciudad.value = "";
	ciudad.innerHTML = "";

	if (pais.value === "Chile") {
		optionArray = [
			"|",
			"Arica y Parinacota|Arica y Parinacota",
			"Tarapaca|Tarapaca",
			"Antofagasta|Antofagasta",
			"Atacama|Atacama",
			"Coquimbo|Coquimbo",
			"Valparaiso|Valparaiso",
			"Libertador General Bernardo O'Higgins|Libertador General Bernardo O'Higgins",
			"Maule|Maule",
			"Ñuble|Ñuble",
			"Biobio|Biobio",
			"Araucania|Araucania",
			"Los Rios|Los Rios",
			"Los Lagos|Los Lagos",
			"Aysen del General Carlos Ibañez del Campo|Aysen del General Carlos Ibañez del Campo",
			"Magallanes y de la Antartica Chilena|Magallanes y de la Antartica Chilena",
			"Region Metropolitana de Santiago|Region Metropolitana de Santiago",
		];
	} else if (pais.value === "Colombia") {
		optionArray = [
			"|",
			"Bogota|Bogota",
			"Antioquia|Antioquia",
			"Valle del Cauca|Valle del Cauca",
			"Cundinamarca|Cundinamarca",
			"Atlantico|Atlantico",
			"Santander|Santander",
			"Bolivar|Bolivar",
			"Cordoba|Cordoba",
			"Nariño|Nariño",
			"Norte de Santander|Norte de Santander",
			"Cauca|Cauca",
			"Magdalena|Magdalena",
			"Tolima|Tolima",
			"Cesar|Cesar",
			"Boyaca|Boyaca",
			"Huila|Huila",
			"Meta|Meta",
			"La Guajira|La Guajira",
			"Caidas|Caidas",
			"Risaraida|Risaraida",
			"Sucre|Sucre",
			"Quindio|Quindio",
			"Choco|Choco",
			"Caqueta|Caqueta",
			"Casanare|Casanare",
			"Putumayo|Putumayo",
			"Arauca|Arauca",
			"Vichada|Vichada",
			"Guaviare|Guaviare",
			"Amazonas|Amazonas",
			"San Andres y Providencia|San Andres y Providencia",
			"Guainia|Guainia",
			"Vaupes|Vaupes",
		];
	} else if (pais.value === "Mexico") {
		optionArray = [
			"|",
			"Aguascalientes|Aguascalientes",
			"Baja California|Baja California",
			"Baja California Sur|Baja California Sur",
			"Campeche|Campeche",
			"Chiapas|Chiapas",
			"Chihuahua|Chihuahua",
			"Coahuila|Coahuila",
			"Colima|Colima",
			"Ciudad de Mexico|Ciudad de México",
			"Durango|Durango",
			"Estado de Mexico|Estado de México",
			"Guanajuato|Guanajuato",
			"Guerrero|Guerrero",
			"Hidalgo|Hidalgo",
			"Jalisco|Jalisco",
			"Michoacan|Michoacan",
			"Morelos|Morelos",
			"Nayarit|Nayarit",
			"Nuevo Leon|Nuevo Leon",
			"Oaxaca|Oaxaca",
			"Puebla|Puebla",
			"Queretaro|Queretaro",
			"Quintana Roo|Quintana Roo",
			"San Luis Potosi|San Luis Potosi",
			"Sinaloa|Sinaloa",
			"Sonora|Sonora",
			"Tabasco|Tabasco",
			"Tamaulipas|Tamaulipas",
			"Tlaxcala|Tlaxcala",
			"Veracruz|Veracruz",
			"Yucatan|Yucatan",
			"Zacatecas|Zacatecas",
		];
	}

	for (option = 0; option < optionArray.length; option++) {
		let pair = optionArray[option].split("|");
		let newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		ciudad.options.add(newOption);
	}
};

const changeCiudad = (ciudad, comuna) => {
	let optionArray = [];
	ciudad = document.getElementById(ciudad);
	comuna = document.getElementById(comuna);
	comuna.value = "";
	comuna.innerHTML = "";

	switch (ciudad.value) {
		case "Arica y Parinacota":
			optionArray = [
				"|",
				"Arica|Arica",
				"Camarones|Camarones",
				"General Lagos|General Lagos",
				"Putre|Putre",
			];
			break;

		case "Tarapaca":
			optionArray = [
				"|",
				"Alto Hospicio|Alto Hospicio",
				"Iquique|Iquique",
				"Camiña|Camiña",
				"Colchane|Colchane",
				"Huara|Huara",
				"Pica|Pica",
				"Pozo Almonte|Pozo Almonte",
			];
			break;

		case "Antofagasta":
			optionArray = [
				"|",
				"Antofagasta|Antofagasta",
				"Mejillones|Mejillones",
				"Sierra Gorda|Sierra Gorda",
				"Taltal|Taltal",
				"Calama|Calama",
				"Ollague|Ollague",
				"San Pedro de Atacama|San Pedro de Atacama",
				"Maria Elena|Maria Elena",
				"Tocopilla|Tocopilla",
			];
			break;

		case "Atacama":
			optionArray = [
				"|",
				"Chañaral|Chañaral",
				"Diego de Almagro|Diego de Almagro",
				"Caldera|Caldera",
				"Copiapo|Copiapo",
				"Tierra Amarilla|Tierra Amarilla",
				"Alto del Carmen|Alto del Carmen",
				"Freirina|Freirina",
				"Huasco|Huasco",
				"Vallenar|Vallenar",
			];

		case "Coquimbo":
			optionArray = [
				"|",
				"Canela|Canela",
				"Illapel|Illapel",
				"Los Vilos|Los Vilos",
				"Salamanca|Salamanca",
				"Andacollo|Andacollo",
				"Coquimbo|Coquimbo",
				"La Higuera|La Higuera",
				"La Serena|La Serena",
				"Paihuano|Paihuano",
				"Vicuña|Vicuña",
				"Combartala|Combartala",
				"Monte Patria|Monte Patria",
				"Ovalle|Ovalle",
				"Punitaqui|Punitaqui",
				"Rio Hurtado|Rio Hurtado",
			];
			break;

		case "Valparaiso":
			optionArray = [
				"|",
				"Isla de Pascua|Isla de Pascua",
				"Calle Larga|Calle Larga",
				"Los Andes|Los Andes",
				"Rinconada de Los Andes|Rinconada de Los Andes",
				"San Esteban|San Esteban",
				"Limache|Limache",
				"Olmue|Olmue",
				"Quilpue|Quilpue",
				"Villa Alemana|Villa Alemana",
				"Cabildo|Cabildo",
				"La Ligua|La Ligua",
				"Papudo|Papudo",
				"Petorca|Petorca",
				"Zapallar|Zapallar",
				"Hijuelas|Hijuelas",
				"La Calera|La Calera",
				"La Cruz|La Cruz",
				"Nogales|Nogales",
				"Quillota|Quillota",
				"Algarrobo|Algarrobo",
				"Cartagena|Cartagena",
				"El Quisco|El Quisco",
				"El Tabo|El Tabo",
				"San Antonio|San Antonio",
				"Santo Domingo|Santo Domingo",
				"Catemu|Catemu",
				"Llaillay|Llaillay",
				"Panquehue|Panquehue",
				"Putaendo|Putaendo",
				"San Felipe|San Felipe",
				"Santa Maria|Santa Maria",
				"Casa Blanca|Casa Blanca",
				"Concon|Concon",
				"Juan Fernandez|Juan Fernandez",
				"Puchuncavi|Puchuncavi",
				"Quintero|Quintero",
				"Valparaiso|Valparaiso",
				"Viña del Mar|Viña del Mar",
			];
			break;

		case "Libertador General Bernardo O'Higgins":
			optionArray = [
				"|",
				"Codegua|Codegua",
				"Coinco|Coinco",
				"Coltauco|Coltauco",
				"Doñihue|Doñihue",
				"Graneros|Graneros",
				"Las Cabras|Las Cabras",
				"Machali|Machali",
				"Malloa|Malloa",
				"Olivar|Olivar",
				"Peumo|Peumo",
				"Pichidegua|Pichidegua",
				"Quinta de Tilcoco|Quinta de Tilcoco",
				"Rancagua|Rancagua",
				"Requinoa|Requinoa",
				"Rengo|Rengo",
				"San Francisco de Mostazal|San Francisco de Mostazal",
				"San Vicente de Tagua Tagua|San Vicente de Tagua Tagua",
			];
			break;

		case "Maule":
			optionArray = [
				"|",
				"Cauquenes|Cauquenes",
				"Chanco|Chanco",
				"Pelluhue|Pelluhue",
				"Curico|Curico",
				"Hualañe|Hualañe",
				"Licanten|Licanten",
				"Molina|Molina",
				"Rauco|Rauco",
				"Romeral|Romeral",
				"Sagrada Familia|Sagrada Familia",
				"Teno|Teno",
				"Vichuquen|Vichuquen",
				"Colbun|Colbun",
				"Linares|Linares",
				"Longavi|Longavi",
				"Parral|Parral",
				"Retiro|Retiro",
				"San Javier de Loncomilla|San Javier de Loncomilla",
				"Villa Alegre|Villa Alegre",
				"Yerbas Buenas|Yerbas Buenas",
				"Constitucion|Constitucion",
				"Curepto|Curepto",
				"Empedrado|Empedrado",
				"Maule|Maule",
				"Pelarco|Pelarco",
				"Pencahue|Pencahue",
				"Rio Claro|Rio Claro",
				"San Clemente|San Clemente",
				"San Rafel|San Rafel",
				"Talca|Talca",
			];
			break;

		case "Ñuble":
			optionArray = [
				"|",
				"Bulnes|Bulnes",
				"Chillan|Chillan",
				"Chillan Viejo|Chillan Viejo",
				"El Carmen|El Carmen",
				"Pemuco|Pemuco",
				"Pinto|Pinto",
				"Quillon|Quillon",
				"San Ignacio|San Ignacio",
				"Yungay|Yungay",
				"Cobquecura|Cobquecura",
				"Coelemu|Coelemu",
				"Ninhue|Ninhue",
				"Portezuelo|Portezuelo",
				"Quirihue|Quirihue",
				"Ranquil|Ranquil",
				"Treguaco|Treguaco",
				"Coihueco|Coihueco",
				"Ñiquen|Ñiquen",
				"San Carlos|San Carlos",
				"San Fabian|San Fabian",
				"San Nicolas|San Nicolas",
			];

		case "Biobio":
			optionArray = [
				"|",
				"Arauco|Arauco",
				"Cañete|Cañete",
				"Contulmo|Contulmo",
				"Curanilahue|Curanilahue",
				"Lebu|Lebu",
				"Los Alamos|Los Alamos",
				"Tirua|Tirua",
				"Alto Biobio|Alto Biobio",
				"Antuco|Antuco",
				"Cabrero|Cabrero",
				"Laja|Laja",
				"Los Angeles|Los Angeles",
				"Mulchen|Mulchen",
				"Nacimiento|Nacimiento",
				"Negrete|Negrete",
				"Quilaco|Quilaco",
				"Quilleco|Quilleco",
				"San Rosendo|San Rosendo",
				"Santa Barbara|Santa Barbara",
				"Tucapel|Tucapel",
				"Yumbel|Yumbel",
				"Chiguayante|Chiguayante",
				"Concepcion|Concepcion",
				"Coronel|Coronel",
				"Florida|Florida",
				"Hualpen|Hualpen",
				"Hualqui|Hualqui",
				"Lota|Lota",
				"Penco|Penco",
				"San Pedro de la Paz|San Pedro de la Paz",
				"Santa Juana|Santa Juana",
				"Talcahuano|Talcahuano",
				"Tome|Tome",
			];
			break;

		case "Araucania":
			optionArray = [
				"|",
				"Carahue|Carahue",
				"Cholchol|Cholchol",
				"Cunco|Cunco",
				"Curarrehue|Curarrehue",
				"Freire|Freire",
				"Galvarino|Galvarino",
				"Gorbea|Gorbea",
				"Lautaro|Lautaro",
				"Loncoche|Loncoche",
				"Melipeuco|Melipeuco",
				"Nueva Imperial|Nueva Imperial",
				"Padre Las Casas|Padre Las Casas",
				"Perquenco|Perquenco",
				"Pitrufquen|Pitrufquen",
				"Pucon|Pucon",
				"Saavedra|Saavedra",
				"Temuco|Temuco",
				"Teodoro Schmidt|Teodoro Schmidt",
				"Tolten|Tolten",
				"Vilcun|Vilcun",
				"Villarrica|Villarrica",
				"Angol|Angol",
				"Collipulli|Collipulli",
				"Curacautin|Curacautin",
				"Ercilla|Ercilla",
				"Lonquimay|Lonquimay",
				"Los Sauces|Los Sauces",
				"Lumaco|Lumaco",
				"Puren|Puren",
				"Renaico|Renaico",
				"Traiguen|Traiguen",
				"Victoria|Victoria",
			];
			break;

		case "Los Rios":
			optionArray = [
				"|",
				"Futrono|Futrono",
				"La Union|La Union",
				"Lago Ranco|Lago Ranco",
				"Rio Bueno|Rio Bueno",
				"Corral|Corral",
				"Lanco|Lanco",
				"Los Lagos|Los Lagos",
				"Mafil|Mafil",
				"Mariquina|Mariquina",
				"Paillaco|Paillaco",
				"Panguipulli|Panguipulli",
				"Valdivia|Valdivia",
			];
			break;

		case "Los Lagos":
			optionArray = [
				"|",
				"Ancud|Ancud",
				"Castro|Castro",
				"Chonchi|Chonchi",
				"Curaco de Velez|Curaco de Velez",
				"Dalcahue|Dalcahue",
				"Puqueldon|Puqueldon",
				"Queilen|Queilen",
				"Quellon|Quellon",
				"Quemchi|Quemchi",
				"Quinchao|Quinchao",
				"Calbuco|Calbuco",
				"Cochamo|Cochamo",
				"Fresia|Fresia",
				"Frutillar|Frutillar",
				"Llanquihue|Llanquihue",
				"Los Muermos|Los Muermos",
				"Maullin|Maullin",
				"Puerto Montt|Puerto Montt",
				"Pueto Varas|Pueto Varas",
				"Osorno|Osorno",
				"Puerto Octay|Puerto Octay",
				"Purranque|Purranque",
				"Puyehue|Puyehue",
				"Rio Negro|Rio Negro",
				"San Pablo|San Pablo",
				"San Juan de la Costa|San Juan de la Costa",
				"Chaiten|Chaiten",
				"Futaleufú|Futaleufú",
				"Hualaihué|Hualaihué",
				"Palena|Palena",
			];
			break;

		case "Aysen del General Carlos Ibañez del Campo":
			optionArray = [
				"|",
				"Aysen|Aysen",
				"Cisnes|Cisnes",
				"Guaitecas|Guaitecas",
				"Cochrane|Cochrane",
				"O Higgins|O Higgins",
				"Tortel|Tortel",
				"Coyhaique|Coyhaique",
				"Lago Verde|Lago Verde",
				"Chile Chico|Chile Chico",
				"Rio Ibañez|Rio Ibañez",
			];
			break;

		case "Magallanes y de la Antartica Chilena":
			optionArray = [
				"|",
				"Antartica|Antartica",
				"Cabo de Hornos|Cabo de Hornos",
				"Laguna Blanca|Laguna Blanca",
				"Punta Arenas|Punta Arenas",
				"Rio Verde|Rio Verde",
				"San Gregorio|San Gregorio",
				"Porvenir|Porvenir",
				"Primavera|Primavera",
				"Timaukel|Timaukel",
				"Natales|Natales",
				"Torres del Paine|Torres del Paine",
			];
			break;

		case "Region Metropolitana de Santiago":
			optionArray = [
				"|",
				"Colina|Colina",
				"Lampa|Lampa",
				"Tiltil|Tiltil",
				"Pirque|Pirque",
				"Puente Alto|Puente Alto",
				"San Jose de Maipo|San Jose de Maipo",
				"Buin|Buin",
				"Calera de Tango|Calera de Tango",
				"Paine|Paine",
				"San Bernardo|San Bernardo",
				"Alhue|Alhue",
				"Curacavi|Curacavi",
				"Maria Pinto|Maria Pinto",
				"Melipilla|Melipilla",
				"San Pedro|San Pedro",
				"Cerrillos|Cerrillos",
				"Cerro Navia|Cerro Navia",
				"Conchali|Conchali",
				"El Bosque|El Bosque",
				"Estacion Central|Estacion Central",
				"Huechuraba|Huechuraba",
				"Independencia|Independencia",
				"La Cisterna|La Cisterna",
				"La Granja|La Granja",
				"La Florida|La Florida",
				"La Pintana|La Pintana",
				"La Reina|La Reina",
				"Las Condes|Las Condes",
				"Lo Barnechea|Lo Barnechea",
				"Lo Espejo|Lo Espejo",
				"Lo Prado|Lo Prado",
				"Macul|Macul",
				"Maipu|Maipu",
				"Ñuñoa|Ñuñoa",
				"Pedro Aguirre Cerda|Pedro Aguirre Cerda",
				"Peñalolen|Peñalolen",
				"Providencia|Providencia",
				"Pudahuel|Pudahuel",
				"Quilicura|Quilicura",
				"Quinta Normal|Quinta Normal",
				"Recoleta|Recoleta",
				"Renca|Renca",
				"San Miguel|San Miguel",
				"San Joaquin|San Joaquin",
				"San Ramon|San Ramon",
				"Santiago|Santiago",
				"Vitacura|Vitacura",
				"El Monte|El Monte",
				"Isla de Maipo|Isla de Maipo",
				"Padre Hurtado|Padre Hurtado",
				"Peñaflor|Peñaflor",
				"Talagante|Talagante",
			];
			break;

		default:
			break;
	}

	for (option = 0; option < optionArray.length; option++) {
		let pair = optionArray[option].split("|");
		let newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		comuna.options.add(newOption);
	}
};
