/**
* Создаём первого персонажа для арены
*/

const player1 = {
	name: 'Scorpion',
	hp: 80,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: 'sword',
	attack: function(){
			console.log(this.name + ' Fight ...');
		}
}