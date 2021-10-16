/**
* Метод для добавления персонажей на арену
*/

function createPlayer(userClass, user)
{
	const $player1 = document.createElement('div');	// Создаём элемент DIV
	$player1.classList.add(userClass);	//Создаём класс в выбранном DIV элементе

		const $progressbar = document.createElement('div');	// Создаём элемент DIV
		$progressbar.classList.add('progressbar');			// Создаём класс в выбранном DIV элементе
		$player1.appendChild($progressbar);					// Указываем родительский класс в котором будет находится только что созданный элемент
		
			const $life = document.createElement('div');
			$life.classList.add('life');
			//$life.innerText = user.hp;
			$life.style.width = user.hp + '%';
			$progressbar.appendChild($life);
				
			const $name = document.createElement('div');
			$name.classList.add('name');
			$name.innerText = user.name;
			$progressbar.appendChild($name);

		const $character = document.createElement('div');
		$character.classList.add('character');
		$player1.appendChild($character);
			
			const $img = document.createElement('img');
			$img.src = user.img;
			$character.appendChild($img);
		

	$arenas.appendChild($player1);
}

const $arenas = document.querySelector('.arenas');
