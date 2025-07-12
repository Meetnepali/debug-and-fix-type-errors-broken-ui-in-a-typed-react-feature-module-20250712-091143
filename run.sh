#!/bin/sh
set -e

./install.sh

CONTAINER_ID=$(docker ps -aqf "name=recent-activities-dashboard-dev")
if [ -n "$CONTAINER_ID" ]; then
  echo "[run.sh] Stopping and removing existing container..."
  docker stop $CONTAINER_ID >/dev/null
  docker rm $CONTAINER_ID >/dev/null
fi

echo "[run.sh] Starting the dev server (http://localhost:5173) in Docker..."
docker run --rm -p 5173:5173 --name recent-activities-dashboard-dev recent-activities-dashboard
