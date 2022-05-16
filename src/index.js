import _ from 'lodash';
import TeXToSVG from './tex-to-svg';

function component() {
  const svg = TeXToSVG('\\sqrt[]{}', {
    width: 1280,
    ex: 8,
    em: 16,
  });
  console.log(svg);
  const element = document.createElement('img');
  element.src = `data:image/svg+xml;charset=utf8,${encodeURIComponent(svg)}`;

  return element;
}

document.body.appendChild(component());
