export interface Modelo {
	path: string;
	name: string;
	src: string[];
	description: string;
	price: number;
	id: number;
}

export const Modelos: Modelo[] = [
	{
		id: 1,
		path: "altamira",
		name: "Modelo Altamira",
		src: [
			"/media/images/pages/catalogo/altamira1.webp",
			"/media/images/pages/catalogo/altamira2.webp",
			"/media/images/pages/catalogo/altamira3.webp",
		],
		description: "El modelo Altamira rescata el diseño con amplios ventanales y una terraza con vista al jardín interior que brinda comodidad, espacio y estilo.",
		price: 54150,
	},
	{
		id: 2,
		path: "blue",
		name: "Modelo Blue",
		src: [
			"/media/images/pages/catalogo/blue1.webp",
			"/media/images/pages/catalogo/blue2.webp",
			"/media/images/pages/catalogo/blue3.webp",
		],
		description: "Blue luce trazos rectos y definidos con un imponente ingreso, amplias ventanales que proporcionan iluminación natural en todos sus ambientes y una combinación de texturas de alta gama.",
		price: 52450,
	},
	{
		id: 3,
		path: "brick",
		name: "Modelo Brick",
		src: [
			"/media/images/pages/catalogo/brick1.webp",
			"/media/images/pages/catalogo/brick0.webp",
		],
		description: "Brick luce un revistimiento de ladrillo visto en su fachada que lo hace un modelo muy particular, con una distribución eficiente, y los mejores acabados en su interior.",
		price: 29880,
	},
	{
		id: 4,
		path: "camelia",
		name: "Modelo Camelia",
		src: [
			"/media/images/pages/catalogo/camelia1.webp",
			"/media/images/pages/catalogo/camelia2.webp",
		],
		description: "Con una construcción estilo minimalista Camelia te ofrece confort y optimización de espacios para brindarte un hogar funcional y a un precio accesible.",
		price: 11900,
	},
	{
		id: 5,
		path: "campestre",
		name: "Modelo Campestre",
		src: [
			"/media/images/pages/catalogo/campestre1.webp",
			"/media/images/pages/catalogo/campestre2.webp",
		],
		description: "Campestre luce un acabado rústico en sus detalles de smadera vista con amplios ventanales y una cubierta de teja, que le dan el toque ideal para tu nuevo hogar",
		price: 29620,
	},
	{
		id: 6,
		path: "canela",
		name: "Modelo Canela",
		src: [
			"/media/images/pages/catalogo/canela1.webp",
			"/media/images/pages/catalogo/canela2.webp",
			"/media/images/pages/catalogo/canela3.webp",
		],
		description: "Canela es un modelo de vivienda con bastante aceptación en el mercado, tanto por la optimización de espacios como los acabados en la fachada.",
		price: 19900,
	},
	{
		id: 7,
		path: "caoba",
		name: "Modelo Caoba",
		src: [
			"/media/images/pages/catalogo/caoba1.webp",
			"/media/images/pages/catalogo/caoba2.webp",
			"/media/images/pages/catalogo/caoba3.webp",
		],
		description: "Caoba el modelo que te ofrece la comodidad y modernidad distribuída en dos plantas funcionales, con acabados minimalistas que te van a encantar",
		price: 47150,
	},
	{
		id: 8,
		path: "clasico",
		name: "Modelo Clasico",
		src: [
			"/media/images/pages/catalogo/clasico1.webp",
			"/media/images/pages/catalogo/clasico0.webp",
			"/media/images/pages/catalogo/clasico2.webp",
		],
		description: "El estilo del moderno Clásico ofrece una cómoda y funcional galeríaen la parte de ingreso que te permitirá gozar de momentos agradables en familia.",
		price: 15800,
	},
	{
		id: 9,
		path: "country",
		name: "Modelo Country",
		src: [
			"/media/images/pages/catalogo/country1.webp",
			"/media/images/pages/catalogo/country0.webp",
			"/media/images/pages/catalogo/country2.webp",
		],
		description: "El modelo Country te ofrece amplios ventanales para aprovechar la luz exterior natural además de una fachada con estilo minimalista que conquista a más de uno.",
		price: 22560,
	},
	{
		id: 10,
		path: "dalia",
		name: "Modelo Dalia",
		src: [
			"/media/images/pages/catalogo/dalia1.webp",
			"/media/images/pages/catalogo/dalia0.webp",
			"/media/images/pages/catalogo/dalia2.webp",
		],
		description: "Dalia representa la innovación con la tendencia que marca las líneas rectas de su fachada del minimalismo contemporaneo.",
		price: 30650,
	},
	{
		id: 11,
		path: "elite",
		name: "Modelo Elite",
		src: [
			"/media/images/pages/catalogo/elite1.webp",
			"/media/images/pages/catalogo/elite0.webp",
			"/media/images/pages/catalogo/elite2.webp",
			"/media/images/pages/catalogo/elite3.webp",
		],
		description: "Elite considerado el modelo estrella de la línea confort, ofrece una excelente distribución, con finos detalles y un buen acabado.",
		price: 43950,
	},
	{
		id: 12,
		path: "garden",
		name: "Modelo Garden",
		src: [
			"/media/images/pages/catalogo/garden1.webp",
			"/media/images/pages/catalogo/garden2.webp",
			"/media/images/pages/catalogo/garden3.webp",
		],
		description: "Garden presenta línea discretas pero con mucho estilo, además de un jardín interior que representa la esencia de este modelo.",
		price: 50280,
	},
	{
		id: 13,
		path: "luxury",
		name: "Modelo Luxury",
		src: [
			"/media/images/pages/catalogo/luxury1.webp",
			"/media/images/pages/catalogo/luxury2.webp",
			"/media/images/pages/catalogo/luxury3.webp",
		],
		description: "El modelo Luxury combina detalles en madera con texturas modernistas dando elegancia y presencia a un diseño minimalista de gran formato.",
		price: 51300,
	},
	{
		id: 14,
		path: "mediterraneo",
		name: "Modelo Mediterraneo",
		src: [
			"/media/images/pages/catalogo/mediterraneo1.webp",
			"/media/images/pages/catalogo/mediterraneo0.webp",
			"/media/images/pages/catalogo/mediterraneo2.webp",
		],
		description: "Mediterraneo un modelo que combina el minimalismo con características coloniales, buscando ofrecer elegancia, modernismo y la comodidad que tu familia necesita para sentirse en casa.",
		price: 26650,
	},
	{
		id: 15,
		path: "minimalista",
		name: "Modelo Minimalista",
		src: [
			"/media/images/pages/catalogo/minimalista1.webp",
			"/media/images/pages/catalogo/minimalista0.webp",
			"/media/images/pages/catalogo/minimalista2.webp",
		],
		description: "El Modelo Minimalista otorga todas las comodidades necesarias en una vivienda moderna, funcional y con finos acabados en fachadas e interiores.",
		price: 25930,
	},
	{
		id: 16,
		path: "nogal",
		name: "Modelo Nogal",
		src: [
			"/media/images/pages/catalogo/nogal1.webp",
			"/media/images/pages/catalogo/nogal2.webp",
			"/media/images/pages/catalogo/nogal3.webp",
		],
		description: "El modelo Nogal resalta en sus finos acabados con materiales de primera otorgando elegancia, calidad y estilo en su máxima impresión.",
		price: 72980,
	},
	{
			id: 17,
			path: "petra",
			name: "Modelo Petra",
		src: [
			"/media/images/pages/catalogo/petra1.webp",
			"/media/images/pages/catalogo/petra0.webp",
			"/media/images/pages/catalogo/petra2.webp",
		],
		description: "Petra el modelo de vivienda con casi 100 metros cuadrados de construcción es una alternativa económicamente accesible para familias grandes.",
		price: 23380,
	},
	{
		id: 18,
		path: "sky",
		name: "Modelo Sky",
		src: [
			"/media/images/pages/catalogo/sky1.webp",
			"/media/images/pages/catalogo/sky2.webp",
			"/media/images/pages/catalogo/sky3.webp",
		],
		description: "El modelo Sky representa modernidad, confort y un inigualable estilo.",
		price: 51465,
	},
	{
		id: 19,
		path: "vanguardia",
		name: "Modelo Vanguardia",
		src: [
			"/media/images/pages/catalogo/vanguardia1.webp",
			"/media/images/pages/catalogo/vanguardia2.webp",
			"/media/images/pages/catalogo/vanguardia3.webp",
		],
		description: "Vanguardia con dos plantas y más de 180 metros te brinda calidad y estilo en todos sus ambientes incluyendo un acogedor quincho para los fines de semana.",
		price: 47746,
	},
];
