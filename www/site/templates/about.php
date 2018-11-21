<?php snippet('header') ?>

<div id="about-page" class="row">
  <div id="about-text">
    <h1 class="lowercase"><?= $page->title()->html() ?></h1>
    <?= $page->text()->kt() ?>
  </div>

  <div id="about-contact">
    <h2 class="lowercase">Contact</h2>
    <?= $page->contact()->kt() ?>
  </div>

  <div id="about-links">
    <h2 class="lowercase">Links</h2>
    <?= $page->displayLinks() ?>
  </div>
</div>

<?php snippet('footer') ?>
