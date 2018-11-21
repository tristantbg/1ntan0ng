<?php

return function ($site, $pages, $page) {
  // $projects = $site->index()->filterBy('intendedTemplate', 'project')->visible();
	$categories = page('categories')->children()->visible();
  // $categoriesNotEmpty = new Collection();

  // foreach ($categories as $key => $c) {
  //   if($projects->filterBy('category', $c->id(), ',')->count() > 0) $categoriesNotEmpty->data[] = $c;
  // }

	return array(
		'aboutPage' => $pages->filterBy('intendedTemplate', 'about')->first(),
		'categories' => $categories,
		'medias' => $page->medias()->toStructure(),
	);
}

?>
