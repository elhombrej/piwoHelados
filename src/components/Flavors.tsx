import anana from "/iceCreamFlavors/anana.png";
import arandanos from "/iceCreamFlavors/arandanos.png";
import cheesecake from "/iceCreamFlavors/cheesecake.png";
import chocolateItaliano from "/iceCreamFlavors/chocolateItaliano.png";
import chocolateSuizo from "/iceCreamFlavors/chocolateSuizo.png";
import cremaConPasasDeUvaAlRon from "/iceCreamFlavors/cremaConPasasDeUvaAlRon.png";
import cremaRusa from "/iceCreamFlavors/cremaRusa.png";
import dulceDeLecheGranizado from "/iceCreamFlavors/dulceDeLecheGranizado.png";
import ferreroR from "/iceCreamFlavors/ferreroR.png";
import frambueza from "/iceCreamFlavors/frambueza.png";
import chocolate from "/iceCreamFlavors/chocolate.png";
import frutilla from "/iceCreamFlavors/frutilla.png";
import frutosRojos from "/iceCreamFlavors/frutosRojos.png";
import limon from "/iceCreamFlavors/limon.png";
import mantecol from "/iceCreamFlavors/mantecol.png";
import maracuya from "/iceCreamFlavors/maracuya.png";
import menta from "/iceCreamFlavors/menta.png";
import moka from "/iceCreamFlavors/moka.png";
import nutella from "/iceCreamFlavors/nutella.png";
import oreo from "/iceCreamFlavors/oreo.png";
import pistacho from "/iceCreamFlavors/pistacho.png";
import sambayonConCereza from "/iceCreamFlavors/sambayonConCereza.png";
import superDulceDeLeche from "/iceCreamFlavors/superDulceDeLeche.png";
import tiramisu from "/iceCreamFlavors/tiramisu.png";
import tramontana from "/iceCreamFlavors/tramontana.png";
import vainilla from "/iceCreamFlavors/vainilla.png";
import cocoSplit from "/iceCreamFlavors/cocoSplit.png";
import bananaSplit from "/iceCreamFlavors/bananaSplit.png";
import chocolateBlanco from "/iceCreamFlavors/chocolateBlanco.png";
import chocolateHolandes from "/iceCreamFlavors/chocolateHolandes.png";
import dulceDeLeche from "/iceCreamFlavors/dulceDeLeche.png";
import durazno from "/iceCreamFlavors/durazno.png";
import kiwi from "/iceCreamFlavors/kiwi.png";
import manjarDeNuez from "/iceCreamFlavors/manjarDeNuez.png";
import uva from "/iceCreamFlavors/uva.png";
import araza from "/iceCreamFlavors/araza.png";
import cerbeza from "/iceCreamFlavors/cerbeza.png";
import fernet from "/iceCreamFlavors/fernet.png";
import higo from "/iceCreamFlavors/higo.png";
import mango from "/iceCreamFlavors/mango.png";
import pera from "/iceCreamFlavors/pera.png";
import sambayon from "/iceCreamFlavors/sambayon.png";
import bottleOrange from "/bottleOrange.png";
import bottleLightOrange from "/bottleLightOrange.png";
import bottleLemon from "/bottleLemon.png";
import bottleGreen from "/bottleGreen.png";
import bottlePurple from "/bottlePurple.png";
import bottleYellow from "/bottleYellow.png";
import bottleRed from "/bottleRed.png";
import shakeYellow from "/shakeYellow.png";
import shakeRed from "/shakeRed.png";
import shakeOrange from "/shakeOrange.png";

interface Flavors {
  name: string;
  image: string; // Supongo que aquí se almacenará la ruta de la imagen
  icons: string; // Supongo que aquí se almacenará el emoji relacionado con el producto
  hasNoTacc?: boolean; // Opcional: si el producto no tiene gluten
}

export const flavorsArrayNoSugarUy: Flavors[] = [
  { name: "Chocolate", image: chocolate, icons: "🍫" },
  { name: "Maracuyá", image: maracuya, icons: "🥭" },
  { name: "Frutilla", image: frutilla, icons: "🍓" },
  { name: "Limón", image: limon, icons: "🍋" },
  { name: "Vainilla", image: vainilla, icons: "🍦" },
];

