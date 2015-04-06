/*
** sync.js
**********
** Sync Config file.
*/


//** Options **//
var paths = require('./paths.js');
var extend = require('extend');


//** Dependencies **//
//


//** Main **//
var baseCfg = {
    snippetOptions: {
        ignorePaths: "**/{admin}/**",
        rule: {
            match: /<\/body>/i,
            fn: function (snippet, match) { return snippet + match; }
        }
    },
    notify: {
        styles: [
            "display: none",
            "padding: 15px",
            "font-family: monospace",
            "position: fixed",
            "font-size: 12px",
            "z-index: 9999",
            "top: 0px",
            "right: 0px",
            "border-bottom-left-radius: 5px",
            "background-color: rgba(27,32,50, 0.9)",
            "margin: 0",
            "color: white",
            "text-align: left",
            "pointer-events: none"
        ]
    }
};
var serverCfg = extend(true,
    {},
    baseCfg,
    {
        server: {
            baseDir: paths.build,
            injectChanges: true
        }
    }
);
var proxyCfg = extend(true,
    {},
    baseCfg,
    {
        proxy: 'localhost:8000'
    }
);
var snippetCfg = {
    logSnippet: true
}


//** Export **//
module.exports = {
    server: serverCfg,
    proxy: proxyCfg,
    snippet: snippetCfg
}