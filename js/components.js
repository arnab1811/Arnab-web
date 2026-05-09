/* ============================================================
   SHARED COMPONENTS — nav & footer injected via JS
   ============================================================ */

(function () {
  const NAV_HTML = `
  <nav class="nav">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">Arnab <span>Gupta</span></a>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="pages/about.html">About</a></li>
        <li><a href="pages/research.html">Research</a></li>
        <li><a href="pages/projects.html">Projects</a></li>
        <li><a href="pages/writing.html">Writing</a></li>
        <li><a href="pages/teaching.html">Teaching</a></li>
        <li><a href="pages/personal.html">Personal</a></li>
        <li><a href="pages/contact.html" class="nav-cta">Contact</a></li>
      </ul>
      <button class="nav-hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;

  const FOOTER_HTML = `
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="nav-logo">Arnab <span>Gupta</span></div>
        <p>Seed systems researcher, digital innovation advisor, and curious generalist. Based in Wageningen, Netherlands.</p>
      </div>
      <div class="footer-col">
        <h5>Navigate</h5>
        <ul>
          <li><a href="../index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="research.html">Research</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="writing.html">Writing</a></li>
          <li><a href="teaching.html">Teaching</a></li>
          <li><a href="personal.html">Personal</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Connect</h5>
        <ul>
          <li><a href="https://www.wur.nl/en/persons/arnab-gupta" target="_blank">WUR Profile</a></li>
          <li><a href="https://orcid.org/0000-0002-5672-5735" target="_blank">ORCID</a></li>
          <li><a href="https://www.researchgate.net/profile/Arnab-Gupta-2" target="_blank">ResearchGate</a></li>
          <li><a href="https://arnabgupta9.substack.com" target="_blank">Substack</a></li>
          <li><a href="https://linkedin.com/in/arnab-gupta-4198271b" target="_blank">LinkedIn</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 Arnab Gupta · Wageningen, Netherlands</span>
      <span>ORCID: 0000-0002-5672-5735</span>
    </div>
  </footer>`;

  // Inject nav
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;
  else document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;
  else document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
})();
