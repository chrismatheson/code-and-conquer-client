'use strict';

const commands = {
  attack: require('./commands/attack'),
  defend: require('./commands/defend'),
  queryOwner: require('./commands/query-owner'),
  queryCoords: require('./commands/query-coords'),
  queryHealth: require('./commands/query-health'),
  roleMine: require('./commands/role-mine'),
  roleSpy: require('./commands/role-spy'),
  roleCloak: require('./commands/role-cloak')
};

const usage = () => {
  console.log('usage: node client.js <command> <args>\n');
  console.log('examples:');
  console.log(' node client.js attack 0,0');
  console.log(' node client.js defend 5,0');
  console.log(' node client.js query-coords 0,1 0,2 0,3');
  console.log(' node client.js query-owner "cpu"');
  console.log(' node client.js query-health 5');
  console.log(' node client.js role-mine 0,9');
  console.log(' node client.js role-spy "Team Three" 5,5');
  console.log(' node client.js role-cloak 1,1 1,2 1,3');
};

if (process.argv.length <= 2) {
  return usage();
}

const command = process.argv[2];
const args = process.argv.splice(3);

switch (command) {
  case 'attack': return commands.attack(args);
  case 'defend': return commands.defend(args);
  case 'query-owner': return commands.queryOwner(args);
  case 'query-coords': return commands.queryCoords(args);
  case 'query-health': return commands.queryHealth(args);
  case 'role-mine': return commands.roleMine(args);
  case 'role-spy': return commands.roleSpy(args);
  case 'role-cloak': return commands.roleCloak(args);
}

console.log(`error: command '${command}' not implemented\n`);
return usage();