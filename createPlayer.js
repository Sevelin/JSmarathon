/**
* Метод для добавления персонажей на арену
*/

//const $arenas = document.querySelector('.arenas');

function createPlayer(user)
{
	const $player = createElements('div', 'player'+user.player);

		const $progressbar = createElements('div', 'progressbar');
		$player.appendChild($progressbar);					// Указываем родительский класс в котором будет находится только что созданный элемент
		
			const $life = createElements('div', 'life');
			$progressbar.appendChild($life);
			$life.style.width = user.hp + '%';
				
			const $name = createElements('div', 'name');
			$progressbar.appendChild($name);
			$name.innerText = user.name;

		const $character = createElements('div', 'character');
		$player.appendChild($character);
			
			const $img = createElements('img');
			$img.src = user.img;
			$character.appendChild($img);
		

	//$arenas.appendChild($player);
	return $player;
}

function createElements(tag, className)
{
	const $tag = document.createElement(tag);	// Создаём элемент DIV
	
	if(className)
	{
		$tag.classList.add(className);				// Создаём класс в выбранном DIV элементе
	}
	
	return $tag;
}