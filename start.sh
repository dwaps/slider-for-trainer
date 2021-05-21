#!/bin/bash

npm i -g slider-for-trainer
path=$(npm ls -g |head -1)
cd $path/node_modules/slider-for-trainer
npm start
