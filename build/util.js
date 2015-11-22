/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2015-11-17 23:49:48
 * @version $Id$
 */

// add class
function addClass(dom, className) {
    if (dom.classList) {
        dom.classList.add(className);
    } else {
        dom.className += ' ' + className;
    }
}

// remove class
function removeClass(dom, className) {
    if (dom.classList) {
        dom.classList.remove(className);
    } else {
        var reg = new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi');
        dom.className = dom.className.replace(reg, ' ');
    }
}

function ua (needle) {
    return window.navigator.userAgent.toLowerCase().indexOf(needle) !== -1;
};