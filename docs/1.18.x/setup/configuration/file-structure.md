# Setup - Configuration
## Folder Naming

The usual convention for folders is `com/yourName/modName`, but of course you don't have to stick to it.

Each modder has their own style of folder naming that is very similar, for each content package, such as your code for blocks, I would suggest either `block` or `blocks`. This goes in your `common` package (read below)

##  Organisation

All your content goes in your `src/main/java/com/yourName/modName` package from your main folder.
There are usually two packages made in every mod, but you don't have to have them all or name them the same:

- Common
- Client

Common holds everything that needs to be on both the client and the server. For example: items and blocks.
Client holds everything that only the client needs, your instance of the game. For example: rendering and entity models

You don't have to make these folders immediately, only when they are needed.

For my recommendation, in your `common` package, you should also create a `core` folder to hold your [Main Class](main-class.md) and then inside of that, either a `registry` or `init` folder, your choice, to register your content (blocks and items etc.) to the game so it knows that it exists!

---

- [x] Tutorial Description
- [x] Installation
    * [x] Installing Java
    * [x] Installing An IDE
    * [x] Downloading Forge
    * [x] Running your mod
- [ ] Configuration
    * [x] File Structure
    * [ ] Buildscript
    * [ ] Mod File
    * [ ] Main Class
- [ ] Conclusion


[Continue](buildscript.md){ .md-button .md-button--primary }