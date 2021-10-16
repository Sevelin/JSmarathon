/**
* Метод для ведения боя через кнопку
*/

const $btn = document.querySelector('.button');		// находим нужную кнопку



/**
* Отслеживаем нажатие на кнопку
*/
function kickPlayer()
{
	
	changeHp(player1);
	changeHp(player2);
	
}

/**
* Вычитание жизни у выбранного игрока
*/
function changeHp(player)
{
	const $playerLife = document.querySelector('.player' + player.player + ' .life');
	player.hp -= randomNum(20);
	
	if(player.hp <= 0 )
	{
		player.hp = 0;
		$arenas.appendChild(playerLose(player.name));
	}
	
	console.log(player.name + '  - ' +player.hp);
	$playerLife.style.width = player.hp + '%';
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
