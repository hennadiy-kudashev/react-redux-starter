#!/bin/bash

ssh -p22 bewirbme@dev.bewirb.me -i ~/.ssh/id_rsa.pub "rm -rf /home/bewirbme/webapps/now.bewirb.me/*"
scp -r build/* bewirbme@dev.bewirb.me:/home/bewirbme/webapps/now.bewirb.me