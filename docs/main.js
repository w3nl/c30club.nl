(() => {
  const yearNode = document.getElementById('year')
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear())
  }

  const lightbox = document.getElementById('lightbox')
  const lightboxImage = document.getElementById('lightbox-image')
  const lightboxCaption = document.getElementById('lightbox-caption')
  const lightboxClose = document.getElementById('lightbox-close')
  const galleryItems = document.querySelectorAll('.gallery-item')

  const closeLightbox = () => {
    if (!lightbox || !lightbox.hasAttribute('open')) {
      return
    }

    lightbox.close()
  }

  const openLightbox = (src, alt, caption) => {
    if (!lightbox || !lightboxImage || !lightboxCaption) {
      return
    }

    lightboxImage.src = src
    lightboxImage.alt = alt
    lightboxCaption.textContent = caption
    lightbox.showModal()
  }

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const image = item.querySelector('img')
      if (!image) {
        return
      }

      const src = item.getAttribute('data-full') || image.getAttribute('src') || ''
      const alt = image.getAttribute('alt') || 'Volvo C30 foto'
      const caption = item.getAttribute('data-caption') || ''
      openLightbox(src, alt, caption)
    })
  })

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox)
  }

  if (lightbox) {
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) {
        closeLightbox()
      }
    })

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeLightbox()
      }
    })
  }
})()
