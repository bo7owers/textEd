import { Attempt } from './buttons/enable-grid.js';
// const attmp = new Attempt();

// attmp.toggleGrid();
let editBtns = document.querySelectorAll('.btn-edit');

// editBtns.forEach((btn)=>{
//     btn.addEventListener('click',()=>{

//     })
// })

function init() {
	new Attempt(editBtns);
}

window.addEventListener('DOMContentLoaded', init, false);
