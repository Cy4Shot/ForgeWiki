# Setup - Configuration

By the main class, we refer to the class with the same name as your mod. The MDK already has one, in your `src/main/java/com/yourName/modName` there should be an `ExampleMod.java` file. Refactor it (smart rename it) to your mod name, i.e. Jei.java for the Just Enough Items Mod

## Clean-up

A cleaned-up Main Class should look a lot like this:
```java
@Mod(TutorialMod.MODID)
public class TutorialMod {
    public static final String MODID = "tutorialmodid";
    private static final Logger LOGGER = LogUtils.getLogger();

    public TutorialMod()
    {
        IEventBus modEventBus = FMLJavaModLoadingContext.get().getModEventBus();
        modEventBus.addListener(this::commonSetup);
        MinecraftForge.EVENT_BUS.register(this);
    }

    private void commonSetup(final FMLCommonSetupEvent event)
    {
        // We may put stuff here later so we will keep the method body
    }
}
```

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