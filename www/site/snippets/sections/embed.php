<?php if ($data->get("url")->isNotEmpty() && $embed = $data->get("url")): ?>
	<section class="project-section section--embed">
		<div class="sizable-media section--embed--content <?= $data->get("size") ?>">
			<div class="content">
				<?php if ($thumbnail = $data->get("thumb")->toFile()): ?>
				<?= $embed->embed(['thumbnail' => $thumbnail->width(2020)->url()]) ?>
				<?php else: ?>
				<?= $embed->embed() ?>
				<?php endif ?>
			</div>
		</div>
	</section>
<?php endif ?>
