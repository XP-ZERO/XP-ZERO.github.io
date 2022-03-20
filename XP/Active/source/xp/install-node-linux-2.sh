#!/bin/bash

arm = $(uname -m)

echo "$arm"

if which node > /dev/null
	then
		echo "node is installed, skipping..."
	fi