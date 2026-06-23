# Scorpious187's Character Combat Music

A personal FoundryVTT module (Foundry v14) that adds context-aware music: it automatically switches between area and combat music based on game state, tracks playback position so music resumes where it left off, and crossfades between tracks.

> Personal build maintained by Scorpious187. Originally based on the **Video Game Music** module by Furyspark and Tyler ([Sayshal](https://github.com/Sayshal)).

## Features

- **Area & Combat Music** — assign playlists per-scene for exploration and combat
- **Per-Token Themes** — give individual tokens their own combat music via Token Config
- **Priority System** — control which music wins when multiple sources apply
- **Fallback Modes** — configurable behavior when the active combatant has no theme
- **Crossfade** — adjustable fade duration for smooth transitions between tracks
- **Position Memory** — tracks resume from where they were interrupted
- **Suppression** — toggle area or combat music on/off with hotkeys or scene controls

## Installation

Paste the manifest URL into Foundry's module installer:

```
https://github.com/nscarpinatodev/scorpious187s-character-combat-music/releases/latest/download/module.json
```

To install a specific (pre-)release, use that release's tag-specific manifest URL, e.g.:

```
https://github.com/nscarpinatodev/scorpious187s-character-combat-music/releases/download/release-14.0.0/module.json
```

## Setup

1. **Scene music** — open Scene Config, click the music configuration button to assign area and combat playlists
2. **Token music** — open Token Config (or Prototype Token), find the music button in the Identity tab to assign combat themes
3. **Linked token override** — linked tokens can optionally use their own music instead of the actor's prototype config
4. **Default music** — set a world-level fallback in module settings
5. **Settings** — configure silent combat mode, fade duration, and suppression hotkeys

## Settings

| Setting | Description |
|---|---|
| Silent Combat Music Mode | What plays when the active combatant has no theme (highest priority, last actor, area music, or generic combat) |
| Fade Duration | Crossfade time in seconds (0 = use per-sound fade) |
| Default Music | World-level fallback combat playlist |

## Support

- [GitHub Issues](https://github.com/nscarpinatodev/scorpious187s-character-combat-music/issues)