export const flavorsArrayUy: Flavors[] = [
  { name: "Ananá", image: anana, icons: "🍍" },
  { name: "Arándanos", image: arandanos, icons: "🫐" },
  { name: "Cheesecake", image: cheesecake, icons: "🍰" },
  { name: "Chocolate Italiano", image: chocolateItaliano, icons: "🍫" },
  { name: "Chocolate Suizo", image: chocolateSuizo, icons: "🍫" },
  {
    name: "Crema con Pasas de Uva al Ron",
    image: cremaConPasasDeUvaAlRon,
    icons: "🍇 🥃",
  },
  { name: "Crema Rusa", image: cremaRusa, icons: "🍨" },
  {
    name: "Dulce de Leche Granizado",
    image: dulceDeLecheGranizado,
    icons: "🥛 🍫",
  },
  { name: "Ferrero Rocher", image: ferreroR, icons: "🍫" },
  { name: "Chocolate", image: chocolate, icons: "🍫" },
  { name: "Frambuesa", image: frambueza, icons: "🍇" },
  { name: "Frutilla", image: frutilla, icons: "🍓" },
  { name: "Frutos Rojos", image: frutosRojos, icons: "🍒 🍇 🍓" },
  { name: "Limón", image: limon, icons: "🍋" },
  { name: "Mantecol", image: mantecol, icons: "🧈" },
  { name: "Maracuyá", image: maracuya, icons: "🥭" },
  { name: "Menta", image: menta, icons: "🌿" },
  { name: "Moka", image: moka, icons: "☕" },
  { name: "Nutella", image: nutella, icons: "🌰" },
  { name: "Oreo", image: oreo, icons: "🍪", hasNoTacc: true },
  { name: "Pistacho", image: pistacho, icons: "🥜" },
  { name: "Sambayón con Cereza", image: sambayonConCereza, icons: "🍨 🍒" },
  { name: "Super Dulce de Leche", image: superDulceDeLeche, icons: "🥛" },
  { name: "Tiramisú", image: tiramisu, icons: "🍰", hasNoTacc: true },
  { name: "Tramontana", image: tramontana, icons: "🍨", hasNoTacc: true },
  { name: "Vainilla", image: vainilla, icons: "🍦" },
  { name: "Coco Split", image: cocoSplit, icons: "🥥 🥛" },
  { name: "Banana Split", image: bananaSplit, icons: "🍌 🥛" },
  { name: "Chocolate Blanco", image: chocolateBlanco, icons: "🍫" },
  { name: "Chocolate Holandés", image: chocolateHolandes, icons: "🍫" },
  { name: "Dulce De Leche", image: dulceDeLeche, icons: "🥛" },
  { name: "Durazno", image: durazno, icons: "🍑" },
  { name: "Uva", image: uva, icons: "🍇" },
  { name: "Kiwi", image: kiwi, icons: "🥝" },
  { name: "Manjar De Nuez", image: manjarDeNuez, icons: "🍫 🥜" },
  { name: "Arazá", image: araza, icons: "🥭" },
  { name: "Cerveza", image: cerbeza, icons: "🍺" },
  { name: "Fernet", image: fernet, icons: "🍹" },
  { name: "Higo", image: higo, icons: "🥭" },
  { name: "Mango", image: mango, icons: "🥭" },
  { name: "Pera", image: pera, icons: "🍐" },
  { name: "Sambayón", image: sambayon, icons: "🍨" },
];

export const flavorsArrayNoSugarEn: Flavors[] = [
  { name: "Chocolate", image: chocolate, icons: "🍫" },
  { name: "Passion Fruit", image: maracuya, icons: "🥭" },
  { name: "Strawberry", image: frutilla, icons: "🍓" },
  { name: "Lemon", image: limon, icons: "🍋" },
  { name: "Vanilla", image: vainilla, icons: "🍦" },
];

