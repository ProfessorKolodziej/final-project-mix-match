// Add your scripts here
// function filterObjects(c) {
// var x, i;
// x = document.getElementsByClassName
// }
// DATABASE
import $ from 'jquery';

// Include images
import melonLiquerImg from '../images/melon liqueur.png';

const database = [
	{
		id: 0,
		name: 'Sloe Gin Fizz',
		ABV: '>15%~30%',
		base: 'Gin',
		taste: 'Sweet',
		flavor: 'Fruity',
		ingredient: ['https://www.thecocktailproject.com/sites/default/files/styles/recipe-ingredient-img/public/gin-1%20copy.jpg?itok=_wDcSaGx', 'https://www.thecocktailproject.com/sites/default/files/styles/recipe-ingredient-img/public/ingredient-lemon_0.jpg?itok=g5Jrw4RR', 'https://www.thecocktailproject.com/sites/default/files/styles/recipe-ingredient-img/public/ingredient-soda-water.jpg?itok=oZOG77YA'],
		pictures: 'https://www.thecocktailproject.com/sites/default/files/styles/recipe-slider-img/public/Sloe_Gin_Fizz_Table_IMG_9486_Crop.jpg?itok=nPZm54Ea',
		maincontent: 'Tart and sweet come together in perfect harmony to Sloe Gin Fizz. Great for serving at parties or enjoying after a hard days work, this Sloe Gin Fizz combines soda water, gin, sloe gin and a splash of lemon juice for a refreshingly cool and colorful favorite.',
	},
	{
		id: 1, name: 'Garden Delight', ABV: '>1%~5%', base: 'Gin', taste: 'Sweet', flavor: 'Frozen', ingredient: [melonLiquerImg, 'src/images/gin.jpg', 'src/img/tonic water.jpg', 'src/img/cucumber.jpg', 'src/img/rosemary sprigs.jpg'], pictures: 'src/img/garden delight/garden delight.jpg', maincontent: 'Build into a tall glass over ice. Whip the sprig against the glass to release aroma before adding to the glass. Top with tonic water.',
	},
	{
		id: 2, name: 'Tom Collins', ABV: '>5%~15%', base: 'Gin', taste: 'Sour', flavor: 'Refreshing', ingredient: ['src/img/gin.jpg', 'src/img/lemon juice.png', 'src/img/simple syrup.jpg', 'src/img/soda water.jpg', 'src/img/orange slice.jpg'], pictures: 'src/img/tom collins/tom collins.jpg', maincontent: "Not everyone agrees where the name Tom Collins comes from, but they do agree it's a great cocktail to enjoy after brunch. A combination of Gin, lemon juice, club soda and simple syrup, this bright and shining social sparkler will fit right in on any park blanket or porch table.",
	},
	{
		id: 3, name: 'Long Island Iced Tea', ABV: '>30%', base: 'Rum', taste: 'Sweet', flavor: 'Mixed', ingredient: ['src/img/orange liqueur.png', 'src/img/vodka.png', 'src/img/rum.png', 'src/img/gin.jpg', 'src/img/sour mix.jpg', 'src/img/coke.jpg'], pictures: 'src/img/long island iced tea/long island iced tea.jpg', maincontent: "Nothing cools you off on a hot day like a delicious Long Island Ice Tea! Perfect for serving in party-sized pitchers or just enjoying with a friend or two, this Long Island Tea combines triple sec, vodka, rum, gin, sour mix, and your favorite cola for a sweet, smooth and refreshing drink that's sure to please.",
	},
	{
		id: 4, name: 'Hurricane', ABV: '>30%', base: 'Rum', taste: 'Sweet', flavor: 'Fruity', ingredient: ['src/img/orange liqueur.png', 'src/img/rum.png', 'src/img/pineapple juice.jpg', 'src/img/grenadine.jpg', 'src/img/orange wedges.jpg', 'src/img/maraschino cherries.png'], pictures: 'src/img/hurricane/hurricane.jpg', maincontent: "Get ready for a Hurricane Cocktail that's sure to transport you back to New Orleans! Featuring the full-bodied, smooth taste of Rum, a hint of orange flavor, fresh pineapple juice and a splash of grenadine, this colorful concoction will be a definite crowd pleaser at your next Mardi Gras party or any warm-weather gathering.",
	},
	{
		id: 5, name: 'Classic Mojito', ABV: '>5%~15%', base: 'Rum', taste: 'Sweet', flavor: 'Frozen', ingredient: ['src/img/rum.png', 'src/img/simple syrup.jpg', 'src/img/lime wedges.jpg', 'src/img/fresh mint leaves.jpg', 'src/img/soda water.jpg'], pictures: 'src/img/classic mojito/classic mojito.jpg', maincontent: 'Muddled to perfection, this classic mojito cocktail is a refreshing sweet-treat. Cooling mint enhances smooth flavor of Light Rum, for an Island flavor you can’t resist. Whether it’s a busy day, or a quiet weekend, take a minute to kick back and sip this mojito slowly.',
	},
	{
		id: 6, name: "Shark's Tooth", ABV: '>5%~15%', base: 'Rum', taste: 'Sour', flavor: 'Mixed', ingredient: ['src/img/rum.png', 'src/img/lemon juice.png', 'src/img/lime juice.jpg', 'src/img/soda water.jpg', 'src/img/grenadine.jpg', 'src/img/lime wedges.jpg'], pictures: "src/img/shark's tooth/shark's tooth.jpeg", maincontent: 'Pour rum, lemon juice and lime juice in a tall glass and gently stir. Top with soda water, then gently pour in grenadine. Garnish with a lime wedge.',
	},
	{
		id: 7,
		name: 'Jalapeño Margarita',
		ABV: '>30%',
		base: 'Tequila',
		taste: 'Spicy',
		flavor: 'Mixed',
		ingredient: ['src/img/orange liqueur.png', 'src/img/tequila.jpg', 'src/img/lime juice.jpg', 'src/img/jalapeno.jpg', 'src/img/orange bitters.jpg', 'src/img/agave nectar.jpg'],
		pictures: 'src/img/jalapeno margarita/jalapeno margarita.jpg',
		maincontent: 'Muddle jalapeño pepper slice in cocktail shaker. Add remaining ingredients and shake over ice. Strain and serve in margarita glass. Garnish with jalapeño pepper.',
	},
	{
		id: 8,
		name: 'Tequila Sunrise',
		ABV: '>5%~15%',
		base: 'Tequila',
		taste: 'Sweet',
		flavor: 'Fruity',
		ingredient: ['src/img/tequila.jpg', 'src/img/lime juice.jpg', 'src/img/cranberry juice.jpg', 'src/img/orange juice.jpg', 'src/img/orange wedges.jpg', 'src/img/lemon wedges.jpg'],
		pictures: 'src/img/tequila sunrise/tequila sunrise.jpg',
		maincontent: 'Recreate the red and orange painting in the sky. Tequila is given a sweet citrusy kick from oranges and limes. Tart cranberry juice gives the drink a pop of red that makes this drink perfect for a staycation.',
	},
	{
		id: 9,
		name: 'Pina Punch',
		ABV: '>1%~5%',
		base: 'Tequila',
		taste: 'Sweet',
		flavor: 'Fruity',
		ingredient: ['src/img/tequila.jpg', 'src/img/blueberry liqueur.jpg', 'src/img/lime juice.jpg', 'src/img/simple syrup.jpg', 'src/img/pineapple juice.jpg'],
		pictures: 'src/img/pina punch/pina punch.jpg',
		maincontent: 'Combine all ingredients into a shaker with ice and shake. Strain into glass over ice and serve.',
	},
	{
		id: 10,
		name: 'Paloma',
		ABV: '>5%~15%',
		base: 'Tequila',
		taste: 'Sour',
		flavor: 'Fruity',
		ingredient: ['src/img/tequila.jpg', 'src/img/pink grapefruit juice.jpg', 'src/img/simple syrup.jpg', 'src/img/soda water.jpg'],
		pictures: 'src/img/paloma/paloma.jpg',
		maincontent: 'Spanish for “Dove,” a tasty tequila paloma always flies for an afternoon delight. Tequila, the purest expression of the powerful 100% agave flavor, is given a tart twist with fresh, ruby red grapefruit juice. Club soda adds a bubbly twist to this cocktail, while fresh rosemary emits a floral sweetness. Go ahead and unwind with this grapefruit cocktail during your mid-day siesta.',
	},
	{
		id: 11,
		name: "Elf's Kiss",
		ABV: '>15%~30%',
		base: 'Vodka',
		taste: 'Sour',
		flavor: 'Mixed',
		ingredient: ['src/img/vodka.png', 'src/img/melon liqueur.png', 'src/img/simple syrup.jpg', 'src/img/cranberry juice.jpg', 'src/img/cranberries.jpg'],
		pictures: "src/img/elf's kiss/elf's kiss.jpg",
		maincontent: 'Snag an Elf’s Kiss without trekking up to the North Pole. This cocktail combines the sweet flavor of melon with sour citrus for a Christmas cocktail that is a gift for the grown-ups.',
	},
	{
		id: 12,
		name: 'Blue Flurry',
		ABV: '>5%~15%',
		base: 'Vodka',
		taste: 'Sweet',
		flavor: 'Fruity',
		ingredient: ['src/img/vodka.png', 'src/img/curacao liqueur.png', 'src/img/cream of coconut.jpg', 'src/img/pineapple juice.jpg', 'src/img/ice.jpg', 'src/img/shredded coconut.png'],
		pictures: 'src/img/blue flurry/blue flurry.jpg',
		maincontent: 'Cold as the snowy weather outside, the Blue Flurry cocktail embodies winter’s spirit. Pineapple juice, blue curacao and coconut cream give this blue cocktail drink a tropical and sweet flavor, while the turquoise color, ice and coconut flakes add a frosty feel. Enjoy winter’s version of a piña colada from the comfort of a toasty home.',
	},
	{
		id: 13,
		name: 'Sex On The Beach',
		ABV: '>5%~15%',
		base: 'Vodka',
		taste: 'Sweet',
		flavor: 'Fruity',
		ingredient: ['src/img/vodka.png', 'src/img/peach liqueur.png', 'src/img/cranberry juice.jpg', 'src/img/pineapple juice.jpg'],
		pictures: 'src/img/sex on the beach/sex on the beach.jpg',
		maincontent: 'With a sexy name and sweet and fruity flavor, this 80s classic cocktail is a must-try. A vodka-based cocktail at heart, the sex on the beach drink is bursting with the taste of tree-ripe peaches, cranberries and pineapple juice. Shake it up and serve in a shot glass or add some ice for a full-sized drink.',
	},
	{
		id: 14,
		name: 'Juicy Screw',
		ABV: '>5%~15%',
		base: 'Vodka',
		taste: 'Sweet',
		flavor: 'Fruity',
		ingredient: ['src/img/vodka.png', 'src/img/watermelon liqueur.png', 'src/img/orange juice.jpg', 'src/img/soda water.jpg'],
		pictures: 'src/img/juicy screw/juicy screw.jpg',
		maincontent: 'Never sweat warm weather again with a fresh-flavored watermelon cocktail. Crisp and sweet watermelon liqueur gets a little kick from vodka and a fizzy flare from soda water. Orange juice tops the Juicy Screw off for a brunch cocktail that that pairs perfectly with summer.',
	},
	{
		id: 15,
		name: 'Pool Party Punch',
		ABV: '>5%~15%',
		base: 'Vodka',
		taste: 'Sour',
		flavor: 'Mixed',
		ingredient: ['src/img/vodka.png', 'src/img/lemonade.jpg', 'src/img/curacao liqueur.png', 'src/img/lemon wedges.jpg'],
		pictures: 'src/img/pool party punch/pool party punch.jpg',
		maincontent: 'Whether you’re lounging poolside, or dreaming of summer, this vodka lemonade punch is the ultimate warm-weather drink. Pinnacle® vodka combines with citrus-infused blue curacao and lemonade to create an eye-catching cocktail you and your guests won’t want to put down.',
	},
	{
		id: 16,
		name: 'Kentucky Mule',
		ABV: '>5%~15%',
		base: 'Bourbon',
		taste: 'Sweet',
		flavor: 'Refreshing',
		ingredient: ['src/img/bourbon.png', 'src/img/lime juice.jpg', 'src/img/fresh fruit.jpg'],
		pictures: 'src/img/kentucky mule/kentucky mule.jpg',
		maincontent: 'Not all mules come from Moscow. With a charming mix of Bourbon, fresh fruit and cold ginger beer, this cocktail twists straight out of Kentucky. Take your pick from mango, strawberry, raspberry and many more fruits to make this southern surprise packed full of summer vibes. ',
	},
	{
		id: 17,
		name: 'Bourbon Cider Sour',
		ABV: '>1%~5%',
		base: 'Bourbon',
		taste: 'Sweet',
		flavor: 'Fruity',
		ingredient: ['src/img/bourbon.png', 'src/img/apple cider.jpg', 'src/img/orange juice.jpg', 'src/img/simple syrup.jpg', 'src/img/apple slices.gif'],
		pictures: 'src/img/bourbon cider sour/bourbon cider sour.jpg',
		maincontent: 'Add a little fall flavor into a basic whiskey sour. This bourbon apple cider takes smooth and smoky Bourbon and mixes it with the crisp and tart tang of cold apple cider and orange juice. Whip it up in a flash and enjoy alongside a delicious dinner.',
	},
	{
		id: 18,
		name: 'Classic Manhattan',
		ABV: '>30%',
		base: 'Bourbon',
		taste: 'Bitter',
		flavor: 'Mixed',
		ingredient: ['src/img/bourbon.png', 'src/img/orange liqueur.png', 'src/img/cherry liqueur.jpg', 'src/img/bitters.jpg'],
		pictures: 'src/img/classic manhattan/classic manhattan.jpg',
		maincontent: 'How can you improve on perfection? With this classic Manhattan recipe! Boasting smooth Bourbon Whiskey, a dash of bitters, plus orange and cherry hues, this classic Manhattan cocktail is sweet, satisfying and seductively tasty. Great for relaxing after work, serving at poker parties or mixing up at your next gathering.',
	},
	{
		id: 19,
		name: 'Classic Old Fashioned',
		ABV: '>30%',
		base: 'Bourbon',
		taste: 'Bitter',
		flavor: 'Mixed',
		ingredient: ['src/img/bourbon.png', 'src/img/sugar.jpg', 'src/img/maraschino cherries.png', 'src/img/bitters.jpg'],
		pictures: 'src/img/classic old fashioned/classic old fashioned.jpg',
		maincontent: 'Muddle sugar and bitters in a rocks glass. Add bourbon and ice. Stir. Top with a cherry as garnish.',
		// pics:"blablabla.jpg"
	},
	{
		id: 20,
		name: 'Bloody Maria',
		ABV: '>5%~15%',
		base: 'Tequila',
		taste: 'Spicy',
		flavor: 'Mixed',
		ingredient: ['src/img/tequila.jpg', 'src/img/tomato juice.jpg', 'src/img/sriracha chili sauce.jpg', 'src/img/celery salt.jpg', 'src/img/black pepper.jpg', 'src/img/paprika.jpg', 'src/img/cumin.jpg', 'src/img/worcestershire sauce.jpg', 'src/img/lime.jpg', 'src/img/olives.jpg', 'src/img/pickled jalapeno.jpg', 'src/img/sprig cilantro.jpg'],
		pictures: 'src/img/bloody maria/bloody maria.jpg',
		maincontent: 'Much more than just your average Bloody Mary, the spicy Bloody Maria takes flavor to new heights. Smooth tequila mixes with pepper, chili sauce, Worcestershire and fresh tomato and lemon flavors to create a cocktail with attitude. These tequila Bloody Marys are perfect for brunch or everyday.',
	},
	{
		id: 21,
		name: 'Appletini',
		ABV: '>5%~15%',
		base: 'Vodka',
		taste: 'Sour',
		flavor: 'Fruity',
		ingredient: ['src/img/apple liqueur.png', 'src/img/vodka.png', 'src/img/sour mix.jpg'],
		pictures: 'src/img/appletini/appletini.jpg',
		maincontent: "Take a classic martini and add some fresh apple taste and you've got a delicious Appletini! Featuring a mix of Sour Apple Schnapps, smooth Vodka (regular or pear) and a splash of sour mix, this sophisticated apple martini is great for girls' night in, sipping poolside or just relaxing after a hard day's work.",
	},
	{
		id: 22,
		name: 'Mint Julep',
		ABV: '>30%',
		base: 'Bourbon',
		taste: 'Sweet',
		flavor: 'Frozen',
		ingredient: ['src/img/bourbon.png', 'src/img/simple syrup.jpg', 'src/img/fresh mint leaves.jpg'],
		pictures: 'src/img/mint julep/mint julep.jpg',
		maincontent: 'The quintessential cocktail of the South, the classic Mint Julep wears many hats. Perfect for sitting on the porch or cooling off on a hot summer night, this Mint Julep combines smooth bourbon with fresh mint and simple syrup for a refreshingly sweet spring or summer cocktail.',
	},
	{
		id: 23,
		name: 'Classic Cosmo',
		ABV: '>30%',
		base: 'Vodka',
		taste: 'Sweet',
		flavor: 'Fruity',
		ingredient: ['src/img/vodka.png', 'src/img/cranberry juice.jpg', 'src/img/orange liqueur.png', 'src/img/lime juice.jpg', 'src/img/cranberries.jpg'],
		pictures: 'src/img/classic cosmo/classic cosmo.jpg',
		maincontent: 'Flavorful, tangy and refreshing, this Cosmo recipe brings on the taste and the good times. Whip up these classic vodka drinks in a flash, which are perfect for a night in or relaxing on the deck.',
	},
	{
		id: 24,
		name: 'Fruitcake',
		ABV: '>30%',
		base: 'Bourbon',
		taste: 'Sour',
		flavor: 'Fruity',
		ingredient: ['src/img/bourbon.png', 'src/img/orange liqueur.png', 'src/img/lemon juice.png', 'src/img/cranberry juice.jpg', 'src/img/lemon twist.jpg'],
		pictures: 'src/img/fruitcake/fruitcake.jpg',
		maincontent: 'Shake well and pour over ice or strain into cocktail glass. Garnish with a lemon twist.',
	},
	{
		id: 25,
		name: 'Moscow Mule',
		ABV: '>30%',
		base: 'Vodka',
		taste: 'Sour',
		flavor: 'Mixed',
		ingredient: ['src/img/vodka.png', 'src/img/lime juice.jpg', 'src/img/ginger beer.jpg', 'src/img/lime wedges.jpg'],
		pictures: 'src/img/moscow mule/moscow mule.jpg',
		maincontent: 'Spice things up with this sweet and snappy ginger drink. The Moscow Mule layers zingy ginger beer with refreshing lime and vodka for a lively cocktail. The warming sensation makes it great for cold weather while the zesty lime cools down a hot day.',
	},
];

