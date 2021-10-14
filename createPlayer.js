function createPlayer(userClass, userNmae, userHP)
{
	const $player1 = document.createElement('div');
	$player1.classList.add(userClass);

		const $progressbar = document.createElement('div');
		$progressbar.classList.add('progressbar');
		$player1.appendChild($progressbar);
		
			const $life = document.createElement('div');
			$life.classList.add('life');
			//$life.innerText = userHP;
			$progressbar.appendChild($life);
			
			const $name = document.createElement('div');
			$name.classList.add('name');
			$name.innerText = userNmae;
			$progressbar.appendChild($name);

	const $character = document.createElement('div');
	$character.classList.add('character');
	$player1.appendChild($character);
		
		const $img = document.createElement('img');
		$img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
		$character.appendChild($img);
	
	
	
	
	const $arenas = document.querySelector('.arenas');
	$arenas.appendChild($player1);

}