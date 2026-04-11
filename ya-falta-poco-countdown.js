/**
 * Cuenta atrás hasta el 2 de mayo de 2026 (medianoche, hora local).
 * Si la fecha ya pasó, muestra un mensaje alternativo.
 */
(function () {
    'use strict';

    var target = new Date(2026, 4, 2, 0, 0, 0, 0).getTime();

    var root = document.getElementById('yfp-countdown-root');
    var live = document.getElementById('yfp-countdown-live');
    if (!root) return;

    var els = {
        days: document.getElementById('yfp-d'),
        hours: document.getElementById('yfp-h'),
        minutes: document.getElementById('yfp-m'),
        seconds: document.getElementById('yfp-s')
    };

    function pad(n) {
        return n < 10 ? '0' + n : String(n);
    }

    function tick() {
        var now = Date.now();
        var distance = target - now;

        if (distance <= 0) {
            if (window._yfpCountdownInterval) {
                clearInterval(window._yfpCountdownInterval);
                window._yfpCountdownInterval = null;
            }
            root.setAttribute('hidden', '');
            var past = document.getElementById('yfp-countdown-past');
            if (past) past.removeAttribute('hidden');
            if (live) live.setAttribute('aria-live', 'polite');
            return;
        }

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (els.days) els.days.textContent = pad(days);
        if (els.hours) els.hours.textContent = pad(hours);
        if (els.minutes) els.minutes.textContent = pad(minutes);
        if (els.seconds) els.seconds.textContent = pad(seconds);
    }

    tick();
    window._yfpCountdownInterval = setInterval(tick, 1000);
})();
