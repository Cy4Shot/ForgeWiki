# Setup - Configuration

To start developing your mod, you must setup **IDE runs** via Gradle. These allow you to launch your mod. This varies between different IDEs.

## 1. IntelliJ

1. Navigate to your project folder, and in the File Explorer's URL bar, type `cmd` and hit ++enter++.
2. Once the window opens, type `gradlew genIntellijRuns --refresh-dependencies` and press ++enter++. This generates the **Run Configurations** used to run your project!

## 2. Eclipse

1. Mavigate to your project folder, and in the File Explorer's URL bar, type `cmd` and hit ++enter++.
2. Once the window opens, type  `gradlew genEclipseRuns --refresh-dependencies` and press ++enter++. This generates the **Run Configurations** used to run your project!
3. Now, type `gradlew eclipse` and press ++enter++.

Congrats, your mod runs! Time to edit the `mods.toml` file!.

---

- [x] Tutorial Description
- [x] Installation
    * [x] Installing Java
    * [x] Installing An IDE
    * [x] Downloading Forge
- [ ] Configuration
    * [x] Buildscript
    * [x] Gradlew Commands
    * [ ] Mod File
    * [ ] Main Class
- [ ] Basic Content
    * [ ] Registries
    * [ ] Items
    * [ ] Blocks
    * [ ] Loot tables



[Continue](mod-file.md){ .md-button .md-button--primary }