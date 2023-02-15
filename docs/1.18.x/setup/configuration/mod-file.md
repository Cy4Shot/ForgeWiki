# Setup - Configuration

By the mod file, we refer to the `mods.toml` in `src/main/resources/META/INF`

## Getting rid of comments

Remove almost every comment, (# text,) the only ones you should consider leaving are the `# mandatory` and `# optional` as they may be useful

## Replacing fields' values

There are a lot of fields in the `mods.toml` file, not all have to be changed. Only change the ones specified or if you know what they do.

| Field                     | Description                                                                                                                        |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `modId`                   | Your Mod ID, used for referencing which mod something is from. i.e. `/give Player yourmod:coal` for the "yourmod" Mod ID           |
| `displayName`             | What is displayed as the title for your Mod in the Mods List                                                                       |
| `dependencies.examplemod` | Change the "examplemod" to the Mod ID you set, used for saying what your mod depends on to run, e.g. Jei if it was a Jei extension |

---

- [x] Tutorial Description
- [x] Installation
    * [x] Installing Java
    * [x] Installing An IDE
    * [x] Downloading Forge
    * [x] Running your mod
- [ ] Configuration
    * [x] File Structure
    * [x] Buildscript
    * [x] Mod File
    * [ ] Main Class
- [ ] Conclusion


[Continue](main-class.md){ .md-button .md-button--primary }