/* ================================================================
CONFIGURACIÓN  ·  EDITA AQUÍ
Todo lo que ve la clienta sale de este bloque: nombre de la
tienda, contacto, productos, opciones, precios y textos.
Para añadir un producto nuevo, copia uno de los bloques de
PRODUCTOS y cambia sus datos: la web lo pinta sola.
================================================================ */

export const TIENDA = {
nombre:    'Bisnaj',
lema:      'Accesorios de boda bordados a mano',
anuncio:   'Cada pieza se hace a mano y bajo pedido · Agenda 2026–2027 abierta',
email:     'hola@biznaj.es',      // ← tu email real
whatsapp:  '34661714720',                            // ← nº con prefijo, ej. '34612345678' (si está vacío, el botón usa el email)
instagram: '@bisnaj_',              // ← tu Instagram
legal:     '© 2026 · Recomendamos hacer los pedidos con al menos tres meses de antelación.'
};

/* Colores de hilo disponibles (compartidos por todos los productos) */
export const HILOS = [
{ id:'beige',    nombre:'Beige',           color:'#C3A878' },
{ id:'dorado',   nombre:'Dorado',          color:'#A67C2E' },
{ id:'empolv',   nombre:'Rosa empolvado',  color:'#C2938F' },
{ id:'granate',  nombre:'Granate',         color:'#7C2F3E' },
{ id:'oliva',    nombre:'Verde oliva',     color:'#5A6248' },
{ id:'marino',   nombre:'Azul marino',     color:'#2E3A5C' }
];

