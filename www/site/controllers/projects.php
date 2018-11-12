<?php

return function ($site, $pages, $page) {
	$projects = $site->index()->filterBy('intendedTemplate', 'project')->visible();
	$categories = page('categories')->children()->visible();

	return array(
		'aboutPage' => $pages->filterBy('intendedTemplate', 'about')->first(),
		'projects' => $projects,
		'categories' => $categories
	);
}

?>
