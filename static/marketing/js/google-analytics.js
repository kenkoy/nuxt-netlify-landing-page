var optimizeId = document.getElementById('ga_data').getAttribute('go_id') || 'OPT-PHSNXP6';
var analyticsId = document.getElementById('ga_data').getAttribute('ga_id') || 'UA-142143961-1';

(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', analyticsId, 'auto');
ga('require', optimizeId);
// ga('send', 'pageview');