function promo_modal(id, title, subtitle, images, text, date) {
    var html_images = '';
    for (var i = 0; i < images.length; i++) {
        html_images += `<img class="img-fluid d-block mx-auto" src="assets/img/${images[i]}" alt=""/>`
    }
    return `
    <div class="portfolio-modal modal fade" id="${id}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal"/></div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="modal-body">
                            <!-- Project Details Go Here-->
                            <h2 class="text-uppercase">${title}</h2>
                            <p class="item-intro text-muted">${subtitle}</p>
                            ${html_images}
                            <p>${text}</p>
                            <ul class="list-inline">
                                <li>Fecha: ${date}</li>
                            </ul>
                            <button class="btn btn-primary" data-dismiss="modal" type="button">
                                <i class="fas fa-times mr-1"></i>
                                Cerrar Promoción
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
}