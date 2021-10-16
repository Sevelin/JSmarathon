/**
* Метод для ведения боя через кнопку
*/

const $btn = document.querySelector('.button');		// находим нужную кнопку



/**
* Отслеживаем нажатие на кнопку
*/
function kickPlayer()
{
	
	let p1 = changeHp(player1);
	let p2 = changeHp(player2);
	
	//console.log('p1 - ' + p1.hp + ' || p2 - ' + p2.hp );
	
	viewText(p1, p2);
	
}

/**
* Вычитание жизни у выбранного игрока
*/
function changeHp(player)
{
	const $playerLife = document.querySelector('.player' + player.player + ' .life');
	
	let rNum = randomNum(20);
	
	if((player.hp - rNum) <= 0 )
	{
		player.hp = 0;
		//$arenas.appendChild(playerLose(player.name));
	}else{
		player.hp -= randomNum(20);
	}
	
	$playerLife.style.width = player.hp + '%';
	
	return player;
}

/**
* Создаём надпись проигравшему игроку
*/
function playerLose(name)
{
	const $loseTitle = createElements('div', 'loseTitle');
	$loseTitle.innerText = name + ' lose';
	
	return $loseTitle;
}

/**
* Создаём надпись победившего игрока
*/
function playerWin(name)
{
	const $winTitle = createElements('div', 'loseTitle');
	if(name)
	{
		$winTitle.innerText = name + ' win';
	}else{
		$winTitle.innerText = 'DRAW';
	}
	
	return $winTitle;
}

/**
* Выводим мообщение о победе!
*/
function viewText(p1, p2)
{
	if(p1.hp == 0 && p2.hp == 0)
	{
		$arenas.appendChild(playerWin());
		$btn.disabled = true;
		$btn.style.display = 'none';
	}else if(p1.hp == 0)
	{
		$arenas.appendChild(playerWin(p2.name));
		$btn.disabled = true;
		$btn.style.display = 'none';
	}else if(p2.hp == 0)
	{
		$arenas.appendChild(playerWin(p1.name));
		$btn.disabled = true;
		$btn.style.display = 'none';
	}
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
