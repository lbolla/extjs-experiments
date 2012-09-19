#!/bin/sh

sencha create jsb -a http://localhost/extjs-experiments/cookbook/ex1/index.html
-p app.jsb3 -v

sencha build -p app.jsb3 -d .
