// pruebas.test.js
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Simulador Web', () => {
  let dom;
  let document;

  beforeAll(() => {
    const html = fs.readFileSync(path.join(__dirname, 'Simulador_Web.html'), 'utf8');
    dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable' });
    document = dom.window.document;
  });

  test('Debe mostrar el título principal', () => {
    const titulo = document.querySelector('.titulo-seleccion h1');
    expect(titulo).not.toBeNull();
    expect(titulo.textContent).toMatch(/SIMULA TU INVERSIÓN/i);
  });

  test('Debe tener inputs para edad y pensión', () => {
    expect(document.getElementById('inputEdadActual')).not.toBeNull();
    expect(document.getElementById('inputEdadRetiro')).not.toBeNull();
    expect(document.getElementById('inputPensionDeseada')).not.toBeNull();
    expect(document.getElementById('inputMontoInicialRetiro')).not.toBeNull();
    expect(document.getElementById('inputPensionCuota')).not.toBeNull();
  });

  test('Debe mostrar el gráfico', () => {
    const canvas = document.getElementById('myChart');
    expect(canvas).not.toBeNull();
  });
});
