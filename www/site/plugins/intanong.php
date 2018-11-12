<?php

page::$methods['displayCredits'] = function($page, $limit = null) {

    $credits = $page->credits()->toStructure();
    if($limit) $credits->limit($limit);

    $html = '';

    foreach ($credits as $key => $c) {
    	if ($c->title()->isNotEmpty()) {
			if($c->url()->isNotEmpty()) {
				$html .= html::tag('a', $c->title()->lower().': '.$c->text(), ['class' => 'credit', 'href' => $c->url()]);
			} else {
				$html .= html::tag('div', $c->title()->lower().': '.$c->text(), ['class' => 'credit']);
			}
    	}
    }

    return $html;
};
