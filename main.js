const div1 = document.getElementById("1");
const ingresar = document.getElementById("name");
const formulario = document.getElementById("boton");
formulario.addEventListener("click", function (event) {
   event.preventDefault();
    elementoEncontrado();
   
  
});

function elementoEncontrado() {
  var elementoIngresado = ingresar.value;
  var elementoBuscado = elementoIngresado.toUpperCase();
  myElements = ["NADA", "HIDROGENO", "HELIO", "LITIO", "BERILIO", "BORO", "CARBONO", "NITROGENO", "OXIGENO", "FLUOR", "NEON", "SODIO", "MAGNESIO", "ALUMINIO", "SILICIO", "FOSFORO", "AZUFRE", "CLORO", "ARGON", "POTASIO", "CALCIO", "ESCANDIO", "TITANIO", "VANADIO", "CROMO", "MANGANESO", "HIERRO", "COBALTO", "NIQUEL", "COBRE", "CINC", "GALIO", "GERMANIO", "ARSENICO", "SELENIO", "BROMO", "KRIPTON", "RUBIDIO", "ESTROCIO", "ITRIO", "CIRCONIO", "NIOBIO", "MOLIBDENO", "TECNECIO", "RUTENIO", "RODIO", "PALADIO", "PLATA", "CADMIO", "INDIO", "ESTAÑO", "ANTIMONIO", "TELURIO", "YODO", "XENON", "CESIO", "BARIO", "LANTANO", "CERIO", "PRASEODIMIO", "NEODIMIO", "PROMETIO", "SAMARIO", "EURIPIO", "GADOLINIO", "TERBIO", "DISPROSIO", "HOLMIO", "ERBIO", "TULIO", "ITERBIO", "LUTECIO", "HAFNIO", "TANTALO", "VOLFRAMIO", "RENIO", "OSMIO", "IRIDIO", "PLATINO", "ORO", "MERCURIO", "TALIO", "PLOMO", "BISMUTO", "POLONIO", "ASTATO", "RADON", "FRANCIO", "RADIO", "ACTINIO", "TORIO", "PROTACTINIO", "URANIO", "NEPTUNIO", "PLUTONIO", "AMERICIO", "CURIO", "BERQUELIO", "CALIFORNIO", "EINSTENIO", "FERMIO", "MENDELEVIO", "NOBELIO", "LAURENCIO", "RUTHERFORDIO", "DUBNIO", "SEABORGIO", "BOHRIO", "HASSIO", "MEITNERIO", "DARMSTATIO", "ROENTGENIO", "COPERNICIO", "NIHONIO", "FLEROVIO", "MOSCOVIO", "LIVERMORIO", "TENESO", "OGANESON"];
  simbolo = ["NADA", "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sn", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"];
  mAtomica = ["NADA", 1, 4, 6.9, 9, 10.8, 12, 14, 15.9, 19, 20.2, 23, 24.3, 27, 28.1, 31, 32.1, 35.5, 39.9, 39.1, 40.1, 45, 47.9, 50.9, 52, 54.9, 55.8, 58.9, 58.7, 63.5, 65.4, 69.7, 72.6, 74.9, 79, 79.9, 83.8, 85.5, 87.6, 88.9, 91.2, 92.9, 95.9, 99, 101.1, 102.9, 106.4, 107.9, 112.4, 118.7, 118.7, 121.8, 127.6, 126.9, 131.3, 132.9, 137.3, 138.9, 140.1, 140.9, 144.2, 147, 150.3, 152, 157.2, 158.9, 162.5, 164.9, 167.3, 168.9, 173, 175, 178.5, 180.9, 183.8, 186.2, 190.2, 192.2, 195.1, 197, 200.6, 204.4, 207.2, 209.2, 210, 210, 222, 233, 266, 227, 232, 231, 238, 237, 242, 243, 247, 247, 251, 252, 257, 256, 259, 262, 261.1, 262.1, 263.1, 264.1, 277, 268, 271, 272, 285, 284, 289, 288, 292, 294, 294];
  
  if (elementoBuscado > 0) {
    div1.innerHTML = (myElements[elementoBuscado] + "<br/>" + "Simbolo: " + simbolo[elementoBuscado] + "<br/>" + "N° Atomico: " + elementoBuscado + "<br/>" + "Masa Atomica: " + mAtomica[elementoBuscado] + "<br/>" + "N° Neutrones: " + Math.round(mAtomica[elementoBuscado] - elementoBuscado));
  } else {
    const result = myElements.indexOf(elementoBuscado);
    div1.innerHTML = (myElements[result] + "<br/>" + "Simbolo: " + simbolo[result] + "<br/>" + "N° Atomico: " + result + "<br/>" + "Masa Atomica: " + mAtomica[result] + "<br/>" + "N° Neutrones: " + Math.round(mAtomica[result] - result));
  };
};