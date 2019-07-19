#!/usr/bin/python

import re
var = raw_input("Digite seu e-mail: ")
if re.match("^[a-z]+([._-][0-9a-z]|[0-9])*@[a-z]+([0-9a-z]|[0-9])*(\.com|\.br|.com\.br)$" ,var):
	print("Valido")
else:
	print("Invalido")
	
#TESTE
var = raw_input("Digite seu nome: ")
if re.match("^([a-zA-Z])+$" ,var):
	print("Valido")
else:
	print("Invalido")
	
	

var = raw_input("Digite seu RG: ")
if re.match("^[0-9]{1,3}(\.?[0-9]{3}){2}-?[0-9a-zA-Z]$" ,var):
	print("Valido")
else:
	print("Invalido")
	

var = raw_input("Digite seu CPF: ")
if re.match("^([0-9]{3})\.([0-9]{3})\.([0-9]{3})-([0-9]{2})$" ,var):
	print("Valido")
else:
	print("Invalido")
	

var = raw_input("Digite sua data de nascimento: ")
if re.match("^(0?[1-9]|[12][0-9]|3[01])/(0?[1-9]|1[0-2])/(200[0-9]|201[0-8]|19[0-9]{2})$" ,var):
	print("Valido")
else:
	print("Invalido")
	
	

var = raw_input("Digite seu IP: ")
if re.match("^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[1-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$" ,var):
	print("Valido")
else:
	print("Invalido")
	

var = raw_input("Digite sua mascara de rede: ")
if re.match("^(254|252|248|240|224|192|128)(.0){3}$|^255(.255|.254|.252|.248|.240|.224|.192|.128|.0){3}$" ,var):
	print("Valido")
else:
	print("Invalido")
	


var = raw_input("Digite seu telefone: ")
if re.match("^\(([0-9]{2})\)(9[0-9]{4}|[0-9]{4})-([0-9]{4})$" ,var):
	print("Valido")
else:
	print("Invalido")
	
	
