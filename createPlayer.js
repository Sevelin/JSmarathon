/**
* Метод для добавления персонажей на арену
*/


const $arenas = document.querySelector('.arenas');	// находим нужный класс 
const $btn = document.querySelector('.button');		// находим нужную кнопку


/**
* Отрисовываем наших персонажей
*/
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

/**
* создание элементов и классов у этих элементов
*/
function createElements(tag, className)
{
	const $tag = document.createElement(tag);	// Создаём элемент DIV
	
	if(className)
	{
		$tag.classList.add(className);				// Создаём класс в выбранном DIV элементе
	}
	
	return $tag;
}

/**
* Отслеживаем нажатие на кнопку
*/
function kickPlayer()
{
	console.log( randomNum(10) );
	
	changeHp(player1);
	changeHp(player2);
	
}

/**
* Вычитание жизни у выбранного игрока
*/
function changeHp(player)
{
	const $playerLife = document.querySelector('.player' + player.player + ' .life');
	player.hp -= randomNum(10);
	$playerLife.style.width = player.hp + '%';
	
	// 
	if(player.hp < 0 )
	{
		$arenas.appendChild(playerLose(player.name));
	}
}

/**
* Выводим надпись проигравшему игроку
*/
function playerLose(name)
{
	const $loseTitle = createElements('div', 'loseTitle');
	$loseTitle.innerText = name + ' lose';
	
	return $loseTitle;
}

/**
* Получаем рандомное число
* - В параметре указываем до какого числа будем округлять
*/
function randomNum(num)
{
	let finalNum = Math.ceil( Math.random() * num );
	return finalNum;
}
