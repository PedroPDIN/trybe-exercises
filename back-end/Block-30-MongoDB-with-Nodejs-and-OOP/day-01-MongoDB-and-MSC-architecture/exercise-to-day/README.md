## Caso haja erro no listen(3000);

### lsof -i :3000 => para verificar se há alguma porta em aberto/uso;
### kill -9 (id) => comando para matar a aplicação em aberto, referenciando é claro pelo o ID.