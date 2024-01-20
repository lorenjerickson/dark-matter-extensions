import {DND5E} from '/systems/dnd5e/dnd5e.mjs';
import ActorSheet5eVehicle from '/systems/dnd5e/dnd5e.mjs';

// All the lovely skills, proficiencies, types, and properties
// that make Dark Matter Special.
DND5E.skills['dat'] = {
  ability: 'int',
  label: 'Data',
};
DND5E.skills['pil'] = {
  ability: 'dex',
  label: 'Piloting',
};
DND5E.skills['tec'] = {
  ability: 'int',
  label: 'Technology',
};
DND5E.weaponProficiencies['simpleB'] = 'Simple Blasters';
DND5E.weaponProficienciesMap['simpleB'] = 'simpleB';
DND5E.weaponProficiencies['martialB'] = 'Martial Blasters';
DND5E.weaponProficienciesMap['martialB'] = 'martialB';
DND5E.weaponTypes['simpleB'] = 'Simple Blasters';
DND5E.weaponTypes['martialB'] = 'Martial Blasters';
DND5E.weaponProperties['aut'] = 'Automatic';
DND5E.weaponProperties['blas'] = 'Blaster';
DND5E.weaponProperties['explo'] = 'Explosive';
DND5E.weaponProperties['fist'] = 'Fist';
DND5E.weaponProperties['fore'] = 'Foregrip';
DND5E.weaponProperties['heat'] = 'Heat';
DND5E.weaponProperties['mount'] = 'Mounted';
DND5E.weaponProperties['nonle'] = 'Nonlethal';
DND5E.weaponProperties['oheat'] = 'Overheat';
DND5E.weaponProperties['scat'] = 'Scatter';
DND5E.weaponProperties['sight'] = 'Sighted';

export class DarkMatterShipSheet extends ActorSheet5eVehicle {
  get template() {
    if ( !game.user.isGM && this.actor.limited ) {
      return 'systems/dnd5e/templates/actors/limited-sheet.html';
    }
    return `modules/dark-matter-extensions/templates/${this.actor.data.type}-sheet.html`;
  }
}

Actors.registerSheet('dnd5e',
    DarkMatterShipSheet,
    {
      label: 'Dark Matter Ship',
      makeDefault: false,
      types: ['vehicle'],
    },
);

Hooks.on('ready', function() {
  console.debug('DME | This code runs once core initialization is ready and'+
    ' game data is available.');
  if (!game.modules.get('lib-wrapper')?.active && game.user.isGM) {
    ui.notifications.error('Module DME(Dark Matter Extensions) requires'+
      ' the "libWrapper" module. Please install and activate it.');
  }
});
