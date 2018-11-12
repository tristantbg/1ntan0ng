<?php $projectsInCategory = $projects->filterBy('category', $category->id(), ',') ?>
<?php if ($projectsInCategory->count() > 0): ?>
	<section class="projects-category fp-auto-height" data-anchor="<?= $category->uid() ?>">
		<div class="projects-slider">
			<?php foreach ($projects->filterBy('category', $category->id(), ',') as $key => $project): ?>
				<?php if ($project->featured()->isNotEmpty() && $featured = $project->featured()->toFile()): ?>
				<div class="project-item" data-description="<?= $project->text()->kt()->escape() ?>" data-credits="<?= esc($project->displayCredits(4)) ?>">
					<?php snippet('project-thumbnail', ['field' => $project->featured()]) ?>
				</div>
				<?php endif ?>
			<?php endforeach ?>
		</div>
	</section>
<?php endif ?>