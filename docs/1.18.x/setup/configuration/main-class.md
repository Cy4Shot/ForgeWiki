# Setup - Configuration

The main class is the class the **Forge Mod Loader** operates on. Let's create it!

1. Open `src/main/java` in your favourite IDE and delete its contents.
2. Create a new package called `com.yourname.modid`. *(Replacing `yourname` with your name, and `modid` with your mod ID!)*
3. Inside that package, create a new class either titled `Main` or `YourModName`, for clarity.

You can now write your main class!
```java title="Example Main Class" linenums="1"
@Mod(Main.MODID) //(1)!
public class Main {
    public static final String MODID = "modid"; //(2)!
    private static final Logger LOGGER = LogUtils.getLogger(); //(3)!

    public Main() {
        MinecraftForge.EVENT_BUS.register(this); //(4)!
    }
}
```

1. The `#!java @Mod` annotation is detected by the **FML** *(Forge Mod Loader)*. It loads this class as a mod, with the Mod ID corresponding to that passed into the annotation.
2. This is your Mod ID, as a variable for convenient use anywhere inside your project!
3. The `LOGGER` will allow us to easily log information into the console at runtime!
4. For now, the constructor will only register our mod onto the Event Bus, but will do more in the future!

Finally! Our mod is done! Let's launch it!

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
    * [x] Main Class


[Continue](../../basic-content/registries.md){ .md-button .md-button--primary }