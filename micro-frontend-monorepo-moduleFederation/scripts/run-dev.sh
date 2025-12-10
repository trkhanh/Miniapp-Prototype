#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

# Ports configured in webpack configs:
# shell -> 3000, mini-app-1 -> 3001, mini-app-2 -> 3002

mkdir -p "$ROOT/logs"

echo "Starting dev servers (logs -> $ROOT/logs)"

npm --prefix "$ROOT/packages/mini-app-1" run start > "$ROOT/logs/mini-app-1.log" 2>&1 &
P1=$!

echo "mini-app-1 PID: $P1"

npm --prefix "$ROOT/packages/mini-app-2" run start > "$ROOT/logs/mini-app-2.log" 2>&1 &
P2=$!

echo "mini-app-2 PID: $P2"

npm --prefix "$ROOT/packages/shell" run start > "$ROOT/logs/shell.log" 2>&1 &
P3=$!

echo "shell PID: $P3"

echo "All processes started. Use 'kill PID' to stop individual servers, or Ctrl-C to stop this script (won't stop background processes)."

echo "To follow logs: tail -f logs/shell.log logs/mini-app-1.log logs/mini-app-2.log"

# Wait for background processes so the script doesn't immediately exit
wait $P1 $P2 $P3
