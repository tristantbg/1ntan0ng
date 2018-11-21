<div class="row">
  <div id="about-text">
    <h2 class="lowercase"><?= $aboutPage->title()->html() ?></h2>
    <?= $aboutPage->text()->kt() ?>
  </div>

  <div id="about-contact">
    <h2 class="lowercase">Contact</h2>
    <?= $aboutPage->contact()->kt() ?>
  </div>

  <div id="about-links">
    <h2 class="lowercase">Links</h2>
    <?= $aboutPage->displayLinks() ?>
  </div>
</div>

<div event-target="about">
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 35 35"><path d="M35 32.6L19.9 17.4 35 2.3 32.7 0 17.6 15.2 3 .5.6 2.9l14.5 14.6L0 32.6l2.3 2.3 15.1-15.1L32.6 35z"/></svg>
</div>
