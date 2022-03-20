#!/bin/bash

ARM=$(uname -m)

echo "${ARM}"

if which node > /dev/null
	then
		echo "node is installed, skipping..."
	else
		if [ $ARM == "armv6l" ]
			then
				echo "installing node for ARM 6..."
			else
				echo "installing node for ARM 7+..."
			fi
	fi