export const flavorsArrayEn: Flavors[] = [
  { name: "Pineapple", image: anana, icons: "🍍" },
  { name: "Blueberries", image: arandanos, icons: "🫐" },
  { name: "Cheesecake", image: cheesecake, icons: "🍰" },
  { name: "Italian Chocolate", image: chocolateItaliano, icons: "🍫" },
  { name: "Swiss Chocolate", image: chocolateSuizo, icons: "🍫" },
  {
    name: "Cream with Rum Raisins",
    image: cremaConPasasDeUvaAlRon,
    icons: "🍇 🥃",
  },
  { name: "Russian Cream", image: cremaRusa, icons: "🍨" },
  {
    name: "Granulated Dulce de Leche",
    image: dulceDeLecheGranizado,
    icons: "🥛 🍫",
  },
  { name: "Ferrero Rocher", image: ferreroR, icons: "🍫" },
  { name: "Chocolate", image: chocolate, icons: "🍫" },
  { name: "Raspberry", image: frambueza, icons: "🍇" },
  { name: "Strawberry", image: frutilla, icons: "🍓" },
  { name: "Red Berries", image: frutosRojos, icons: "🍒 🍇 🍓" },
  { name: "Lemon", image: limon, icons: "🍋" },
  { name: "Mantecol", image: mantecol, icons: "🧈" },
  { name: "Passion Fruit", image: maracuya, icons: "🥭" },
  { name: "Mint", image: menta, icons: "🌿" },
  { name: "Mocha", image: moka, icons: "☕" },
  { name: "Nutella", image: nutella, icons: "🌰" },
  { name: "Oreo", image: oreo, icons: "🍪", hasNoTacc: true },
  { name: "Pistachio", image: pistacho, icons: "🥜" },
  { name: "Sabayon with Cherry", image: sambayonConCereza, icons: "🍨 🍒" },
  { name: "Super Dulce de Leche", image: superDulceDeLeche, icons: "🥛" },
  { name: "Tiramisu", image: tiramisu, icons: "🍰", hasNoTacc: true },
  { name: "Tramontana", image: tramontana, icons: "🍨", hasNoTacc: true },
  { name: "Vanilla", image: vainilla, icons: "🍦" },
  { name: "Coco Split", image: cocoSplit, icons: "🥥 🥛" },
  { name: "Banana Split", image: bananaSplit, icons: "🍌 🥛" },
  { name: "White Chocolate", image: chocolateBlanco, icons: "🍫" },
  { name: "Dutch Chocolate", image: chocolateHolandes, icons: "🍫" },
  { name: "Dulce De Leche", image: dulceDeLeche, icons: "🥛" },
  { name: "Peach", image: durazno, icons: "🍑" },
  { name: "Grape", image: uva, icons: "🍇" },
  { name: "Kiwi", image: kiwi, icons: "🥝" },
  { name: "Nut Cream", image: manjarDeNuez, icons: "🍫 🥜" },
  { name: "Guava", image: araza, icons: "🥭" },
  { name: "Beer", image: cerbeza, icons: "🍺" },
  { name: "Fernet", image: fernet, icons: "🍹" },
  { name: "Fig", image: higo, icons: "🥭" },
  { name: "Mango", image: mango, icons: "🥭" },
  { name: "Pear", image: pera, icons: "🍐" },
  { name: "Sabayon", image: sambayon, icons: "🍨" },
];

export const flavorsArrayNoSugarBr: Flavors[] = [
  { name: "Chocolate", image: chocolate, icons: "🍫" },
  { name: "Maracujá", image: maracuya, icons: "🥭" },
  { name: "Morango", image: frutilla, icons: "🍓" },
  { name: "Limão", image: limon, icons: "🍋" },
  { name: "Baunilha", image: vainilla, icons: "🍦" },
];

