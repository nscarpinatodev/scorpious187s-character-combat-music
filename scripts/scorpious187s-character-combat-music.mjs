import { registerSettings, registerKeybindings } from './settings.mjs';
import { MusicController } from './music-controller.mjs';
import {
  getSceneControlButtons,
  handleCanvasReady,
  handleCreateCombatant,
  handleDeleteCombat,
  handleDeleteCombatant,
  handleReady,
  handleSceneConfigRender,
  handleTokenConfigRender,
  handleUpdateActor,
  handleUpdateCombat,
  handleUpdateScene,
  handleUpdateToken,
  CharacterCombatMusicConfig
} from './app.mjs';

Hooks.once('init', async () => {
  console.log('CCM | Initializing Character Combat Music module');
  game.characterCombatMusic = { musicController: new MusicController(), CharacterCombatMusicConfig: CharacterCombatMusicConfig };
  registerSettings();
  registerKeybindings();
  await foundry.applications.handlebars.loadTemplates(['modules/scorpious187s-character-combat-music/templates/music-config.hbs']);
});
Hooks.once('ready', handleReady);
Hooks.on('getSceneControlButtons', getSceneControlButtons);
Hooks.on('renderSceneConfig', handleSceneConfigRender);
Hooks.on('updateCombat', handleUpdateCombat);
Hooks.on('deleteCombat', handleDeleteCombat);
Hooks.on('canvasReady', handleCanvasReady);
Hooks.on('updateScene', handleUpdateScene);
Hooks.on('updateActor', handleUpdateActor);
Hooks.on('updateToken', handleUpdateToken);
Hooks.on('createCombatant', handleCreateCombatant);
Hooks.on('deleteCombatant', handleDeleteCombatant);
Hooks.on('renderTokenApplication', handleTokenConfigRender);
