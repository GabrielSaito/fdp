#!/bin/bash
echo "Validador de informações"

read -p  "Digite seu nome: " NAME
(echo $NAME | grep -E '^([a-zA-Z])$' && echo -e 'Valido' || echo -e 'Invalido'

read -p "DIgite a data: " DAT
echo $DAT | grep -E '^(0?[1-9]|[12][0-9]|3[01])/(0?[1-9]|1[0-2])/(200[0-9]|201[0-8]|19[0-9]{2})$' && echo -e 'Valido' || echo -e 'Invalido'

read -p "Digite seu CPF: " CPF
echo $CPF | grep -E '^([0-9]{3})\.([0-9]{3})\.([0-9]{3})-([0-9]{2})$' && echo -e 'Valido' || echo -e 'Invalido'

read -p "Digite seu RG: " RG
echo $RG | grep -E '^[0-9]{1,3}(\.?[0-9]{3}){2}-?[0-9a-zA-Z]$' && echo -e 'Valido' || echo -e 'Invalido'

read -p "Digite seu telefone: " TEL
echo $TEL | grep -E '^\(([0-9]{2})\)(9[0-9]{4}|[0-9]{4})-([0-9]{4})$' && echo -e 'Valido' || echo -e 'Invalido'

read -p  "Digite seu e-mail: " MAIL
echo $MAIL | grep -E '^[a-z]+([._-][0-9a-z]|[0-9])*@[]a-z+([0-9a-z]|[0-9])*(\.com|\.br|.com\.br)$' && echo -e 'Valido' || echo -e 'Invalido'
 
read -p "Digite seu IP: " IP
echo $IP | grep -E '^(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[1-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$' $$ echo -e 'Valido || echo -e 'Invalido'

read -p "Digite sua mascara de rede: " MASK
echo $MASK | grep -E '^(254|252|248|240|224|192|128)(.0){3}$|^255(.255|.254|.252|.248|.240|.224|.192|.128|.0){3}$' $$ echo -e 'Valido' | echo -e 'Invalido'
