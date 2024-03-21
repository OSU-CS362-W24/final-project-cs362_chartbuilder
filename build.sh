#!/usr/bin/env bash

#
# Simple "build" script that just copies the app into the build/ directory.
#

mkdir build/
rm -rf build/*
cp dist/*.html dist/*.js build/
