# Content - Basics
## Registering your first Block

Blocks are registered very similarly to items, see the following:

```java
public class ModBlocks { // We make a new ModBlocks class
    // This is the Block Register we will be using:
    public static final DeferredRegister<Block> BLOCKS = DeferredRegister.create(ForgeRegistries.BLOCKS, TutorialMod.MODID);

    // Very similar to that an Item
    public static final RegistryObject<Item> EXAMPLE_BLOCK = ITEMS.register("example_block",
        () -> new Block(BlockBehaviour.Properties.of(Material.STONE).strength(4f)));
}
```

This registers an `example_block` that has a strength of 4 (breaking speed and blast resistance, you can also use .strength(f1, f2) to specify break speed and blast resistance separately). This strength of 4 is the same as of a cobweb. Many other properties can also be set, try them!

Similarly, we also need to give this register to Forge in our main class:
```java
@Mod(TutorialMod.MODID)
public class TutorialMod {
    public static final String MODID = "tutorialmodid";
    private static final Logger LOGGER = LogUtils.getLogger();

    public TutorialMod() {
        IEventBus modEventBus = FMLJavaModLoadingContext.get().getModEventBus();

        ModItems.ITEMS.register(modEventBus);
        ModBlocks.BLOCKS.register(modEventBus);

        modEventBus.addListener(this::commonSetup);
        MinecraftForge.EVENT_BUS.register(this);
    }

    private void commonSetup(final FMLCommonSetupEvent event) {}
}
```

Upon launching the game, you will not see your block in any creative tab, it can only be spawned in through `/setblock ~ ~ ~ examplemodid:example_block` or similar methods.

---

## Block Items

To fix the previously mentioned problem we use a Block Item

For this example I will use the ModItems class, however you can designate your own class to this or even make a register method which creates both a blokc and its respective Block Item.
```java
public class ModItems {
    public static final DeferredRegister<Item> ITEMS = DeferredRegister.create(ForgeRegistries.ITEMS, TutorialMod.MODID);

    public static final RegistryObject<Item> EXAMPLE_ITEM = ITEMS.register("example_item",
        () -> new Item(new Item.Properties().tab(TutorialMod.EXAMPLE_TAB)));

    // Block Items - - - - -
    // It is very similar to a regular item, we will even be using the same register:
    public static final RegistryObject<Item> EXAMPLE_BLOCK = ITEMS.register("example_block", // Use the same naming for the Block Item as you would the Block
        () -> new BlockItem(ModBlocks.EXAMPLE_BLOCK.get(), new Item.Properties().tab(TutorialMod.EXAMPLE_TAB)));
}
```

And once you run the game both your `example_item` and `example_block` will be there!

---

## Adding Jsons for your Blocks

Blocks require 3 json file types:

| Type                       | Description                                                                                           |
| -------------------------- | ----------------------------------------------------------------------------------------------------- |
| Block Model(s)             | Designates the texture the block should use.                                                          |
| Block's Blockstate Mapping | blockstate designates which model file to load for which blockstate, i.e. if a furnace is lit or not. |
| Block Item's Model         | Loads the block item's texture                                                                        |

### Blockstate
Starting with the one which can get the longest, the blockstate file.

```json
{
  "variants": {
    "": { "model": "modid:block/example_block" }
  }
}
```

This is a very simple blockstate file, with no blockstates.
By a blockstate, we mean the states a block can be in, e.g. for a furnace, the boolean lit being true or false:
```json
{
  "variants": {
    "lit=true": { "model": "modid:block/example_block_lit" },
    "lit=false": { "model": "modid:block/example_block" }
  }
}
```

Blockstates will be covered later, but this is how you'd reference and use them.

The values are inline as it is good practise, being easier to read.

---

### Block Model

Block models are used to define the displayed shape for the block and the textures each side is mapped onto.

Block model jsons are located here:
```
src/main/resources/
    └── assets/modid/
        └── models/block/
```

Block models have multiple different parents for different looks. Here is a one of which all sides have the same texture and is a solid cube:
```json
{
  "parent": "block/cube_all",
  "textures": {
    "all": "modid:block/example_block"
  }
}
```

Here is a plant-like block, where all sides have the same texture, but is of the plant shape:
```json
{
  "parent": "block/cross",
  "textures": {
    "cross": "modid:block/example_block"
  }
}
```

---

### Block Item Model
Ending with the easiest, the Block Item, having only a `parent` field:

Block item models go here, same place as other item model jsons:
```
src/main/resources/
    └── assets/modid/
        └── models/item/
```
And here is the block item json:
```json
{
  "parent": "modid:block/example_block"
}
```

That "example_block" must refer to our Block Model json.


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
    * [x] Blocks
    * [ ] Loot tables


[Continue](loot-tables.md){ .md-button .md-button--primary }