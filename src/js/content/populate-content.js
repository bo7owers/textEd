class initGame {
	constructor(instructionList) {
		this.populateInstructions(instructionList);
	}

	async populateInstructions(instructionList) {
		try {
			let resp = await fetch('./questions.json');
			let instructions = await resp.json();	
			console.log(instructions.questions[0]);

			// iterate over the questions and create an li element for each description
			for (const question of instructions.questions) {
				let listItem = document.createElement('li');
				let paragraph = document.createElement('p');
				let wordDiv = document.createElement('div');
				let editBtn = document.createElement('button');

				wordDiv.className = 'word-container';
				paragraph.textContent = question.description;

				editBtn.classList.add('btn', 'btn-edit');

				wordDiv.append(paragraph);
				wordDiv.append(editBtn);
				listItem.append(wordDiv);
				instructionList.append(listItem);
			}
		} catch (error) {
			console.error('Error fetching questions:', error);
		}
	}
}

export { initGame };
