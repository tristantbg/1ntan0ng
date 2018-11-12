<?php snippet('header') ?>

<div id="projects">
	<div id="elevator">
		<?php foreach ($categories as $key => $category): ?>
			<?php snippet('section-category', ['category' => $category, 'projects' => $projects]) ?>
		<?php endforeach ?>
	</div>
</div>

<?php snippet('footer') ?>