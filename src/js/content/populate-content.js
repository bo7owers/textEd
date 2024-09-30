class initGame {
	constructor(instructionList) {
		this.populateInstructions(instructionList);
	}

	async populateInstructions(instructionList) {
		try {
			let resp = await fetch('./questions.json');
			let instructions = await resp.json();
			console.log(instructions.questions[0]);

			// Iterate over the questions and create an li element for each description
			for (const question of instructions.questions) {
				const listItem = document.createElement('li');
				listItem.textContent = question.description;
				instructionList.appendChild(listItem);
			}
		} catch (error) {
			console.error('Error fetching questions:', error);
		}
	}
}

export { initGame };
