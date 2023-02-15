# Setup - Installation

Whilst developing your mod, it is ran through your [IDE](ide.md), but you cannot yet run it; first, you need to set it up via Gradle.

## Gradle Setup

Gradle is setup through two main ways, one respectively for **Intellij** and another for **Eclipse**.

For any of these to work, your PC must meet the following **requirements**:

- Connected to the **Internet**
- Has **Storage Space**, but not much is needed

### IntelliJ

Being the simplest of the two, only one command has to be ran.
First, navigate to your project folder, and in the File Explorer's URL bar, type `cmd` and hit ++enter++

Once the command window is open, type the following:

- `gradlew genIntellijRuns --refresh-dependencies`, this generates the **Run Configurations**, used to run your project and auto-generate data.

Reopen IntelliJ and in the top-right, go to **Run Configurations** and select `runClient` and press the play icon. Your game will now run!

### Eclipse

First, navigate to your project folder, and in the File Explorer's URL bar, type `cmd` and hit ++enter++

Once the command window is open, type the following:

- `gradlew eclipse`, which cleans some files up
- `gradlew genEclipseRuns --refresh-dependencies`, this generates the **Run Configurations**, used to run your project and auto-generate data.

Reopen Eclipse and in the top-left in the navigation bar, go to **Run Configurations** and select its dropdown list, then `runClient` and select it. 
Press the play icon. Your game will now run!

Congrats, your mod runs! Time to re-structure.

---

- [x] Tutorial Description
- [x] Installation
    * [x] Installing Java
    * [x] Installing An IDE
    * [x] Downloading Forge
    * [x] Running your mod
- [ ] Configuration
    * [ ] File Structure
    * [ ] Buildscript
    * [ ] Mod File
    * [ ] Main Class
- [ ] Conclusion


[Continue](../configuration/file-structure.md){ .md-button .md-button--primary }