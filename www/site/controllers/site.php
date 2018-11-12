<?php

return function ($site, $pages, $page) {
	$categories = page('categories')->children()->visible();

	return array(
		'aboutPage' => $pages->filterBy('intendedTemplate', 'about')->first(),
		'categories' => $categories
	);
}

?>
