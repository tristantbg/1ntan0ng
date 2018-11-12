<?php if ($image = $data->get("image")->toFile()): ?>
	<section class="project-section section--image">
		<div class="sizable-media section--image--content <?= $data->get("size") ?>">
			<div class="content">
				<?php snippet('responsive-image', ['field' => $data->get("image")]) ?>
			</div>
		</div>
	</section>
<?php endif ?>
