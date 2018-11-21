<?php if($image = $field->toFile()): ?>
	<?php $project = $image->page() ?>

	<a class="project-thumbnail" href="<?= $project->url() ?>">
		<?php
		if(!isset($maxWidth)) $maxWidth = 2720;
		if (isset($ratio)) {
			$placeholder = $image->crop(50, floor(50/$ratio))->url();
			$src = $image->crop(1000, floor(1000/$ratio))->url();
			$srcset = $image->crop(340, floor(340/$ratio))->url() . ' 340w,';
			for ($i = 680; $i <= $maxWidth; $i += 340) $srcset .= $image->crop($i, floor($i/$ratio))->url() . ' ' . $i . 'w,';
		} else {
			$placeholder = $image->width(50)->url();
			$src = $image->width(1000)->url();
			$srcset = $image->width(340)->url() . ' 340w,';
			for ($i = 680; $i <= $maxWidth; $i += 340) $srcset .= $image->width($i)->url() . ' ' . $i . 'w,';
		}
		?>
		<img
		class="lazyload<?php if(isset($preload)) echo ' lazypreload' ?>"
		src="<?= $placeholder ?>"
		data-src="<?= $src ?>"
		data-srcset="<?= $srcset ?>"
		data-sizes="auto"
		data-optimumx="1.5"
		height="100%" width="auto" />
		<noscript>
			<img src="<?= $src ?>"
			<?php if (isset($caption) && $caption): ?>
			alt="<?= $caption.' - © '.$site->title()->html() ?>"
			<?php elseif ($image->caption()->isNotEmpty()): ?>
			alt="<?= $image->caption().' - © '.$site->title()->html() ?>"
			<?php else: ?>
			alt="<?= $page->title()->html().' - © '.$site->title()->html() ?>"
			<?php endif ?>
			width="100%" height="auto" />
		</noscript>
	</a>

<?php endif ?>
