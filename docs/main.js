(function () {
    var yearNode = document.getElementById("year");
    if (yearNode) {
        yearNode.textContent = String(new Date().getFullYear());
    }

    var lightbox = document.getElementById("lightbox");
    var lightboxImage = document.getElementById("lightbox-image");
    var lightboxCaption = document.getElementById("lightbox-caption");
    var lightboxClose = document.getElementById("lightbox-close");
    var galleryItems = document.querySelectorAll(".gallery-item");

    function closeLightbox() {
        if (!lightbox || !lightbox.hasAttribute("open")) {
            return;
        }
        lightbox.close();
    }

    function openLightbox(src, alt, caption) {
        if (!lightbox || !lightboxImage || !lightboxCaption) {
            return;
        }

        lightboxImage.src = src;
        lightboxImage.alt = alt;
        lightboxCaption.textContent = caption;
        lightbox.showModal();
    }

    galleryItems.forEach(function (item) {
        item.addEventListener("click", function () {
            var image = item.querySelector("img");
            if (!image) {
                return;
            }

            var src = item.getAttribute("data-full") || image.getAttribute("src") || "";
            var alt = image.getAttribute("alt") || "Volvo C30 foto";
            var caption = item.getAttribute("data-caption") || "";
            openLightbox(src, alt, caption);
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener("click", closeLightbox);
    }

    if (lightbox) {
        lightbox.addEventListener("click", function (event) {
            if (event.target === lightbox) {
                closeLightbox();
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeLightbox();
            }
        });
    }
})();
