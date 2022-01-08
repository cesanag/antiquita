class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <!--Footer-->
    <footer class="bg-light text-lg-start">
      <div class="py-4 text-center">
        <a
          role="button"
          class="btn btn-primary btn-lg m-2"
          href="products.html"
          rel="nofollow"
        >
          Prodotti
        </a>
        <a
          role="button"
          class="btn btn-primary btn-lg m-2"
          href="contacts.html"
          href="contacts.html"
        >
          Contatti
        </a>
      </div>

      <hr class="m-0" />

      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2021 Copyright:
        <a class="text-dark" href="index.html">Antiquita</a>
      </div>
      <!-- Copyright -->
    </footer>
    <!--Footer-->
      `;
  }
}

customElements.define("footer-component", Footer);
