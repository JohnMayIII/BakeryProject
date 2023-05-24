INSERT INTO goods (item,
    picture,
    price,
    descrip,
    special)
VALUES('White Bread Loaf','https://charlotteslivelykitchen.com/wp-content/uploads/2014/07/Basic-white-bread-recipe.jpg',6,"A wonderful loaf of white bread baked to perfection without any meddling electronics in it when you try to take a bite. Perfect sweetness in every slice.",'default'),
('Cinamon Roll','https://leitesculinaria.com/wp-content/uploads/2020/07/cinnamon-rolls-960x1200.jpg',9,"This is the one thing besides morning coffee that keeps you from ruining your social standing with your colleagues. Balanced sweetness for any temperament.",'feat'),
('Blueberry Muffin','https://www.culinaryhill.com/wp-content/uploads/2022/08/Blueberry-Muffins-Culinary-Hill-1200x800-1.jpg',4,"Our blueberry muffins are filled with plenty blueberries like coding errors in a rushed program. Sweet with a bit of crisp on top, guaranteed to satisfy!",'discount'),
('Lemon Cake','https://www.foodnetwork.com/content/dam/images/food/fullset/2003/9/29/0/ig1a08_lemon_cake.jpg',7,"Lemon cake is one of life's greatest gifts. We decided to refine that gift and now have the best lemon cake this side of a computer screen.",'feat'),
('Brownie','https://natashaskitchen.com/wp-content/uploads/2020/08/Chocolate-Brownie-Recipe-5-500x500.jpg',3,"Chocolate desserts need peoper balance to be the perfect treat that they're meant to be. Not too rich and not too sweet, this brownie can't be beat!",'discount'),
('Chocolate Chip Muffin','https://sugarspunrun.com/wp-content/uploads/2022/03/bakery-style-chocolate-chip-muffins-1-of-1.jpg',4,"Want a muffin with a bit more sweetness? Have a chocolate chip muffin with the same muffin taste with a great richness to it!",'default'),
('Chocolate Chip Cookie','https://www.budgetbytes.com/wp-content/uploads/2022/12/Chocolate-Chip-Cookies-close.jpg',2,"Chocolate chip cookies so perfectly round you could skip them across a lake but so good that you'll have regretted skipping them.",'default'),
('Apple PIe','https://www.spoonforkbacon.com/wp-content/uploads/2022/09/apple_pie_recipe_card.jpg',10,"This is apple pie is the same pie that makes cartoon character float up and towards it while it cools on a windowsill. As every bit good as you'd believe!",'default'),
('Pretzel','https://handletheheat.com/wp-content/uploads/2021/09/how-to-make-homemade-pretzels-SQUARE.jpg',6,"Choose a salty snack with a salt covered pretzel, or for a sweeter taste, choose a pretzel with cinamon on it and munch away!",'default'),
('Croissant','https://breadsandsweets.com/wp-content/uploads/2021/08/croissant-sq2.jpg',4,"Straight from the ovens of France that are also in our kitchen we bring delicious crescent moon croissants! Coated in butter with an option of chocolate filling!",'default'),
('Sugar Cookie','https://handletheheat.com/wp-content/uploads/2021/09/best-soft-and-chewy-sugar-cookies-SQUARE.jpg',2,"Soft, chewy, melt-your-legs goodness! Enjoy these sugar cookes to your hearts content without clogging you arteries in the process!",'default'),
('Snickerdoodle Cookie','https://divascancook.com/wp-content/uploads/2019/12/IMG_9924.jpg',2,"Just like our sugar cookies but with a more involved taste besides just sugar. Take a bite and let the smile creep to your face!",'default');

UPDATE goods
SET item = 'Apple Pie'
WHERE goods_id = 8;