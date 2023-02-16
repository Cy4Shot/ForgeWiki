# Content - Basics

## Loot tables

Loot-tables define what you get from doing something. Most are from destroying a block and returning the same given block.

Loot-tables are extremely simple to create. It is simply a json matching the registry name of a block, entity, etc. put in a certain folder.

Loot-tables go in this folder:
```
src/main/resources/
    └── data/modid/
        └── loot_tables/tableType/
```

Where `tableType` is one of the following:

| Loot-Table Type | Description                                                                  |
| --------------- | ---------------------------------------------------------------------------- |
| Blocks          | What blocks drop upon breaking.                                              |
| Chests          | The loot chests have inside of them upon opening.                            |
| Entities        | Items dropped by killed entities.                                            |
| Gameplay        | Miscellaneous such as fishing or even what a cat gives you when you wake up. |

Traditionally, loot-tables were made by writing the json yourself, now either DataGen or [a clever website](https://misode.github.io/loot-table){:target="_blank"} can do it for you

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
- [x] Basic Content
    * [x] Registries
    * [x] Items
    * [x] Blocks
    * [x] Loot tables


[Continue](items.md){ .md-button .md-button--primary }