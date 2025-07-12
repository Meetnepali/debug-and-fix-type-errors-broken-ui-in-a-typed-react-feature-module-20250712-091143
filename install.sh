#!/bin/sh
set -e

printf '\n[install.sh] Starting Docker image build and setup...\n'

if ! command -v docker >/dev/null 2>&1; then
    echo "[install.sh] Docker is not installed. Please install Docker and try again."
    exit 1
fi

docker build -t recent-activities-dashboard .

printf '\n[install.sh] Docker image build complete. You can now run the environment.\n'
