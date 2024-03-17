function highlight(dataset, key, action) {
    const element = document.querySelector(`[${dataset}="${key}"]`);

    if (element) {
        action === "add" ? element.classList.add('active') : element.classList.remove('active');
    }
}

window.addEventListener('keydown', (e) => {
    e.preventDefault();
    highlight('data-key', e.code, 'add');
})

window.addEventListener('keyup', (e) => {
    e.preventDefault();
    highlight('data-key', e.code, 'remove');
})

window.addEventListener('mousedown', (e) => {
    e.preventDefault();
    highlight('data-mouse', 'Mouse' + e.button, 'add')
})

window.addEventListener('mouseup', (e) => {
    e.preventDefault();
    highlight('data-mouse', 'Mouse' + e.button, 'remove')
})

window.addEventListener('contextmenu', e => {
    e.preventDefault();
})