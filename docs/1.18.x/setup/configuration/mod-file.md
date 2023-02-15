# Setup - Configuration

By the mod file, we refer to the `mods.toml` in `src/main/resources/META/INF`

## Getting rid of comments

Remove almost every comment, (# text,) the only ones you should consider leaving are the `# mandatory` and `# optional` as they may be useful

## Replacing fields' values

There are a lot of fields in the `mods.toml` file, not all have to be changed. Only change the ones specified or if you know what they do.

**Fields:**

- `modId`, your Mod ID, used for referencing which mod something is from. i.e. `/give Player yourmod:coal` for the "yourmod" Mod ID
- `displayName`, what is displayed as the title for your Mod in the Mods List
- `credits`, `authors` and `description` are not needed and are just text shown in your Mod in the Mods List
- `dependencies.examplemod`, change the "examplemod" to the Mod ID you set

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