export const PRODUCTOS = [

/* ---------- 1 · CINTA DEL RAMO (completa) ---------- */
{
	id:'cinta',
	pestana:'Cinta del ramo',
	nombre:'Cinta del ramo',
	precioBase: 45,
	descripcion: [
	'Cinta de algodón para el ramo de novia, bordada a mano con vuestras iniciales.',
	'El diseño de florecitas es fijo y siempre va en los mismos tonos; el color de las iniciales lo eliges tú.'
	],
	opciones: [
	{ id:'largo', etiqueta:'Largo de la cinta', tipo:'botones', defecto:'corta',
		valores:[
		{ id:'corta', nombre:'Corta', detalle:'70 cm',  precio:0 },
		{ id:'larga', nombre:'Larga', detalle:'140 cm', precio:10 }
		]},
	{ id:'hilo', etiqueta:'Color del hilo', tipo:'muestras', defecto:'granate', valores:HILOS },
	{ id:'posicion', etiqueta:'Posición del bordado', tipo:'botones', defecto:'centro',
		valores:[
		{ id:'centro',  nombre:'Centro',  precio:0 },
		{ id:'extremo', nombre:'Extremo', precio:0 }
		]},
	{ id:'iniciales', etiqueta:'Iniciales', tipo:'texto', placeholder:'M & J', max:14,
		ayuda:'Tal y como quieras que se borden.' },
	{ id:'fecha', etiqueta:'Fecha de la boda', tipo:'texto', placeholder:'12 · 09 · 2026', max:16,
		ayuda:'Informativa: solo se borda si añades el extra de fecha bordada.' }
	],
	extras: [
	{ id:'fechaBordada', nombre:'Fecha bordada', precio:5 },
	{ id:'puntilla',     nombre:'Puntilla de encaje en los bordes', precio:8 }
	],
	fotos: [],           /* ← rutas de tus fotos, ej. ['fotos/cinta-1.jpg', ...] */
	info: {
	'Más info':
		'100% algodón. La cinta larga mide **140 cm** de largo y la corta **70 cm**, ambas de 3,5 cm de ancho aproximadamente.\n' +
		'Bordada a mano y personalizada con las iniciales de la pareja o de la novia. El diseño del bordado no es personalizable.\n' +
		'Las fotos pueden mostrar una ligera variación de color respecto a la pieza real.',
	'Plazos':
		'Los pedidos de boda se envían **un mes antes** de la fecha. El tiempo de elaboración es de unos **15 días laborables** y el envío tarda unas 48 horas.\n' +
		'Si tu pedido es urgente, escríbenos antes de encargarlo.',
	'Cambios y devoluciones':
		'Al tratarse de piezas personalizadas (iniciales, fechas, nombres), **no se admiten cambios ni devoluciones**.\n' +
		'Si hubiera que modificar una pieza ya bordada, el encargo tendría que repetirse con el mismo coste.'
	}
},

/* ---------- 2 · COJÍN DE LAS ALIANZAS (borrador) ---------- */
{
	id:'cojin',
	pestana:'Cojín de las alianzas',
	nombre:'Cojín de las alianzas',
	borrador:true,
	icono:'cojin',
	precioBase: 55,
	descripcion: [
	'Cojín portador de alianzas en tela natural, con las iniciales bordadas y lazo para sujetar los anillos.',
	'Sección en borrador: iremos definiendo juntas las opciones y los precios.'
	],
	opciones: [
	{ id:'tela', etiqueta:'Tela', tipo:'botones', defecto:'lino',
		valores:[
		{ id:'lino', nombre:'Lino natural', precio:0 },
		{ id:'raso', nombre:'Raso marfil', precio:0 }
		]},
	{ id:'hilo', etiqueta:'Color del hilo', tipo:'muestras', defecto:'beige', valores:HILOS },
	{ id:'iniciales', etiqueta:'Iniciales', tipo:'texto', placeholder:'M & J', max:14 }
	],
	extras: [ { id:'fechaBordada', nombre:'Fecha bordada', precio:5 } ],
	fotos: [],
	info: {
	'Más info':'Medidas y materiales pendientes de definir.',
	'Plazos':'Elaboración estimada de 15 días laborables. Envío en 48 horas.',
	'Cambios y devoluciones':'Piezas personalizadas: no se admiten cambios ni devoluciones.'
	}
},

/* ---------- 3 · BOLSA PARA LAS ARRAS (borrador) ---------- */
{
	id:'arras',
	pestana:'Bolsa para las arras',
	nombre:'Bolsa para las arras',
	borrador:true,
	icono:'bolsa',
	precioBase: 40,
	descripcion: [
	'Bolsita artesanal para las trece arras, con cierre de cordón y bordado personalizado.',
	'Sección en borrador: iremos definiendo juntas las opciones y los precios.'
	],
	opciones: [
	{ id:'tela', etiqueta:'Tela', tipo:'botones', defecto:'lino',
		valores:[
		{ id:'lino', nombre:'Lino natural', precio:0 },
		{ id:'raso', nombre:'Raso marfil', precio:0 }
		]},
	{ id:'hilo', etiqueta:'Color del hilo', tipo:'muestras', defecto:'dorado', valores:HILOS },
	{ id:'iniciales', etiqueta:'Iniciales', tipo:'texto', placeholder:'M & J', max:14 }
	],
	extras: [ { id:'fechaBordada', nombre:'Fecha bordada', precio:5 } ],
	fotos: [],
	info: {
	'Más info':'Medidas y materiales pendientes de definir.',
	'Plazos':'Elaboración estimada de 15 días laborables. Envío en 48 horas.',
	'Cambios y devoluciones':'Piezas personalizadas: no se admiten cambios ni devoluciones.'
	}
},

/* ---------- 4 · ABANICO (borrador) ---------- */
{
	id:'abanico',
	pestana:'Abanico',
	nombre:'Abanico de novia',
	borrador:true,
	icono:'abanico',
	precioBase: 50,
	descripcion: [
	'Abanico con país de tela y detalle bordado, pensado para acompañar a la novia o como regalo.',
	'Sección en borrador: iremos definiendo juntas las opciones y los precios.'
	],
	opciones: [
	{ id:'varillas', etiqueta:'Varillas', tipo:'botones', defecto:'clara',
		valores:[
		{ id:'clara',  nombre:'Madera clara',  precio:0 },
		{ id:'oscura', nombre:'Madera oscura', precio:0 }
		]},
	{ id:'hilo', etiqueta:'Color del hilo', tipo:'muestras', defecto:'empolv', valores:HILOS },
	{ id:'iniciales', etiqueta:'Iniciales', tipo:'texto', placeholder:'M & J', max:14 }
	],
	extras: [ { id:'fechaBordada', nombre:'Fecha bordada', precio:5 } ],
	fotos: [],
	info: {
	'Más info':'Medidas y materiales pendientes de definir.',
	'Plazos':'Elaboración estimada de 15 días laborables. Envío en 48 horas.',
	'Cambios y devoluciones':'Piezas personalizadas: no se admiten cambios ni devoluciones.'
	}
}
];