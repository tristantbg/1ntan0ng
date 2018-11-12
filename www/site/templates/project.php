<?php snippet('header') ?>

<div id="project-sections">
	<?php foreach($medias as $section): ?>
		<?php snippet('sections/' . $section->_fieldset(), array('data' => $section)) ?>
	<?php endforeach ?>
</div>

<?php snippet('footer') ?>