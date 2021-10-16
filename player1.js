/**
* Создаём первого персонажа для арены
*/

const player1 = {
	name: 'Scorpion',
	player: 1,
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: 'sword',
	attack: function(){
			console.log(this.name + ' Fight ...');
		}
}