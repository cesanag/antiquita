class ProductsList extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <!--Main layout-->
    <main class="mt-5">
      <div class="container">
        <!--Section: Content-->
        <section class="text-center">
          <h4 class="mb-5">
            <strong>Ultimi arrivi</strong>
          </h4>

          <div class="row">

          <div class="col-lg-4 col-md-6 mb-4">
              <div class="card">
                <div
                  class="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="img/products/campagna-napoleone/campagna-napoleone-01.jpg"
                    class="img-fluid"
                  />
                  <a href="#!">
                    <div
                      class="mask"
                      style="background-color: rgba(251, 251, 251, 0.15)"
                    ></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Campagne in Italia di Napoleone</h5>
                  <p class="card-text">
                    Una collezione di stampe delle campagne napoleoniche in Italia.
                  </p>
                  <a href="product-campagnanapoleone.html" class="btn btn-primary">Scopri</a>
                </div>
              </div>
            </div>

            
            <div class="col-lg-4 col-md-12 mb-4">
              <div class="card">
                <div
                  class="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="img/products/villabrianza/villabrianza-01.jpg"
                    class="img-fluid"
                  />
                  <a href="#!">
                    <div
                      class="mask"
                      style="background-color: rgba(251, 251, 251, 0.15)"
                    ></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Ville di Brianza</h5>
                  <p class="card-text">
                    Una collezione di stampe di alcune delle più note ville di
                    Brianza.
                  </p>
                  <a href="product-villabrianza.html" class="btn btn-primary"
                    >Scopri</a
                  >
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card">
                <div
                  class="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="img/products/uccelli/uccelli-01.jpg"
                    class="img-fluid"
                  />
                  <a href="#!">
                    <div
                      class="mask"
                      style="background-color: rgba(251, 251, 251, 0.15)"
                    ></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Uccelli esotici</h5>
                  <p class="card-text">
                    Una collezione di stampe in acquerello tratte da
                    "Dictionnaire universel d'histoire naturelle"
                  </p>
                  <a href="product-uccelliesotici.html" class="btn btn-primary"
                    >Scopri</a
                  >
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card">
                <div
                  class="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="img/products/navigli/navigli-01.jpg"
                    class="img-fluid"
                  />
                  <a href="#!">
                    <div
                      class="mask"
                      style="background-color: rgba(251, 251, 251, 0.15)"
                    ></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Navigli Milanesi</h5>
                  <p class="card-text">
                    Una collezione di stampe dei più importanti scorci milanesi.
                  </p>
                  <a href="product-naviglimilanesi.html" class="btn btn-primary">Scopri</a>
                </div>
              </div>
            </div>

            

          </div>
        </section>
        <!--Section: Content-->

        <hr class="my-5" />
      </div>
    </main>
    <!--Main layout-->
      `;
  }
}

customElements.define("products-list-component", ProductsList);
