var bigSelf = this;
var infecting = true;
var score = 0;

var node = {
	1: {
		element: $('.node-one'),
		infected: false
	},
	2: {
		element: $('.node-two'),
		infected: false
	},
	3: {
		element: $('.node-three'),
		infected: false
	},
	4: {
		element: $('.node-four'),
		infected: false
	},
	5: {
		element: $('.node-five'),
		infected: false
	},
	6: {
		element: $('.node-six'),
		infected: false
	}
}

function infect(node) {
	if (!node.infected && infecting) {
		var infected = node.element.children('#red').show();
		node.element.children('#blue').hide();
		node.infected = true;

		infected.click(function () {
			var nodeId = $(this).parent().data('id');
			console.log(nodeId)
			disinfect(bigSelf.node[nodeId]);
		});
	}
}

function disinfect(node) {
	if (infecting) {
		node.element.children('#blue').show();
		node.element.children('#red').hide();
		node.infected = false;
		score = score + 13;
		recalculateScore();
	}
}

function randomInfector () {
	if (infecting) {
		infected = Math.floor((Math.random()*6)+1);
		infect(node[infected]);
	}

	if (node[1].infected && node[2].infected && node[3].infected && node[4].infected && node[5].infected && node[6].infected) {
		youLost();
	}

	setTimeout(randomInfector, 175);
}

function recalculateScore () {
	if (score >= 404) {
		$('#score').html(score);
		youWon();
	} else {
		$('#score').html(score);
	}
}

function youWon () {
	infecting = false;
	var i = 1;
	while (i <= 6) {
		disinfect(node[i]);
		i++;
	}

	$('#won').show().addClass('won');
}

function youLost () {
	infecting = false;

	$('.node-center').children('#red').show();
	$('.node-center').children('#blue').hide();

	var i = 1;
	while (i <= 6) {
		infect(node[i]);
		i++;
	}

	$('#fail').show().addClass('fail');
}

$('.node').click(function () {
	if (infecting) {
		score = score - 8;
		recalculateScore();
	}
});

randomInfector();