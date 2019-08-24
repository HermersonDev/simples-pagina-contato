
function init() {

	const elt_btn_contato = document.querySelector('#btn-contato');
	const elt_conteudo = document.querySelector('#conteudo');
	const elt_contato = document.querySelector('#contato');
	const elt_close = document.querySelector('#close');

	elt_btn_contato.addEventListener('click', function() {
		elt_conteudo.style.marginLeft = '-25vw';
		elt_contato.style.right = '0';
	});

	elt_close.addEventListener('click', function() {
		elt_contato.style.right = '-25vw';
		elt_conteudo.style.marginLeft = '0';
	});

	window.addEventListener('click', (event) => {
		if (event.target.id == 'conteudo') {
			elt_contato.style.right = '-25vw';
			elt_conteudo.style.marginLeft = '0';
		}
	});

}

init();