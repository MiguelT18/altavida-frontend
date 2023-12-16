import AltaMira1 from "@media/images/pages/catalogo/altamira1.webp"
import AltaMira2 from "@media/images/pages/catalogo/altamira2.webp"
import AltaMira3 from "@media/images/pages/catalogo/altamira3.webp"
import Blue1 from "@media/images/pages/catalogo/blue1.webp"
import Blue2 from "@media/images/pages/catalogo/blue2.webp"
import Blue3 from "@media/images/pages/catalogo/blue3.webp"
import Brick1 from "@media/images/pages/catalogo/brick1.webp"
import Camelia1 from "@media/images/pages/catalogo/camelia1.webp"
import Camelia2 from "@media/images/pages/catalogo/camelia2.webp"
import Campestre1 from "@media/images/pages/catalogo/campestre1.webp"
import Campestre2 from "@media/images/pages/catalogo/campestre2.webp"
import Canela1 from "@media/images/pages/catalogo/canela1.webp"
import Canela2 from "@media/images/pages/catalogo/canela2.webp"
import Caoba1 from "@media/images/pages/catalogo/caoba1.webp"
import Caoba2 from "@media/images/pages/catalogo/caoba2.webp"
import Caoba3 from "@media/images/pages/catalogo/caoba3.webp"
import Clasico1 from "@media/images/pages/catalogo/clasico1.webp"
import Clasico2 from "@media/images/pages/catalogo/clasico2.webp"
import Country1 from "@media/images/pages/catalogo/country1.webp"
import Country2 from "@media/images/pages/catalogo/country2.webp"
import Dalia1 from "@media/images/pages/catalogo/dalia1.webp"
import Dalia2 from "@media/images/pages/catalogo/dalia2.webp"
import Elite1 from "@media/images/pages/catalogo/elite1.webp"
import Elite2 from "@media/images/pages/catalogo/elite2.webp"
import Elite3 from "@media/images/pages/catalogo/elite3.webp"
import Garden1 from "@media/images/pages/catalogo/garden1.webp"
import Garden2 from "@media/images/pages/catalogo/garden2.webp"
import Garden3 from "@media/images/pages/catalogo/garden3.webp"
import Luxury1 from "@media/images/pages/catalogo/luxury1.webp"
import Luxury2 from "@media/images/pages/catalogo/luxury2.webp"
import Luxury3 from "@media/images/pages/catalogo/luxury3.webp"
import Mediterraneo1 from "@media/images/pages/catalogo/mediterraneo1.webp"
import Mediterraneo2 from "@media/images/pages/catalogo/mediterraneo2.webp"
import Minimalista1 from "@media/images/pages/catalogo/minimalista1.webp"
import Minimalista2 from "@media/images/pages/catalogo/minimalista2.webp"
import Nogal1 from "@media/images/pages/catalogo/nogal1.webp"
import Nogal2 from "@media/images/pages/catalogo/nogal2.webp"
import Nogal3 from "@media/images/pages/catalogo/nogal3.webp"
import Petra1 from "@media/images/pages/catalogo/petra1.webp"
import Petra2 from "@media/images/pages/catalogo/petra2.webp"
import Sky1 from "@media/images/pages/catalogo/sky1.webp"
import Sky2 from "@media/images/pages/catalogo/sky2.webp"
import Sky3 from "@media/images/pages/catalogo/sky3.webp"
import Vanguardia1 from "@media/images/pages/catalogo/vanguardia1.webp"
import Vanguardia2 from "@media/images/pages/catalogo/vanguardia2.webp"
import Vanguardia3 from "@media/images/pages/catalogo/vanguardia3.webp"

interface Feature {
	plantaBaja: string[];
	plantaAlta: string[];
}

export interface Modelo {
	path: string;
	name: string;
	src: ImageMetadata[];
	description: string;
	moreDescription: string;
	price: number;
	id: number;
	features: (string | Feature)[]
}

