# Setup - Configuration

By the main class, we refer to the class with the same name as your mod. The MDK already has one, in your `src/main/java/com/yourName/modName` there should be an `ExampleMod.java` file. Refactor it (smart rename it) to your mod name, i.e. Jei.java for the Just Enough Items Mod

## Cleanup

1. Remove every comment (// text) as they clutter the class
2. Delete the code inside the `commonSetup` method
3. Remove the `onServerStarting` method and its annotation completely
4. Completely delete the ClientModEvents class and its annotation
5. Remove the `BLOCKS` and `ITEMS` Deferred Registers at the top of the class and the Registry Objects that used them

There are a lot of fields in the `mods.toml` file, not all have to be changed. Only change the ones specified or if you know what they do.

!!! info
    You need to change the String `MODID` at the top of the class to match your set Mod ID in the [Mod File](mod-file.md)

## Testing

Run the game through the runClient Configuration another time to make sure no errors occur.

If they do, look through the console log in your IDE and find the root of the problem

---

- [x] Tutorial Description
- [x] Installation
    * [x] Installing Java
    * [x] Installing An IDE
    * [x] Downloading Forge
    * [x] Running your mod
- [x] Configuration
    * [x] File Structure
    * [x] Buildscript
    * [x] Mod File
    * [x] Main Class
- [ ] Conclusion


[Continue](main-class.md){ .md-button .md-button--primary }