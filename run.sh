#!/bin/bash -x
env_file=$1

docker build -t phartono/appointment-check-challenge:1.0.0 .

docker run --rm -it --name appointment-check-challenge --env-file=${env_file} phartono/appointment-check-challenge:1.0.0