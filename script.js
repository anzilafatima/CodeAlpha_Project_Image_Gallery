const galleryItems = document.querySelectorAll('.gallery-item img');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const closeBtn = document.getElementById('closeModal');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            modal.style.visibility = 'visible';
            modal.style.opacity = '1';
            modalImg.src = item.src;
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.visibility = 'hidden';
        modal.style.opacity = '0';
    });

    modal.addEventListener('click', (e) => {
        if (e.target !== modalImg) {
            modal.style.visibility = 'hidden';
            modal.style.opacity = '0';
        }
    });
    const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('input', (e) => {
        const searchValue = e.target.value.toLowerCase();
        const galleryItems = document.querySelectorAll('.gallery-item');

        galleryItems.forEach(item => {
            const caption = item.querySelector('p').textContent.toLowerCase();
            if (caption.includes(searchValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });