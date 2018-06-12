#!/usr/bin/env bash
echo "running sendgrid shell script"
function localtunnel {
  lt -s sdsadasdlajsdsajd --port 5150
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