// QUIZ PART
const quiz = [
	{
		question: 'ABV?',
		answers: ['>30%', '>15%~30%', '>5%~15%', '>1%~5%'],
	},
	{
		question: 'BASE',
		answers: ['Gin', 'Bourbon', 'Rum', 'Vodka'],
	},
	{
		question: 'TASTE',
		answers: ['Sweet', 'Sour', 'Bitter', 'Spicy'],
	},
	{
		question: 'FLAVOR',
		answers: ['Frozen', 'Mixed', 'Fruity', 'Refreshing'],
	},
];

// SURVEY FUNCTION
let i = 0;
const saved = [];
const same = [];
// let uniqsame = [];
const similar = [];
// let uniqsimilar = [];
$(document).ready(() => {
	$('#resultshow').hide();
	$('#questions').html(
		`<h1 style="text-align:center;">${quiz[i].question}</h1>`,
	);

	$('#zero').html(
		`<p style="text-align:center;">${quiz[i].answers[0]}</p>`,
	);

	$('#one').html(
		`<p style="text-align:center;">${quiz[i].answers[1]}</p>`,
	);

	$('#two').html(
		`<p style="text-align:center;">${quiz[i].answers[2]}</p>`,
	);

	$('#three').html(
		`<p style="text-align:center;">${quiz[i].answers[3]}</p>`,
	);

	$('.choices').show('slow');
	$(document).on('click', '#next', () => {
		const answer = $('input[name="answers"]:checked').val();
		const answerString = quiz[i].answers[answer];
		$(`p[class="userAnswer"][value=${i}]`).text(answerString);

		if (!$('input[name="answers"]').is(':checked')) {
			$('document').alert('please make a choice');
			return undefined; // stops executing the rest of the code
		}
		i += 1;
		saved.push(quiz[i - 1].answers[$('input[name="answers"]:checked').val()]);

		if (i < 4) {
			$('#questions').html(
				`<h1 style="text-align:center;">${quiz[i].question}</h1>`,
			);

			$('#zero').html(
				`<p style="text-align:center;">${quiz[i].answers[0]}</p>`,
			);

			$('#one').html(
				`<p style="text-align:center;">${quiz[i].answers[1]}</p>`,
			);

			$('#two').html(
				`<p style="text-align:center;">${quiz[i].answers[2]}</p>`,
			);

			$('#three').html(
				`<p style="text-align:center;">${quiz[i].answers[3]}</p>`,
			);

			$('#shake').hide();
			$('.choices').show();
			$('input[name="answers"]').prop('checked', false);
		}

		if (i > 3) {
			$('#quiz').remove();

			$('#resultshow').show();

			$('.fixed').hide();

			// LOOKING FOR EXACT RESULTS
			for (let dataindex = 0; dataindex < database.length; dataindex += 1) {
				Object.keys(database[dataindex]).forEach(() => {
					if (Object.values(database[dataindex])[2] === saved[0]) {
						if (Object.values(database[dataindex])[3] === saved[1]) {
							if (Object.values(database[dataindex])[4] === saved[2]) {
								if (Object.values(database[dataindex])[5] === saved[3]) {
									same.push(database[dataindex]);
									same.filter((item, index) => {
										if (same.indexOf(item) === index) {
											return item;
										}
										return true;
									});
								}
							}
						}
					}
					return true;
				});
			}
			// LOOK FOR SIMILAR RESULTS
			for (let dataindex = 0; dataindex < database.length; dataindex += 1) {
				Object.keys(database[dataindex]).forEach(() => {
					if (Object.values(database[dataindex])[2] === saved[0]) {
						if (Object.values(database[dataindex])[4] === saved[2]) {
							similar.push(database[dataindex]);
							similar.filter((item, index) => {
								if (similar.indexOf(item) === index) {
									return item;
								}
								return true;
							});
						}
					}
					return true;
				});
			}
			if (same) {
				$('.mainpic1').html(
					`<img src="${Object.values(same[0])[7]}"></img>`,
				);
				$('.drinkname1').html(
					`<h2 class="drinkname">${Object.values(same[0])[1]}</h2>`,
				);
				$('.alcohol_name1').html(
					`<li class="alcohol_name">${Object.values(same[0])[1]}</li>`,
				);
				$('.flavor1').html(
					`<li class="flavor" >${Object.values(same[0])[5]}</li>`,
				);
				$('.alcohol_level1').html(
					`<li class="alcohol_level" >${Object.values(same[0])[2]}</li>`,
				);
				$('.main_content1').html(
					`<p class="main_content" >${Object.values(same[0])[8]}</p>`,
				);
				$('.list-ingre').html(
					`<ul class="list-ingre" ><li><img src="${Object.values(same[0])[6][0]}"></img></li>
          <li><img src="${Object.values(same[0])[6][1]}"></img></li>
          <li><img src="${Object.values(same[0])[6][2]}"></img></li></ul>`,
				);

				$('.list-similar').html(
					`<ul class="list-similar" ><li><img src="${Object.values(similar[0])[7]}"></img></li></ul>`,
				);
			} else {
				$('.mainpic1').html(
					`<img src="${Object.values(similar[0])[7]}"></img>`,
				);
				$('.drinkname1').html(
					`<h2>${Object.values(similar[0])[1]}</h2>`,
				);
				$('.alcohol_name1').html(
					`<li>${Object.values(similar[0])[1]}</li>`,
				);
				$('.flavor1').html(
					`<li>${Object.values(similar[0])[5]}</li>`,
				);
				$('.alcohol_level1').html(
					`<li>${Object.values(similar[0])[2]}</li>`,
				);
				$('.main_content11').html(
					`<p class="main_content" >${Object.values(similar[0])[8]}</p>`,
				);
				$('.list-ingre').html(
					`<ul class="list-ingre" ><li><img src="${Object.values(similar[0])[6][0]}"></img></li></ul>`,
				);
				$('.list-ingre').html(
					`<ul class="list-ingre" ><li><img src="${Object.values(similar[0])[6][1]}"></img></li></ul>`,
				);
				$('.list-ingre').html(
					`<ul class="list-ingre" ><li><img src="${Object.values(similar[0])[6][2]}"></img></li></ul>`,
				);
				$('.list-similar').html(
					`<ul class="list-similar" ><li><img src="${Object.values(similar[1])[7]}"></img></li></ul>`,
				);
			}
		}
		return true;
	});
});
