# Content - Basics
## Registering your first Item

First, create a class to store all your items, for this, we will be using ModItems.java

```java
public class ModItems {
    //This is the Item Register we will be using:
    public static final DeferredRegister<Item> ITEMS = DeferredRegister.create(ForgeRegistries.ITEMS, TutorialMod.MODID);

    //Now then, **we need to add Items to this register**. We do this by making a RegistryObject that fits the requirements of the register we put it into:
    public static final RegistryObject<Item> EXAMPLE_ITEM = ITEMS.register("example_item",
        () -> new Item(new Item.Properties().tab(CreativeModeTab.TAB_MISC)));
}
```

When the game is run, nothing will happen as of yet, we need to send the register we put our items in to Forge by doing this in our main class:
```java
@Mod(TutorialMod.MODID)
public class TutorialMod {
    public static final String MODID = "tutorialmodid";
    private static final Logger LOGGER = LogUtils.getLogger();

    public TutorialMod() {
        IEventBus modEventBus = FMLJavaModLoadingContext.get().getModEventBus();

        ModItems.ITEMS.register(modEventBus); // That's it. Only this line is added here. Quite simple, yes?

        modEventBus.addListener(this::commonSetup);
        MinecraftForge.EVENT_BUS.register(this);
    }

    private void commonSetup(final FMLCommonSetupEvent event) {}
}
```

## Adding Jsons for your Items

When you ran the game you will notice that your item has a blocky, black and purple texture. Jsons are special types of files acting as pointers, pointing an item to its texture and rendering model, but don't worry, they're simple text!

Json files have the suffix `.json`, and we put these in special folders we create:
```
src/main/resources/
    └── assets/tutorialmodid/
        └── models/item/
```

We put the jsons in that `models/item` folder, and we name them `itemname.json` so for our item, it'd be `example_item.json`

These json files must contain the following json code:
```json
{
  "parent": "item/generated",
  "textures": {
    "layer0": "tutorialmodid:item/example_item"
  }
}
```

The parent is the model that is used for it, generated shows it held like a diamond, and if you use `item/handheld` it looks like how a stick would for example.

The value of `layer0` must match the right modid ("examplemod"), folder ("item" (it paths from `models/`)), and then the "example_item" must match the name of our Item texture.

---

## Textures

Your textures have to be in a `.png` format, and using anything other than 16x16 will cause problems unless we specify the texture size in the json.

They go in this folder:
```
src/main/resources/
    └── assets/examplemod/
        └── textures/item/
```

And as our Item is called "example_item" the texture would be `example_item.png` to match with the json!

When you run the game, your Item should have its provided texture!

!!! bug "Fixing issues"
    If your Item texture does not load correctly, look in the console log for messages flagged as warnings, by the "WARN" at the left, it should say generally what is wrong; can't find the json? May be named incorrectly or put in the wrong place. Texture unable to be found? May also be named incorrectly or put in the wrong place.

---

## Assigning your Items to your own Tabs

Tabs are very easy to create. First, we add some code to the [Main Class](../setup/configuration/main-class.md)

```java
@Mod(TutorialMod.MODID)
public class TutorialMod {
    public static final String MODID = "tutorialmodid";
    private static final Logger LOGGER = LogUtils.getLogger();

    // We make a new constant field for our Tab
    public static final CreativeModeTab EXAMPLE_TAB = new CreativeModeTab("tutorialtab") {
        // We override this method for the shown Tab icon. For this example, we are using our item. You can also use vanilla ones.
        @Override
        public @NotNull ItemStack makeIcon() {
            return new ItemStack(ModItems.EXAMPLE_ITEM.get()); // .get() is only for Registry Objects (modded only)
        }
    };

    public TutorialMod() {
        IEventBus modEventBus = FMLJavaModLoadingContext.get().getModEventBus();

        ModItems.ITEMS.register(modEventBus);

        modEventBus.addListener(this::commonSetup);
        MinecraftForge.EVENT_BUS.register(this);
    }

    private void commonSetup(final FMLCommonSetupEvent event) {}
}
```

Now, we add our Item to this Tab with the Item.Properties#tab
```java
    public static final RegistryObject<Item> EXAMPLE_ITEM = ITEMS.register("example_item",
        () -> new Item(new Item.Properties().tab(TutorialMod.EXAMPLE_TAB)));
```

Now there should be an arrow icon at the top in the creative menu, cycle through to your tab and your item should be in there!

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
- [ ] Basic Content
    * [x] Registries
    * [x] Items
    * [ ] Blocks
    * [ ] Loot tables


[Continue](blocks.md){ .md-button .md-button--primary }