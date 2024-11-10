const direList = document.getElementById('dire-list');
const direEntries = [
    { filename: 'Dire1', displayName: 'GERBERT MONZÓN' },
    { filename: 'Dire2', displayName: 'KENNY MURCIA' },
    { filename: 'Dire3', displayName: 'JORGE REJOPACHI' },
    { filename: 'Dire4', displayName: 'MAGDALY QUIEM' },
    { filename: 'Dire5', displayName: 'EDDUARDO HERNÁNDEZ' },
    { filename: 'Dire6', displayName: 'ROSSANA BAUTISTA' },
    { filename: 'Dire7', displayName: 'KARLA FLORES' },
    { filename: 'Dire8', displayName: 'JUAN CHAVAJAY' },
    { filename: 'Dire9', displayName: 'DIEGO SANDOVAL' },
    { filename: 'Dire10', displayName: 'OSEAS XOT' },
    { filename: 'Dire11', displayName: 'HÉCTOR GIRÓN' },
    { filename: 'Dire12', displayName: 'FERNANDO MONTOYA' },
    { filename: 'Dire13', displayName: 'LOURDES CHUQUIEJ' },
    { filename: 'Dire14', displayName: 'CARLOS MAZARIEGOS' },
    { filename: 'Dire15', displayName: 'LUIS GÓMEZ' },
    { filename: 'Dire16', displayName: 'ANTONY NAVARRO' },
    { filename: 'Dire17', displayName: 'ANA GUARCAX' },
    { filename: 'Dire18', displayName: 'JORGE ROSAL' },
    { filename: 'Dire19', displayName: 'MARÍA LÓPEZ' },
    { filename: 'Dire20', displayName: 'CRISTIAN FIGUEROA' },
    { filename: 'Dire21', displayName: 'GERSON LÓPEZ' },
    { filename: 'Dire22', displayName: 'SERGIO MENDEZ' },
    { filename: 'Dire23', displayName: 'NERY CONTRERAS' },
    { filename: 'Dire24', displayName: 'RUDY MARROQUIN' },
    { filename: 'Dire25', displayName: 'SHEYLA TREJO' },
    { filename: 'Dire26', displayName: 'AVEREL CASTILLO' },
    { filename: 'Dire27', displayName: 'CHRISTIAN LÓPEZ' },
    { filename: 'Dire28', displayName: 'JUAN RODRÍGUEZ' },
    { filename: 'Dire29', displayName: 'CHRISTIAN MADRID' },
    { filename: 'Dire30', displayName: 'LEONEL SAZO' },
    { filename: 'Dire31', displayName: 'JUAN CALEL' },
    { filename: 'Dire32', displayName: 'IRVIN BARRERA' },
    // Agrega todos los demás objetos con los nombres que quieras mostrar...
];

direEntries.forEach(dire => {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    const img = document.createElement('img');
    img.src = 'logo.png'; // Cambia la ruta si la imagen está en otra carpeta
    img.alt = 'Logo';
    img.classList.add('logo-img'); // Clase para aplicar estilo adicional si es necesario

    const link = document.createElement('a');
    link.href = `${dire.filename.replace(/ /g, '-')}.html`;
    link.textContent = dire.displayName; // Mostrar el nombre personalizado

    gridItem.appendChild(img);
    gridItem.appendChild(link);
    direList.appendChild(gridItem);
});
