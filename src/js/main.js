import { initGame } from './content/populate-content.js';
import { Attempt } from './buttons/enable-grid.js';

let instructions = document.querySelector('.options');

let editBtns = document.querySelectorAll('.btn-edit');

function init() {
	new initGame(instructions);
	new Attempt(editBtns);
}

window.addEventListener('DOMContentLoaded', init, false);
