#!/bin/sh

# Run this with Loader on and ext.js and app.js included in index.html
sencha create jsb -a http://localhost/extjs-experiments/cookbook/ex1a/index.html -p app.jsb3 -v
sencha build -p app.jsb3 -v -d .

# Then, on production, switch to Loader off and app-all.js in index.html
