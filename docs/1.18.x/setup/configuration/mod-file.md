# Setup - Configuration

The `mods.toml` file is located in `src/main/resources/META_INF/`. It adds additional metadata to the mod. 

You can empty the file and rewrite it. An example `mods.toml` is shown below:

```toml title="Example mods.toml" linenums="1"
modLoader="javafml"
loaderVersion="[40,)"
license="MIT" #(1)!

[[mods]]
    modId="examplemod" #(2)!
    version="1.0.0.0" #(3)!
    displayName="Example Mod" #(4)!
    credits="I'd like to this wiki!" #(5)!
    authors="Author" #(6)!
    description='''
Mod description goes here. #(7)!
    '''

[[dependencies.examplemod]] #(8)!
    modId="forge"
    mandatory=true
    versionRange="[40,)"
    ordering="NONE"
    side="BOTH"

[[dependencies.examplemod]] #(9)!
    modId="minecraft"
    mandatory=true
    versionRange="[1.18.2,1.19)"
    ordering="NONE"
    side="BOTH"
```

1. The lisence for your mod!
2. Your mod ID!
3. Your mod version!
4. The written name of your mod!
5. Credits for your mod!
6. Authors that wrote your mod! (That's you!)
7. The longer, multiline description of your mod.
8. Your mod ID!
9. Your mod ID!

!!! danger "This page is missing content!"

    **TODO: Add descriptions to each possible field of the `mods.toml` file.** 

---

- [x] Tutorial Description
- [x] Installation
    * [x] Installing Java
    * [x] Installing An IDE
    * [x] Downloading Forge
- [ ] Configuration
    * [x] Buildscript
    * [x] Gradlew Commands
    * [x] Mod File
    * [ ] Main Class


[Continue](main-class.md){ .md-button .md-button--primary }