export const flavorsArrayBr: Flavors[] = [
  { name: "Abacaxi", image: anana, icons: "🍍" },
  { name: "Mirtilos", image: arandanos, icons: "🫐" },
  { name: "Cheesecake", image: cheesecake, icons: "🍰" },
  { name: "Chocolate Italiano", image: chocolateItaliano, icons: "🍫" },
  { name: "Chocolate Suíço", image: chocolateSuizo, icons: "🍫" },
  {
    name: "Creme com Passas ao Rum",
    image: cremaConPasasDeUvaAlRon,
    icons: "🍇 🥃",
  },
  { name: "Creme Russo", image: cremaRusa, icons: "🍨" },
  {
    name: "Doce de Leite Granulado",
    image: dulceDeLecheGranizado,
    icons: "🥛 🍫",
  },
  { name: "Ferrero Rocher", image: ferreroR, icons: "🍫" },
  { name: "Chocolate", image: chocolate, icons: "🍫" },
  { name: "Framboesa", image: frambueza, icons: "🍇" },
  { name: "Morango", image: frutilla, icons: "🍓" },
  { name: "Frutas Vermelhas", image: frutosRojos, icons: "🍒 🍇 🍓" },
  { name: "Limão", image: limon, icons: "🍋" },
  { name: "Mantecol", image: mantecol, icons: "🧈" },
  { name: "Maracujá", image: maracuya, icons: "🥭" },
  { name: "Menta", image: menta, icons: "🌿" },
  { name: "Mocha", image: moka, icons: "☕" },
  { name: "Nutella", image: nutella, icons: "🌰" },
  { name: "Oreo", image: oreo, icons: "🍪", hasNoTacc: true },
  { name: "Pistache", image: pistacho, icons: "🥜" },
  { name: "Sabayon com Cereja", image: sambayonConCereza, icons: "🍨 🍒" },
  { name: "Super Doce de Leite", image: superDulceDeLeche, icons: "🥛" },
  { name: "Tiramisù", image: tiramisu, icons: "🍰", hasNoTacc: true },
  { name: "Tramontana", image: tramontana, icons: "🍨", hasNoTacc: true },
  { name: "Baunilha", image: vainilla, icons: "🍦" },
  { name: "Coco Split", image: cocoSplit, icons: "🥥 🥛" },
  { name: "Banana Split", image: bananaSplit, icons: "🍌 🥛" },
  { name: "Chocolate Branco", image: chocolateBlanco, icons: "🍫" },
  { name: "Chocolate Holandês", image: chocolateHolandes, icons: "🍫" },
  { name: "Doce de Leite", image: dulceDeLeche, icons: "🥛" },
  { name: "Pêssego", image: durazno, icons: "🍑" },
  { name: "Uva", image: uva, icons: "🍇" },
  { name: "Kiwi", image: kiwi, icons: "🥝" },
  { name: "Creme de Nozes", image: manjarDeNuez, icons: "🍫 🥜" },
  { name: "Araçá", image: araza, icons: "🥭" },
  { name: "Cerveja", image: cerbeza, icons: "🍺" },
  { name: "Fernet", image: fernet, icons: "🍹" },
  { name: "Figos", image: higo, icons: "🥭" },
  { name: "Manga", image: mango, icons: "🥭" },
  { name: "Pera", image: pera, icons: "🍐" },
  { name: "Sabayon", image: sambayon, icons: "🍨" },
];

export const juiceFlavorsArrayUy = [
  { name: "Durazno", image: bottleLightOrange, icons: "🍑" },
  { name: "Frutilla", image: bottleRed, icons: "🍓" },
  { name: "Naranja", image: bottleOrange, icons: "🍊" },
  { name: "Limon con Jengibre y Menta", image: bottleLemon, icons: "🍋 🫚 🌿" },
  { name: "Uva", image: bottlePurple, icons: "🍇" },
  { name: "Zanahoria Con Naranja", image: bottleOrange, icons: "🥕 🍊" },
  { name: "Naranja Con Banana", image: bottleLightOrange, icons: "🍊 🍌" },
  { name: "Anana", image: bottleYellow, icons: "🍍" },
  { name: "Mango", image: bottleYellow, icons: "🥭" },
  { name: "Arandanos Con Frutilla", image: bottlePurple, icons: "🫐 🍓" },
  { name: "Maracuya Con Mango", image: bottleYellow, icons: "🥭" },
  {
    name: "Apio Con Manzana Verde, Naranja y Jengibre",
    image: bottleGreen,
    icons: "🥬 🍏 🍊 🫚",
  },
  {
    name: "Espinaca con Kiwi, Naranja y Jengibre",
    image: bottleLemon,
    icons: "🥬 🥝 🍊 🫚",
  },
  {
    name: "Remolacha con Naranja y Zanahoria",
    image: bottleOrange,
    icons: "🥕 🍊",
  },
];

export const shakesFlavorsArrayUy = [
  { name: "Durazno", image: shakeOrange, icons: "🍑" },
  { name: "Frambuesa", image: shakeRed, icons: "🍇" },
  { name: "Frutilla", image: shakeRed, icons: "🍓" },
  { name: "Maracuyá", image: shakeOrange, icons: "🥭" },
  { name: "Ananá", image: shakeYellow, icons: "🍍" },
  { name: "Mango", image: shakeOrange, icons: "🥭" },
  { name: "Banana", image: shakeYellow, icons: "🍌" },
];

