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
| `blocks`          | What blocks drop upon breaking.                                              |
| `chests`          | The loot chests have inside of them upon opening.                            |
| `entities`        | Items dropped by killed entities.                                            |
| `gameplay`        | Miscellaneous such as fishing or even what a cat gives you when you wake up. |

Traditionally, loot-tables were made by writing the json yourself, now either DataGen or [a clever website](https://misode.github.io/loot-table){:target="_blank"} can do it for you

---

- [x] Tutorial Description
- [x] Basic Content
    * [x] Registries
    * [x] Items
    * [x] Blocks
    * [x] Loot tables


[Continue](items.md){ .md-button .md-button--primary }