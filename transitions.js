/* Fallback page transitions for browsers without View Transitions API */
(function () {
    if ('startViewTransition' in document) return; // native CSS handles it

    var html = document.documentElement;
    html.style.opacity = '0';
    html.style.transition = 'opacity 400ms ease';

    requestAnimationFrame(function () {
        requestAnimationFrame(function () {
            html.style.opacity = '1';
        });
    });

    document.addEventListener('click', function (e) {
        var a = e.target.closest('a[href]');
        if (!a) return;
        var href = a.getAttribute('href') || '';
        if (!href ||
            href.charAt(0) === '#' ||
            /^(mailto:|tel:|https?:\/\/)/.test(href) ||
            a.target === '_blank') return;
        e.preventDefault();
        var dest = a.href;
        html.style.opacity = '0';
        setTimeout(function () { location.href = dest; }, 380);
    });
})();