export const juiceFlavorsArrayBr = [
    { name: "Pêssego", image: bottleLightOrange, icons: "🍑" },
    { name: "Morango", image: bottleRed, icons: "🍓" },
    { name: "Laranja", image: bottleOrange, icons: "🍊" },
    { name: "Limão com Gengibre e Hortelã", image: bottleLemon, icons: "🍋 🫚 🌿" },
    { name: "Uva", image: bottlePurple, icons: "🍇" },
    { name: "Cenoura com Laranja", image: bottleOrange, icons: "🥕 🍊" },
    { name: "Laranja com Banana", image: bottleLightOrange, icons: "🍊 🍌" },
    { name: "Abacaxi", image: bottleYellow, icons: "🍍" },
    { name: "Manga", image: bottleYellow, icons: "🥭" },
    { name: "Mirtilo com Morango", image: bottlePurple, icons: "🫐 🍓" },
    { name: "Maracujá com Manga", image: bottleYellow, icons: "🥭" },
    {
      name: "Salsão com Maçã Verde, Laranja e Gengibre",
      image: bottleGreen,
      icons: "🥬 🍏 🍊 🫚",
    },
    {
      name: "Espinafre com Kiwi, Laranja e Gengibre",
      image: bottleLemon,
      icons: "🥬 🥝 🍊 🫚",
    },
    {
      name: "Beterraba com Laranja e Cenoura",
      image: bottleOrange,
      icons: "🥕 🍊",
    },
  ];
  
  export const shakesFlavorsArrayBr = [
    { name: "Pêssego", image: shakeOrange, icons: "🍑" },
    { name: "Amora", image: shakeRed, icons: "🍇" },
    { name: "Morango", image: shakeRed, icons: "🍓" },
    { name: "Maracujá", image: shakeOrange, icons: "🥭" },
    { name: "Abacaxi", image: shakeYellow, icons: "🍍" },
    { name: "Manga", image: shakeOrange, icons: "🥭" },
    { name: "Banana", image: shakeYellow, icons: "🍌" },
  ];
  
  export const juiceFlavorsArrayEn = [
    { name: "Peach", image: bottleLightOrange, icons: "🍑" },
    { name: "Strawberry", image: bottleRed, icons: "🍓" },
    { name: "Orange", image: bottleOrange, icons: "🍊" },
    { name: "Lemon with Ginger and Mint", image: bottleLemon, icons: "🍋 🫚 🌿" },
    { name: "Grape", image: bottlePurple, icons: "🍇" },
    { name: "Carrot with Orange", image: bottleOrange, icons: "🥕 🍊" },
    { name: "Orange with Banana", image: bottleLightOrange, icons: "🍊 🍌" },
    { name: "Pineapple", image: bottleYellow, icons: "🍍" },
    { name: "Mango", image: bottleYellow, icons: "🥭" },
    { name: "Blueberry with Strawberry", image: bottlePurple, icons: "🫐 🍓" },
    { name: "Passion Fruit with Mango", image: bottleYellow, icons: "🥭" },
    {
      name: "Celery with Green Apple, Orange and Ginger",
      image: bottleGreen,
      icons: "🥬 🍏 🍊 🫚",
    },
    {
      name: "Spinach with Kiwi, Orange and Ginger",
      image: bottleLemon,
      icons: "🥬 🥝 🍊 🫚",
    },
    {
      name: "Beetroot with Orange and Carrot",
      image: bottleOrange,
      icons: "🥕 🍊",
    },
  ];
  
  export const shakesFlavorsArrayEn = [
    { name: "Peach", image: shakeOrange, icons: "🍑" },
    { name: "Raspberry", image: shakeRed, icons: "🍇" },
    { name: "Strawberry", image: shakeRed, icons: "🍓" },
    { name: "Passion Fruit", image: shakeOrange, icons: "🥭" },
    { name: "Pineapple", image: shakeYellow, icons: "🍍" },
    { name: "Mango", image: shakeOrange, icons: "🥭" },
    { name: "Banana", image: shakeYellow, icons: "🍌" },
  ];
  