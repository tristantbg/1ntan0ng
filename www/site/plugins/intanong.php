<?php

field::$methods['ktRaw'] = function($field) {
  $text = $field->kirbytext();
  return preg_replace('/(.*)<\/p>/', '$1', preg_replace('/<p>(.*)/', '$1', $text));
};

page::$methods['displayCredits'] = function($page, $limit = null) {

    $credits = $page->credits()->toStructure();
    if($limit) $credits->limit($limit);

    $html = '';

    foreach ($credits as $key => $c) {
    	if ($c->title()->isNotEmpty()) {
			if($c->url()->isNotEmpty()) {
				$html .= html::tag('a', $c->title()->lower().': '.$c->text()->ktRaw(), ['class' => 'credit', 'href' => $c->url()]);
			} else {
				$html .= html::tag('div', $c->title()->lower().': '.$c->text()->ktRaw(), ['class' => 'credit']);
			}
    	}
    }

    return $html;
};

page::$methods['displayLinks'] = function($page, $limit = null) {

    $links = $page->links()->toStructure();
    if($limit) $links->limit($limit);

    $html = '';

    foreach ($links as $key => $c) {
      if ($c->title()->isNotEmpty() && $c->url()->isNotEmpty()) {
      if($c->url()->isNotEmpty()) {
        $html .= html::tag('a', $c->title()->html(), ['class' => 'link lowercase', 'href' => $c->url()]);
      } else {
        $html .= html::tag('div', $c->title()->html(), ['class' => 'link lowercase']);
      }
      }
    }

    return $html;
};
