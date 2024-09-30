class Attempt {
	constructor(eventQuery) {
		const currentEvent = this;
		eventQuery.forEach((query) => {
			query.addEventListener('click', this.toggleGrid);
		});
	}
	toggleGrid() {
		const grid = document.querySelector('#word_grid');
		const gridBtns = grid.querySelectorAll('.word-btn');

		this.state = grid.getAttribute('data-grid-state');

		grid.setAttribute(
			'data-grid-state',
			this.state === 'disabled' ? 'enabled' : 'disabled',
		);

		this.state = grid.getAttribute('data-grid-state');
		this.state !== 'disabled' && grid.focus();

		gridBtns.forEach((btn) => {
			btn.attributes.item(1)
				? btn.removeAttribute('disabled')
				: btn.setAttribute('disabled', '');
		});
	}

	// creat validate selection
}

export { Attempt };
