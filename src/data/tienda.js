/* ================================================================
CONFIGURACIÓN  ·  EDITA AQUÍ
Todo lo que ve la clienta sale de este bloque: nombre de la
tienda, contacto, productos, opciones, precios y textos.
Para añadir un producto nuevo, copia uno de los bloques de
PRODUCTOS y cambia sus datos: la web lo pinta sola.

Tipos de opción disponibles:
  · botones   → elegir uno entre varios (pastillas). Si algún valor
                lleva `nota`, se pintan en lista con la nota debajo.
  · muestras  → círculos de color. Con `otro:{…}` se añade la
                opción "Otro" que despliega un campo de texto.
  · texto     → campo de texto. `obligatorio:true` lo marca con *
                y se comprueba antes de enviar el pedido.
                `precio:X` suma X € solo si se rellena (ej. la frase).
  · check     → casilla suelta con recargo (ej. detalles en dorado).
  · titulo    → encabezado de sección (ej. "¡Vivan los novios!").
================================================================ */

export const TIENDA = {
nombre:    'Bisnaj',
lema:      'Accesorios de boda bordados a mano',
logo:	   'logo.png',  // ← nombre del archivo dentro de src/assets (déjalo en '' para pintar solo el nombre)
anuncio:   'Cada pieza se hace a mano y bajo pedido · Agenda 2026–2027 abierta',
email:     'hola@biznaj.es',      // ← tu email real (¡confirmar si es con S o con Z!)
whatsapp:  '34661714720',                            // ← nº con prefijo, ej. '34612345678' (si está vacío, el botón usa el email)
instagram: '@bisnaj_',              // ← tu Instagram
legal:     '© 2026 · Recomendamos hacer los pedidos con al menos tres meses de antelación.'
};

/* Colores de hilo disponibles (los usan los productos en borrador) */
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
	'Cinta de lino para ramos bordada a mano y completamente personalizada.'
	],
	opciones: [

	/* --- largo --- */
	{ id:'largo', etiqueta:'Largo de la cinta', tipo:'botones', defecto:'corta',
		valores:[
		{ id:'corta',   nombre:'Corta',   detalle:'70 cm',  precio:0 },
		{ id:'mediana', nombre:'Mediana', detalle:'120 cm', precio:5 },
		{ id:'larga',   nombre:'Larga',   detalle:'150 cm', precio:10 }
		]},

	/* --- color del lino (la cinta) --- */
	{ id:'lino', etiqueta:'Color del lino', tipo:'muestras', defecto:'blanco-roto',
		otro:{ placeholder:'Cuéntanos qué color tienes en mente' },
		valores:[
		{ id:'blanco-roto', nombre:'Blanco roto',   color:'#F4EFE3' },
		{ id:'beige',       nombre:'Beige rústico', color:'#D8C6A6' },
		{ id:'mostaza',     nombre:'Mostaza',       color:'#C89B3C' },
		{ id:'oliva',       nombre:'Verde oliva',   color:'#7E7C52' },
		{ id:'celeste',     nombre:'Azul celeste',  color:'#A9C3D6' },
		{ id:'granate',     nombre:'Granate',       color:'#7C2F3E' }
		]},

	/* --- color del hilo de iniciales y fecha --- */
	{ id:'hilo', etiqueta:'Color de las iniciales y la fecha', tipo:'muestras', defecto:'verde-oscuro',
		otro:{ placeholder:'Cuéntanos qué color tienes en mente' },
		valores:[
		{ id:'verde-oscuro', nombre:'Verde oscuro',     color:'#31462F' },
		{ id:'burdeos',      nombre:'Burdeos',          color:'#6B2737' },
		{ id:'chocolate',    nombre:'Marrón chocolate', color:'#4E3524' }
		]},

	/* --- los novios --- */
	{ tipo:'titulo', texto:'¡Vivan los novios!' },

	{ id:'iniciales', etiqueta:'¿Iniciales o nombres completos?', tipo:'texto', obligatorio:true,
		placeholder:'M & J · María y Javier', max:40,
		ayuda:'Tal y como quieras que se borden.' },

	{ id:'fecha', etiqueta:'Fecha', tipo:'texto', obligatorio:true,
		placeholder:'12 · 09 · 2026', max:16 },

	/* --- motivos del bordado --- */
	{ tipo:'titulo', texto:'Motivos de la cinta' },

	{ id:'motivos', etiqueta:'Motivos de la cinta', tipo:'texto', obligatorio:true, max:80,
		ayuda:'Ideas: margaritas, hortensias, ramitas…' },

	{ id:'motivosColores', etiqueta:'Colores de los motivos', tipo:'texto', obligatorio:true, max:80 },

	{ id:'dorado',  etiqueta:'Detalles en dorado (estrellas, luna…)', tipo:'check', precio:5 },
	{ id:'cuentas', etiqueta:'Cuentas', tipo:'check', precio:2.5 },

	{ id:'frase', etiqueta:'Frase', tipo:'texto', precio:2.5, max:60,
		ayuda:'Si añades una frase, se borda en un extremo y las iniciales y la fecha van juntas en el otro.' },

	/* --- acabado --- */
	{ id:'acabado', etiqueta:'Acabado de la cinta', tipo:'botones', defecto:'simple',
		valores:[
		{ id:'simple', nombre:'Cinta simple', precio:0,
			nota:'Por detrás se ve el revés del bordado, ¡que hacemos con todo el cariño y cuidado!' },
		{ id:'doble',  nombre:'Cinta doble',  precio:5,
			nota:'Forrada para tapar el revés del bordado.' }
		]}
	],

	/* Cuadro de observaciones (va justo antes del precio final) */
	observaciones:{
	etiqueta:'Observaciones',
	placeholder:'¿Algo que quieras comentarnos? Alguna frase, guiño a alguien especial, inspiración en algún tema…'
	},

	/* Bloque de envío (va después del precio final) */
	envio:{
	etiqueta:'Envío',
	pregunta:'¿Necesitas que te lo enviemos?',
	placeholder:'Nombre y apellidos, calle y número, código postal, ciudad y teléfono de contacto',
	ayuda:'Costes de envío no incluidos.'
	},

	fotos: [],           /* ← rutas de tus fotos, ej. ['fotos/cinta-1.jpg', ...] */
	info: {
	'Más info':
		'Cinta de lino desflecado bordada a mano, de 4 cm de ancho aproximadamente y completamente personalizada.',
	'Cambios y devoluciones':
		'Al tratarse de piezas personalizadas (iniciales, fechas, nombres), **no se admiten cambios ni devoluciones**.'
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
	'Cambios y devoluciones':'Piezas personalizadas: no se admiten cambios ni devoluciones.'
	}
}
];