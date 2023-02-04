# treow-api

API for trees

## Tree Model

|             |   Type   |   Key   | Unique | Editable |
| ----------- | :------: | :-----: | :----: | :------: |
| ID          |  string  | primary |  true  |  false   |
| specie.ID   |  string  | foreign | false  |  false   |
| Titles      | string[] |         | false  |   true   |
| Location    |  string  |         | false  |   true   |
| width       |  number  |         | false  |   true   |
| diameter    |  number  |         | false  |   true   |
| age         |  number  |         | false  |   true   |
| description |   text   |         | false  |   true   |
| createdAt   |   date   |         | false  |  false   |
| Edited      |   date   |         | false  |  false   |

## Species Model

```ts
enum ConservationStatus {
	// Ectinct
	Ex = 'Extinct',
	Ew = 'Extinct in the Wild',
	// Threatened
	Cr = 'Criticaly Endangered',
	En = 'Endangered',
	Vu = 'Vulnerable',
	// Lower Risk
	Nt = 'Near Threatened',
	Cd = 'Conservation Dependent',
	Lc = 'Least Concern',
	// Other categories
	Dd = 'Data Deficient',
	Ne = 'Not Evaluated',
}
```

```ts
const Species: SpecieEntity[] = [
	{
		checked: true,
		cientificName: 'Ficus sycomorus',
		commonNames: ['Sicómoro'],
		description:
			'Puede medir hasta 20m de altura y 6m de anchura con una copa bastante espesa. La corteza es verde amarillenta y se exfolia en tiras que dejan aparecen en su interior otra corteza amarillenta. Como todas las higueras, el sicómoro contiene látex. Las hojas cordiformes (con forma acorazonada) tienen un color verde oscuro, son ásperas y miden unos 14cm de largo y unos 10cm de ancho y están dispuestas en espiral alrededor de la rama. Sobre su envés verde claro se ven los nervios prominentes. El peciolo pubescente mide de 0,5 a 3cm de longitud.',
		id: 'bc9b5c63-e129-4b70-9d66-f53f1dab603c',
		status: ConservationStatus.LC,
	},
	{
		checked: true,
		cientificName: 'Platanus mexicana',
		commonNames: ['Álamo Blanco'],
		description:
			'Se trata de un árbol caducifolio que alcanza entre 15 y 40m de alto, con un diámetro de hasta 2m, tronco derecho con manchas irregulares blancas originadas por la exfoliación de la corteza, de color pardo amarillenta con manchas blancuzcas a pardo rojizas; ramificación irregular, pelos dendríticos formando un indumento flocoso ferrugíneo en las ramas jóvenes. Hojas, yemas de 5mm de largo orientadas al interior cubiertas por estípulas foliáceas.',
		id: '6599c3bf-36e2-466c-a9cc-895958683fbc',
		status: ConservationStatus.LC,
	},
	{
		checked: true,
		cientificName: 'Ficus Pertusa',
		commonNames: ['Amatillo'],
		description:
			'Son árboles o arbustos, que alcanzan un tamaño de hasta 30m de alto, iniciándose como epífitos pero tornándose independientes; ramas jóvenes glabras, grises a café-amarillentas. Hojas elípticas a muy angostamente elípticas o lanceoladas, 5 a 12.5cm de largo y 2 a 5.5cm de ancho, acuminadas a atenuadas en el ápice, obtusas a agudas en la base, glabras, lisas, cartáceas y verdes a café claras cuando secas, 10 a 20 pares de nervios secundarios, muy débiles y difíciles de distinguir de los nervios intermedios, nervio submarginal débil, nervios terciarios inconspicuos; pecíolos 0.8 a 2.5cm de largo, glabros, café claros, estípulas 0.5 a 1.3cm de largo, glabras.',
		id: '1e33578b-3d6f-48a5-ad99-2aec90122fcf',
		status: ConservationStatus.LC,
	},
	{
		checked: true,
		cientificName: 'Cojoba arborea',
		commonNames: ['Frijolillo'],
		status: ConservationStatus.LC,
		description:
			'Árbol de hasta 35m de altura y 1m de Diámetro, fuste recto y cilíndrico que presenta ramas en la base. La copa es rala y dispersa, con follaje verde claro. La corteza es café oscuro a café verdoso. Las hojas son alternas y bipinnadas, y se caracterizan por tener una glandulita entre cada par de pinnas. Las hojas se encuentran compuestas por 10 a 15 pares de hojas secundarias o foliolos primarios, estas a su vez están compuestas por 20 a 40 pares de foliolos secundarios.',
		id: '83ee5de7-a6d2-430a-9839-3fe96bc8b532',
	},
	{
		checked: true,
		cientificName: 'Plumeria Rubra',
		commonNames: ['Franchipán'],
		status: ConservationStatus.LC,
		description:
			'Es un arbusto grande o arbolillo de 5 a 8m (puede alcanzar hasta 25) de hoja caduca con tronco recto, escasa ramificación y copa abierta e irregular. Las hojas, de haz verde brillante y más pálido en el envés, se disponen en espiral en los ápices de las ramas. Son simples, de 15 a 30cm de largo por entre 4 a 8cm de ancho, lanceoladas o elípticas y de margen entero. Las flores hermafroditas surgen en panículas en las axilas de las hojas nuevas. Miden entre 15 a 30cm, con sépalos verdosos y pétalos blancos con el centro amarillo pálido.',
		id: '06043092-19ac-4e7d-831c-ee5a6ec770c4',
	},
	{
		checked: true,
		cientificName: 'Ficus Carica',
		commonNames: ['Higuera'],
		status: ConservationStatus.LC,
		description:
			'Árbol o arbusto caducifolio de porte bajo, su altura máxima es de 7 a 8m. De copa muy abierta debido a su profusa ramificación, que a menudo surge casi a ras del suelo. La corteza es lisa y de color grisáceo. Las hojas, de 12 a 25cm de largo y 10 a 18cm de ancho, son profundamente lobuladas, formadas por 3 o 7 folíolos, de color verde brillante y textura áspera.',
		id: '3b25e1d6-f11a-45f0-80b7-7b265655170d',
	},
	{
		checked: true,
		cientificName: 'Cochlospermum vitifolium',
		commonNames: ['Rosa Amarilla'],
		status: ConservationStatus.LC,
		description:
			'Son plantas árboles o arbustos, que alcanzan un tamaño de 3 a 15m de alto. Hojas con 5 a 7 lobos elípticos a oblongos, acuminadas, subenteras a serradas, glabras o pubescentes en el envés. Panícula terminal amplia, flores actinomorfas, 8 a 12cm de ancho; pétalos ampliamente obovados, emarginados, amarillos; ovario 1-locular, con 5 placentas parietales. Cápsula suberecta a colgante, ampliamente ovada a obovada umbilicada, valva exterior de color café obscuro, gris o verdoso, afelpada o glabra, valva interna de color ocre a crema, glabra; semillas reniformes con tricomas blancos gosipinos.',
		id: '5aeae9a4-b83a-476e-b107-a71d58b91e15',
	},
	{
		checked: true,
		cientificName: 'Inga jinicuil',
		commonNames: ['Algodoncillo'],
		status: ConservationStatus.LC,
		description:
			'Árbol perennifolio o caducifolio, de 12 a 15 m (hasta 20 m) de altura, de 30 a 50 cm de diámetro a la altura del pecho. El tronco es recto y la copa extendida y redonda consiste de ramas erectas con denso follaje. La corteza es gris pálida y amarilla al corte. Las hojas son pinnadas, formadas por seis pinnas elípticas o lanceoladas, de 8 a 20 cm de largo, alternas, elípticas, lisas, de 8 a 11 cm de largo, lustrosas, puntiagudas.',
		id: '151fb75b-9c59-473e-bed8-9d7b799fba57',
	},
	{
		checked: true,
		cientificName: 'Taxodium huegelii',
		commonNames: ['Ahuehuete'],
		status: ConservationStatus.LC,
		description:
			'Son árboles longevos, que alcanzan los miles de años de antigüedad. Su origen se remonta a la Era Mesozoica, entre 100 a 200 millones de años, cuando las coníferas dominaban el paisaje y formaban impresionantes bosques primitivos. Taxodium huegelii es un árbol frondoso, con troncos de diámetros considerables entre 2 y 14m y alturas de hasta de 40m. Las hojas están ordenadas en espiral y yacen en dos filas horizontales superpuestas y son de uno a dos cm de largo de uno a dos mm de ancho. Las piñas son ovaladas, prácticamente esféricas de 1,5 a 2,5cm de largo y de 1 a 2cm de ancho, con escamas poligonales piramidales. Produce semillas todo el año, sobre todo entre agosto y noviembre.',
		id: '4b7f6bd3-be24-4504-a948-f1f3f387423b',
	},
	{
		checked: true,
		cientificName: 'Tabebuia Rosea',
		commonNames: ['Apamate'],
		status: ConservationStatus.LC,
		description:
			'Llega a medir de 6 a 10m de altura, aunque en su hábitat nativo puede superar los 25m. Tronco corto de corteza grisácea, algo fisurada. Hojas palmadas, compuestas de 3 a 5 foliolos elípticos a oblongos grandes (hasta 34 cm de largo). Las inflorescencias surgen en panículas terminales. Las flores tienen cáliz acampanado y bilabiado con pétalos rosa, lavanda o magenta. El fruto es una cápsula lineal, cilíndrica de 22 a 35cm de longitud y con 7 a 10 semillas aladas.',
		id: 'e9fe1168-f4c8-47cb-a6e4-9991f6eceb9a',
	},
	{
		checked: true,
		cientificName: 'Pinus devoniana',
		commonNames: ['Pino Blanco Mexicano'],
		status: ConservationStatus.LC,
		description:
			'Es un árbol de entre veinte y treinta metros de altura, copa irregular redondeada, corteza áspera y agrietada, ramas largas, colocadas irregularmente en el tallo, ramillas de color café oscuro muy ásperas. Hojas de 30 a 35cm, color verde claro brillante. Conos de 20 a 30cm, de largo por 12 a 15cm de ancho de color moreno opaco, madera blanca amarillenta, dura y pesada.',
		id: '78e12296-41b8-4710-af9e-7cfe98523aec',
	},
]
```

|                    |    Type    |   Key   | Unique | Editable |
| ------------------ | :--------: | :-----: | :----: | :------: |
| ID                 |   string   | primary |  true  |  false   |
| CientificName      |   string   |         |  true  |   true   |
| CommonsNames       |  string[]  |         | false  |   true   |
| ConservationStatus | StatusEnum |         | false  |  false   |
| Description        |    text    |         | false  |   true   |
| createdAt          |    date    |         | false  |  false   |
| Edited             |    date    |         | false  |  false   |

## Moments Model

|             |  Type  |   Key   | Unique | Editable |
| ----------- | :----: | :-----: | :----: | :------: |
| ID          | string | primary |  true  |  false   |
| Tree.ID     | string | foreign | false  |  false   |
| Pothos      | url[]  |         | false  |   true   |
| Time        |  date  |         | false  |  false   |
| Description |  text  |         | false  |   true   |
| createdAt   |  date  |         | false  |  false   |
| Edited      |  date  |         | false  |  false   |
