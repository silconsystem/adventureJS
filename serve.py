#!/usr/bin/python3
#########################################################
#	python3 script,					#	
#	uses subprocess, http.server module		#
#	127.0.0.1:8000					#
#							#
#########################################################
import subprocess
from optparse import OptionParser

# test empty user input
# a = test against
# b = host
# c = port
def isBlank(string):
	return not (string and string.strip())
def isNotBlank(string):
	return bool(string and string.strip())  
##
print('')
print('@@@@#################################################@@@@')
print('@         serve.py, lv-2020, Trev v Ardens              @')
print("@          python3 localhost server tool                @")      
print('@ syntax for host addr value: 127.0.0.1(or custom addr) @')
print('@  syntax for port addr value: 8000(or custom addr)     @')
print('@@@@#################################################@@@@')
print('')
# get user input
test = ""
host = input('your host adress :: ')
port = input('your port adress :: ')
print('')
print('testing user input')
print('')
# test host and port values for empty or undefined
if isNotBlank(host) and isNotBlank (port):
	print('succes...')
	print('')
	print('starting your localhost server')
	print('')
	print('')
	subprocess.call(("python3", "-m", "http.server", "--bind", host, port))
else:
	print('one or both values empty, getting default addresses')
	print('localhost on: 127.0.0.1:8000')
	print('')
	print('starting your localhost server')
	print('')
	print('')
	host = "127.0.0.1"
	port = "8000"
	subprocess.call(("python3", "-m", "http.server", "--bind", host, port))