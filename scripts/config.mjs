/**
 * Configuration constants for the Character Combat Music module
 */
export const CONST = {
  moduleId: 'scorpious187s-character-combat-music',
  settings: { silentCombatMusicMode: 'silentCombatMusicMode', defaultMusic: 'defaultMusic', suppressArea: 'suppressArea', suppressCombat: 'suppressCombat', fadeDuration: 'fadeDuration' },
  silentModes: { highestPriority: 'highestPriority', lastActor: 'lastActor', area: 'area', generic: 'generic' },
  playlistSections: {
    DefaultMusic: { combat: { label: 'CCM.PlaylistSection.Combat', priority: -15 } },
    Scene: { area: { label: 'CCM.PlaylistSection.Area', priority: -20 }, combat: { label: 'CCM.PlaylistSection.Combat', priority: -10 } },
    Actor: { combat: { label: 'CCM.PlaylistSection.Combat', priority: 0 } },
    Token: { combat: { label: 'CCM.PlaylistSection.Combat', priority: 5 } }
  },
  documentSortPriority: ['Token', 'Actor', 'Scene', 'DefaultMusic']
};
