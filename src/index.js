import _ from 'lodash';
import TeXToSVG from './tex-to-svg';

function component() {
  const div = document.createElement('div');

  div.appendChild(getImageElement('\\frac{1}{2}'));
  div.appendChild(document.createElement('br'));
  div.appendChild(getImageElement('\\sqrt[3]{8}'));
  div.appendChild(document.createElement('br'));
  div.appendChild(getImageElement('\\sqrt[\\sqrt[]{}]{}'));
  div.appendChild(document.createElement('br'));
  div.appendChild(getImageElement('\\sqrt[\\sqrt[3]{8}]{16}'));

  return div;
}

function getImageElement(tex) {
  const svgSqrt = TeXToSVG(tex, {
    width: 1280,
    ex: 8,
    em: 16,
  });
  const element = document.createElement('img');
  element.src = `data:image/svg+xml;charset=utf8,${encodeURIComponent(svgSqrt)}`;

  return element;
}

document.body.appendChild(component());
