//Variables/Constantes
let btn_edit3 = document.getElementById('btn-edit3'),
	title3 = document.getElementById('title3'),
	hard_and_soft_skills = document.getElementById('hard_and_soft_skills');
	//hard_and_soft_skills.innerText = "Ingles\tGIT\tC\nHTML,CSS,JS\tJAVA\tSCRUM";
let	skill1 = document.getElementById('skill1');
	skill1.innerText = "Ingles";
let	skill2 = document.getElementById('skill2');
	skill2.innerText = "GIT";
let	skill3 = document.getElementById('skill3');
	skill3.innerText = "C";
let	skill4 = document.getElementById('skill4');
	skill4.innerText = "HTML,CSS,JS";
let	skill5 = document.getElementById('skill5');
	skill5.innerText = "JAVA";
let	skill6 = document.getElementById('skill6');
	skill6.innerText = "SCRUM";
let switch_ = 0;



//Funciones/Metodos
function enableEditText(e) {
	if (switch_ == 0) {
		skill1.setAttribute('contenteditable', 'true');
		skill2.setAttribute('contenteditable', 'true');
		skill3.setAttribute('contenteditable', 'true');
		skill4.setAttribute('contenteditable', 'true');
		skill5.setAttribute('contenteditable', 'true');
		skill6.setAttribute('contenteditable', 'true');
		switch_ = 1;
	} else {
		skill1.setAttribute('contenteditable', 'false');
		skill2.setAttribute('contenteditable', 'false');
		skill3.setAttribute('contenteditable', 'false');
		skill4.setAttribute('contenteditable', 'false');
		skill5.setAttribute('contenteditable', 'false');
		skill6.setAttribute('contenteditable', 'false');
		switch_ = 0;
	}
}

//Eventos
btn_edit3.addEventListener("click",enableEditText);
//hard_and_soft_skills.addEventListener("focusout", saveText);
