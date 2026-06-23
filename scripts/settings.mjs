import { CharacterCombatMusicConfig } from './app.mjs';
import { CONST } from './config.mjs';

/**
 * Register module settings and configuration menu
 */
export function registerSettings() {
  game.settings.register(CONST.moduleId, CONST.settings.silentCombatMusicMode, {
    name: 'CCM.Settings.SilentCombatMusicMode.Name',
    hint: 'CCM.Settings.SilentCombatMusicMode.Hint',
    scope: 'world',
    config: true,
    type: String,
    choices: {
      [CONST.silentModes.highestPriority]: 'CCM.Settings.SilentCombatMusicMode.HighestPriority',
      [CONST.silentModes.lastActor]: 'CCM.Settings.SilentCombatMusicMode.LastActor',
      [CONST.silentModes.area]: 'CCM.Settings.SilentCombatMusicMode.Area',
      [CONST.silentModes.generic]: 'CCM.Settings.SilentCombatMusicMode.Generic'
    },
    default: CONST.silentModes.highestPriority,
    onChange: () => {
      game.characterCombatMusic?.musicController?.playCurrentTrack();
    }
  });

  game.settings.registerMenu(CONST.moduleId, 'defaultMusicMenu', {
    name: 'CCM.Settings.DefaultMusic.Name',
    label: 'CCM.Settings.DefaultMusic.Label',
    hint: 'CCM.Settings.DefaultMusic.Hint',
    icon: 'fas fa-music',
    type: CharacterCombatMusicConfig,
    restricted: true
  });

  game.settings.register(CONST.moduleId, CONST.settings.defaultMusic, {
    name: 'CCM.Settings.DefaultMusic.Name',
    scope: 'world',
    config: false,
    type: Object,
    default: { documentName: 'DefaultMusic', data: { [CONST.moduleId]: { music: {} } } }
  });

  game.settings.register(CONST.moduleId, CONST.settings.fadeDuration, {
    name: 'CCM.Settings.FadeDuration.Name',
    hint: 'CCM.Settings.FadeDuration.Hint',
    scope: 'world',
    config: true,
    type: Number,
    range: { min: 0, max: 10, step: 0.5 },
    default: 0
  });

  game.settings.register(CONST.moduleId, CONST.settings.suppressArea, {
    name: 'CCM.Settings.SuppressArea.Name',
    scope: 'world',
    config: false,
    type: Boolean,
    default: false,
    onChange: () => {
      game.characterCombatMusic?.musicController?.playCurrentTrack();
    }
  });

  game.settings.register(CONST.moduleId, CONST.settings.suppressCombat, {
    name: 'CCM.Settings.SuppressCombat.Name',
    scope: 'world',
    config: false,
    type: Boolean,
    default: false,
    onChange: () => {
      game.characterCombatMusic?.musicController?.playCurrentTrack();
    }
  });
}

/**
 * Register keybindings
 */
export function registerKeybindings() {
  game.keybindings.register(CONST.moduleId, 'toggleAreaMusic', {
    name: 'CCM.Keybindings.ToggleAreaMusic',
    onDown: () => toggleAreaMusic()
  });

  game.keybindings.register(CONST.moduleId, 'toggleCombatMusic', {
    name: 'CCM.Keybindings.ToggleCombatMusic',
    onDown: () => toggleCombatMusic()
  });
}

/**
 * Toggle area music suppression
 */
async function toggleAreaMusic() {
  const current = game.settings.get(CONST.moduleId, CONST.settings.suppressArea);
  await game.settings.set(CONST.moduleId, CONST.settings.suppressArea, !current);
  ui.controls.render();
}

/**
 * Toggle combat music suppression
 */
async function toggleCombatMusic() {
  const current = game.settings.get(CONST.moduleId, CONST.settings.suppressCombat);
  await game.settings.set(CONST.moduleId, CONST.settings.suppressCombat, !current);
  ui.controls.render();
}
