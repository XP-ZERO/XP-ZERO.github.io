#!/bin/bash

echo "test"

ARM=$(uname -m)

echo "${ARM}"

if which node > /dev/null
	then
		echo "node is installed, skipping..."
	fi