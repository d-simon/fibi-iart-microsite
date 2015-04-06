/*
** ieMobile viewport fix
************************
** Fixes wrong viewport behaviour on ieMobile.
** This function depends on further css styling, that should be present on the site:
** @-webkit-viewport   { width: device-width; }
** @-moz-viewport      { width: device-width; }
** @-ms-viewport       { width: device-width; }
** @-o-viewport        { width: device-width; }
** @viewport           { width: device-width; }
**
*/
(function ieMobileFix() {
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(
            document.createTextNode("@-ms-viewport{width:auto!important}")
        );
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
    }
}());


/*
** iPad iOS7 viewport fix
*************************
** Adds descriptional classes for a very narrow fix of a viewport problem occuring in ios7 on the ipad.
** This is a hook dependant on further css styling, that should be present on the site:
** @media (orientation:landscape) {
**     html.ipad.ios7 > body {
**         position: fixed;
**         bottom: 0;
**         width:100%;
**         height: 672px !important;
**     }
** }
**
*/
(function ipadFix() {
    if (navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i) && !window.navigator.standalone) {
        // appends classes to the <html> element:
        document.documentElement.className += " ipad ios7";
    }
}());


export default true;