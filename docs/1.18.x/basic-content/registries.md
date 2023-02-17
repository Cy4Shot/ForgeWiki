# Content - Basics

!!! danger "Unfinished"

    This section hasn't been completed yet!

## Registries

Any content from vanilla are just constant fields in classes such as `Items.java`, `Blocks.java` etc, but we cannot just add code to these files, instead however, we use a workaround!

We use Registers, basically large data-holders to store all of our modded content to be shipped off to Forge and put into the game, but how do we use them?

```java
// This is an example of a Register:
public static final DeferredRegister<RegType> REGISTER =
    DeferredRegister.create(ForgeRegistries.REGISTRY_TYPE, TutorialMod.MODID);
```

We can then access this registry via a reference and "put" our content into it, as long as it matches the paramaterised type and that matches the type passed into the .create() function.

---

- [x] Tutorial Description
- [ ] Basic Content
    * [x] Registries
    * [ ] Items
    * [ ] Blocks
    * [ ] Loot tables


[Continue](items.md){ .md-button .md-button--primary }