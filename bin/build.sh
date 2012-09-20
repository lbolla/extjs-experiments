#!/bin/sh

# Run this with Loader on and ext.js and app.js included in index.html as:
# $> bin/build.sh http://localhost/extjs-experiments/cookbook/ex1a/index.html cookbook/ex1a/

sencha create jsb -a $1 -p $2/app.jsb3 -v
sencha build -p $2/app.jsb3 -v -d $2

# Then, on production, switch to Loader off and app-all.js in index.html
