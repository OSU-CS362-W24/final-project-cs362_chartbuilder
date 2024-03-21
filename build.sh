#!/usr/bin/env bash

#
# Simple "build" script that just copies the app into the build/ directory.
#

mkdir build/
rm -rf build/*
cp -r src/*.html src/*.css src/*.js src/bar src/bar src/chartBuilder src/gallery src/lib src/line src/scatter build/