export const Modelos: Modelo[] = [
	{
		id: 1,
		path: "altamira",
		name: "Modelo Altamira",
		src: [
			AltaMira1,
			AltaMira2,
			AltaMira3,
		],
		description: "El modelo Altamira rescata el diseño con amplios ventanales y una terraza con vista al jardín interior que brinda comodidad, espacio y estilo.",
		moreDescription: "Si estás buscando elevar tu experiencia de vida, el modelo Altamira es la elección ideal. Nos encantaría conocerte mejor y discutir cómo este extraordinario diseño puede adaptarse a tus necesidades y preferencias. ¡No dudes en ponerte en contacto con nosotros para explorar juntos las posibilidades infinitas que el modelo Altamira tiene para ofrecerte!",
		price: 54150,
		features: [
			{
				plantaBaja: [
					"Ingreso",
					"Sala de estar",
					"Comedor",
					"Cocina",
					"Baño",
					"Área de Servicio",
					"Recibidor",
					"Despensa",
					"Galería"
				],
				plantaAlta: [
					"Distribuidor",
					"Dormitorio 1",
					"Baño Privado",
					"Vestidor",
					"Terraza",
					"Sala Familiar",
					"Dormitorio 2",
					"Baño Privado",
					"Dormitorio 3",
					"Baño"
				]
			},
		]
	},
	{
		id: 2,
		path: "blue",
		name: "Modelo Blue",
		src: [
			Blue1,
			Blue2,
			Blue3,
		],
		description: "Blue luce trazos rectos y definidos con un imponente ingreso, amplias ventanales que proporcionan iluminación natural en todos sus ambientes y una combinación de texturas de alta gama.",
		moreDescription: "Nos encantaría tener la oportunidad de profundizar en tus expectativas y cómo Blue puede complementar tu estilo de vida. No dudes en ponerte en contacto con nosotros para explorar más a fondo las características excepcionales que Blue tiene reservadas para ti. ¡Esperamos saber de ti pronto!",
		price: 52450,
		features: [
			{
				plantaBaja: [
					"Ingreso",
					"Salta de estar",
					"Comedor",
					"Cocina",
					"Baño de visita",
					"Área de Servicio",
					"Recibidor",
					"Quincho",
					"Galería",
				],
				plantaAlta: [
					"Distribuidor",
					"Dormitorio 1",
					"Balcón",
					"Vestidor",
					"Baño Privado",
					"Sala Familiar",
					"Dormitorio 2",
					"Dormitorio 3",
					"Baño"
				]
			}
		]
	},
	{
		id: 3,
		path: "brick",
		name: "Modelo Brick",
		src: [
			Brick1,
		],
		description: "Brick luce un revistimiento de ladrillo visto en su fachada que lo hace un modelo muy particular, con una distribución eficiente, y los mejores acabados en su interior.",
		moreDescription: "Si estás en la búsqueda de un hogar que refleje tu estilo distintivo, Brick es la elección ideal. Estamos aquí para discutir cómo este modelo puede adaptarse a tus preferencias y necesidades específicas. No dudes en ponerte en contacto con nosotros para explorar más a fondo las características excepcionales que hacen de Brick una elección extraordinaria. ¡Esperamos con interés conocer más sobre tus expectativas!",
		price: 29880,
		features: [
			"Ingreso",
			"Sala de estar",
			"Comedor",
			"Cocina",
			"Distribuidor",
			"Baño",
			"Dormitorio 1",
			"Baño Privado",
			"Dormitorio 2",
			"Dormitorio 3",
		]
	},
	{
		id: 4,
		path: "camelia",
		name: "Modelo Camelia",
		src: [
			Camelia1,
			Camelia2,
		],
		description: "Con una construcción estilo minimalista Camelia te ofrece confort y optimización de espacios para brindarte un hogar funcional y a un precio accesible.",
		moreDescription: "Si estás en la búsqueda de un hogar que combine estilo minimalista con funcionalidad, Camelia es la elección perfecta para ti. Nos encantaría discutir cómo este modelo puede adaptarse a tus necesidades específicas. No dudes en ponerte en contacto con nosotros para explorar más a fondo cómo Camelia puede convertirse en tu refugio ideal. ¡Estamos ansiosos por saber de ti!",
		price: 11900,
		features: [
			"Ingreso",
			"Sala - Comedor",
			"Baño",
			"Cocina",
			"Dormitorio",
			"Lavanderia",
		]
	},
	{
		id: 5,
		path: "campestre",
		name: "Modelo Campestre",
		src: [
			Campestre1,
			Campestre2,
		],
		description: "Campestre luce un acabado rústico en sus detalles de smadera vista con amplios ventanales y una cubierta de teja, que le dan el toque ideal para tu nuevo hogar",
		moreDescription: "Si estás en la búsqueda de un espacio que capture la esencia campestre con un toque refinado, Campestre es la elección perfecta. Nos encantaría explorar contigo cómo este modelo puede convertirse en el escenario ideal para tus momentos especiales. No dudes en ponerte en contacto con nosotros para descubrir más sobre las maravillas que el modelo Campestre tiene reservadas para ti. ¡Estamos aquí para ayudarte en cada paso del camino!",
		price: 29620,
		features: [
			"Ingreso",
			"Sala de estar",
			"Comedor",
			"Cocina",
			"Galería",
			"Baño",
			"Quincho",
			"Dormitorio1",
			"Dormitorio 2",
			"Área de Lavado",
		]
	},
	{
		id: 6,
		path: "canela",
		name: "Modelo Canela",
		src: [
			Canela1,
			Canela2,
		],
		description: "Canela es un modelo de vivienda con bastante aceptación en el mercado, tanto por la optimización de espacios como los acabados en la fachada.",
		moreDescription: "Si estás en busca de un hogar que equilibre funcionalidad con un atractivo visual notable, Canela es la elección perfecta. Estamos aquí para explorar contigo cómo este modelo puede adaptarse a tus preferencias específicas. No dudes en ponerte en contacto con nosotros para descubrir más sobre las características excepcionales que hacen de Canela una opción tan apreciada en el mercado. ¡Esperamos saber de ti pronto!",
		price: 19900,
		features: [
			"Ingreso",
			"Sala de estar",
			"Cocina - Comedor",
			"Distribuidor",
			"Dormitorio",
			"Dormitorio 2",
			"Lavandería",
			"Baño",
		]
	},
	{
		id: 7,
		path: "caoba",
		name: "Modelo Caoba",
		src: [
			Caoba1,
			Caoba2,
			Caoba3,
		],
		description: "Caoba el modelo que te ofrece la comodidad y modernidad distribuída en dos plantas funcionales, con acabados minimalistas que te van a encantar",
		moreDescription: "Si estás en la búsqueda de un hogar que combine la practicidad con un diseño moderno y atractivo, Caoba es la elección perfecta. Estamos aquí para discutir cómo este modelo puede satisfacer tus necesidades y superar tus expectativas. No dudes en ponerte en contacto con nosotros para explorar más a fondo las maravillas que Caoba tiene reservadas para ti. ¡Esperamos con entusiasmo conocerte mejor!",
		price: 47150,
		features: [
			{
				plantaBaja: [
					"Ingreso",
					"Sala de estar",
					"Comedor",
					"Cocina",
					"Despensa",
					"Baño",
					"Dormitorio",
					"Lavado",
				],
				plantaAlta: [
					"Distribuidor",
					"Sala Familiar",
					"Dormitorio 1",
					"Vestidor",
					"Baño Privado",
					"Dormitorio 2",
					"Dormitorio 3",
					"Baño",
					"Balcón",
				]
			}
		]
	},
	{
		id: 8,
		path: "clasico",
		name: "Modelo Clasico",
		src: [
			Clasico1,
			Clasico2,
		],
		description: "El estilo del moderno Clásico ofrece una cómoda y funcional galeríaen la parte de ingreso que te permitirá gozar de momentos agradables en familia.",
		moreDescription: "Si buscas un hogar que equilibre el estilo contemporáneo con la practicidad, el Clásico es la elección ideal. Estamos aquí para explorar contigo cómo esta característica única puede complementar tu estilo de vida. No dudes en ponerte en contacto con nosotros para descubrir más sobre las comodidades excepcionales que el Clásico tiene para ofrecerte. ¡Esperamos con interés tu mensaje!",
		price: 15800,
		features: [
			"Ingreso",
			"Galería",
			"Baño",
			"Cocina",
			"Dormitorio",
			"Dormitorio 2",
			"Lavandería"
		]
	},
	{
		id: 9,
		path: "country",
		name: "Modelo Country",
		src: [
			Country1,
			Country2,
		],
		description: "El modelo Country te ofrece amplios ventanales para aprovechar la luz exterior natural además de una fachada con estilo minimalista que conquista a más de uno.",
		moreDescription: "Si estás en busca de un hogar que combine la luminosidad con un diseño minimalista atractivo, el Country es la elección perfecta. Estamos aquí para discutir cómo este modelo puede adaptarse a tus preferencias y necesidades específicas. No dudes en ponerte en contacto con nosotros para explorar más a fondo las características excepcionales que hacen del modelo Country una opción tan especial. ¡Esperamos saber de ti pronto!",
		price: 22560,
		features: [
			"Ingreso",
			"Sala de estar",
			"Cocina - Comedor",
			"Distribuidor",
			"Dormitorio",
			"Dormitorio 2",
			"Lavandería",
			"Baño",
			"Quincho",
		]
	},
	{
		id: 10,
		path: "dalia",
		name: "Modelo Dalia",
		src: [
			Dalia1,
			Dalia2,
		],
		description: "Dalia representa la innovación con la tendencia que marca las líneas rectas de su fachada del minimalismo contemporaneo.",
		moreDescription: "Si estás buscando un hogar que combine la innovación con la elegancia del minimalismo, Dalia es la elección perfecta. Estamos aquí para explorar contigo cómo este modelo puede reflejar tu estilo único. No dudes en ponerte en contacto con nosotros para descubrir más sobre las características excepcionales que hacen de Dalia una opción tan distinguida. ¡Esperamos con entusiasmo tu mensaje!",
		price: 30650,
		features: [
			"Ingreso",
			"Sala de estar",
			"Cocina",
			"Distribuidor",
			"Baño",
			"Dormitorio 1",
			"Dormitorio 2",
			"Dormitorio 3",
		]
	},
	{
		id: 11,
		path: "elite",
		name: "Modelo Elite",
		src: [
			Elite1,
			Elite2,
			Elite3,
		],
		description: "Elite considerado el modelo estrella de la línea confort, ofrece una excelente distribución, con finos detalles y un buen acabado.",
		moreDescription: "Si estás en la búsqueda de un hogar que redefina la comodidad con un toque de elegancia, Elite es la elección perfecta. Estamos aquí para discutir cómo este modelo puede adaptarse a tus necesidades y preferencias específicas. No dudes en ponerte en contacto con nosotros para explorar más a fondo las características excepcionales que hacen de Elite una opción tan destacada. ¡Esperamos con interés tu mensaje!",
		price: 43950,
		features: [
			{
				plantaBaja: [
					"Ingreso",
					"Sala de estar",
					"Comedor",
					"Cocina",
					"Garaje Techado",
					"Baño de Visitas",
					"Área de Servicio",
				],
				plantaAlta: [
					"Distribuidor",
					"Dormitorio 1",
					"Balcón",
					"Vestidor",
					"Baño Privado",
					"Dormitorio 2",
					"Dormitorio 3",
					"Baño",
				]
			}
		]
	},
	{
		id: 12,
		path: "garden",
		name: "Modelo Garden",
		src: [
			Garden1,
			Garden2,
			Garden3,
		],
		description: "Garden presenta línea discretas pero con mucho estilo, además de un jardín interior que representa la esencia de este modelo.",
		moreDescription: "Si estás en busca de un hogar que combine la elegancia discreta con la serenidad de un jardín interior, Garden es la elección perfecta. Estamos aquí para explorar contigo cómo este modelo puede reflejar tu estilo y crear un espacio armonioso. No dudes en ponerte en contacto con nosotros para descubrir más sobre las características excepcionales que hacen de Garden una opción tan distintiva. ¡Esperamos con entusiasmo tu mensaje!",
		price: 50280,
		features: [
			{
				plantaBaja: [
					"Ingreso",
					"Sala de estar",
					"Comedor",
					"Cocina",
					"Baño",
					"Área de Servicio",
				],
				plantaAlta: [
					"Distribuidor",
					"Dormitorio 1",
					"Balcón",
					"Vestidor",
					"Baño Privado",
					"Sala Familiar",
					"Dormitorio 2",
					"Dormitorio 3",
					"Baño",
				]
			}
		]
	},
	{
		id: 13,
		path: "luxury",
		name: "Modelo Luxury",
		src: [
			Luxury1,
			Luxury2,
			Luxury3,
		],
		description: "El modelo Luxury combina detalles en madera con texturas modernistas dando elegancia y presencia a un diseño minimalista de gran formato.",
		moreDescription: "Si buscas un hogar que eleve la experiencia de vivir con un toque de lujo y estilo, Luxury es la elección perfecta. Estamos aquí para explorar contigo cómo este modelo puede integrarse a tus preferencias y necesidades específicas. No dudes en ponerte en contacto con nosotros para descubrir más sobre las características excepcionales que hacen de Luxury una opción tan refinada. ¡Esperamos con interés tu mensaje!",
		price: 51300,
		features: [
			{
				plantaBaja: [
					"Ingreso",
					"Sala de estar",
					"Comedor",
					"Cocina",
					"Baño de Visita",
					"Área de Servicio",
					"Garaje Techado",
					"Quincho",
				],
				plantaAlta: [
					"Distribuidor",
					"Dormitorio 1",
					"Balcón",
					"Vestidor",
					"Baño Privado",
					"Sala Familiar",
					"Dormitorio 2",
					"Dormitorio 3",
					"Baño",
				]
			}
		]
	},
	{
		id: 14,
		path: "mediterraneo",
		name: "Modelo Mediterraneo",
		src: [
			Mediterraneo1,
			Mediterraneo2,
		],
		description: "Mediterraneo un modelo que combina el minimalismo con características coloniales, buscando ofrecer elegancia, modernismo y la comodidad que tu familia necesita para sentirse en casa.",
		moreDescription: "Si estás en la búsqueda de un hogar que ofrezca una síntesis armoniosa entre la tradición y la modernidad, Mediterráneo es la elección perfecta. Estamos aquí para explorar contigo cómo este modelo puede adaptarse a tus preferencias y crear un espacio que refleje tu estilo de vida único. No dudes en ponerte en contacto con nosotros para descubrir más sobre las características excepcionales que hacen de Mediterráneo una elección tan especial. ¡Esperamos con entusiasmo tu mensaje!",
		price: 26650,
		features: [
			"Ingreso",
			"Sala de estar",
			"Comedor",
			"Cocina",
			"Dormitorio 1",
			"Dormitorio 2",
			"Dormitorio 3",
			"Baño Privado",
			"Baño",
			"Área de servicio",
		]
	},
	{
		id: 15,
		path: "minimalista",
		name: "Modelo Minimalista",
		src: [
			Minimalista1,
			Minimalista2,
		],
		description: "El Modelo Minimalista otorga todas las comodidades necesarias en una vivienda moderna, funcional y con finos acabados en fachadas e interiores.",
		moreDescription: "Si buscas un hogar que combine la funcionalidad con un diseño minimalista de alta calidad, el Modelo Minimalista es la elección perfecta. Estamos aquí para explorar contigo cómo este modelo puede adaptarse a tus necesidades específicas y superar tus expectativas. No dudes en ponerte en contacto con nosotros para descubrir más sobre las características excepcionales que hacen del Modelo Minimalista una opción tan destacada. ¡Esperamos con interés tu mensaje!",
		price: 25930,
		features: [
			"Ingreso",
			"Sala de estar",
			"Comedor",
			"Cocina",
			"Dormitorio 1",
			"Dormitorio 2",
			"Dormitorio 3",
			"Baño",
		]
	},
	{
		id: 16,
		path: "nogal",
		name: "Modelo Nogal",
		src: [
			Nogal1,
			Nogal2,
			Nogal3,
		],
		description: "El modelo Nogal resalta en sus finos acabados con materiales de primera otorgando elegancia, calidad y estilo en su máxima impresión.",
		moreDescription: "Si estás en la búsqueda de un hogar que encapsule la excelencia en cada detalle, el Nogal es la elección perfecta. Estamos aquí para explorar contigo cómo este modelo puede adaptarse a tus preferencias y necesidades específicas. No dudes en ponerte en contacto con nosotros para descubrir más sobre las características excepcionales que hacen del modelo Nogal una opción tan distinguida. ¡Esperamos con entusiasmo tu mensaje!",
		price: 72980,
		features: [
			{
				plantaBaja: [
					"Ingreso",
					"Sala de estar",
					"Comedor",
					"Cocina",
					"Baño de visita",
					"Área de Servicio",
					"Garaje Techado",
				],
				plantaAlta: [
					"Distribuidor",
					"Dormitorio 1",
					"Baño Privado",
					"Vestidor",
					"Terraza",
					"Sala Familiar",
					"Dormitorio 2",
					"Balcón",
					"Dormitorio 3",
					"Baño",
				]
			}
		]
	},
	{
			id: 17,
			path: "petra",
			name: "Modelo Petra",
		src: [
			Petra1,
			Petra2,
		],
		description: "Petra el modelo de vivienda con casi 100 metros cuadrados de construcción es una alternativa económicamente accesible para familias grandes.",
		moreDescription: "Si estás en la búsqueda de un hogar que ofrezca amplitud sin comprometer tu presupuesto, Petra es la elección ideal. Estamos aquí para explorar contigo cómo este modelo puede adaptarse a las necesidades específicas de tu familia. No dudes en ponerte en contacto con nosotros para descubrir más sobre las características excepcionales que hacen de Petra una opción tan atractiva. ¡Esperamos con interés tu mensaje!",
		price: 23380,
		features: [
			"Ingreso",
			"Sala de estar",
			"Comedor",
			"Cocina",
			"Distribuidor",
			"Dormitorio 1",
			"Dormitorio 2",
			"Dormitorio 3",
			"Lavandería",
			"Baño",
		]
	},
	{
		id: 18,
		path: "sky",
		name: "Modelo Sky",
		src: [
			Sky1,
			Sky2,
			Sky3,
		],
		description: "El modelo Sky representa modernidad, confort y un inigualable estilo.",
		moreDescription: "Si estás en la búsqueda de un hogar que refleje la fusión perfecta entre la modernidad y el confort, el modelo Sky es la elección ideal. Estamos aquí para explorar contigo cómo este modelo puede adaptarse a tus preferencias y crear un espacio que refleje tu estilo de vida. No dudes en ponerte en contacto con nosotros para descubrir más sobre las características excepcionales que hacen de Sky una opción tan distinguida. ¡Esperamos con entusiasmo tu mensaje!",
		price: 51465,
		features: [
			{
				plantaBaja: [
					"Ingreso",
					"Sala de estar",
					"Comedor",
					"Cocina",
					"Baño",
					"Área de Servicio",
					"Dormitorio",
					"Quincho",
					"Galería",
				],
				plantaAlta: [
					"Distribuidor",
					"Dormitorio 1",
					"Balcón",
					"Vestidor",
					"Baño Privado",
					"Sala Familiar",
					"Dormitorio 2",
					"Dormitorio 3",
					"Baño",
				]
			}
		]
	},
	{
		id: 19,
		path: "vanguardia",
		name: "Modelo Vanguardia",
		src: [
			Vanguardia1,
			Vanguardia2,
			Vanguardia3,
		],
		description: "Vanguardia con dos plantas y más de 180 metros te brinda calidad y estilo en todos sus ambientes incluyendo un acogedor quincho para los fines de semana.",
		moreDescription: "Si estás en busca de un hogar que eleve tu calidad de vida con un toque de estilo distintivo, Vanguardia es la elección perfecta. Estamos aquí para explorar contigo cómo este modelo puede adaptarse a tus preferencias y necesidades específicas. No dudes en ponerte en contacto con nosotros para descubrir más sobre las características excepcionales que hacen de Vanguardia una opción tan destacada. ¡Esperamos con interés tu mensaje!",
		price: 47746,
		features: [
			{
				plantaBaja: [
					"Ingreso",
					"Sala de estar",
					"Comedor",
					"Cocina",
					"Baño",
					"Área de Servicio",
					"Quincho",
				],
				plantaAlta: [
					"Distibuidor",
					"Dormitorio 1",
					"Balcón",
					"Baño privado",
					"Sala Familiar",
					"Dormitorio 2",
					"Dormitorio 3",
					"Baño",
				]
			}
		]
	},
];
