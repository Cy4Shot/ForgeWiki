# Setup - Configuration

By buildscript, we refer to the `build.gradle` file of your project.

## Getting rid of comments

Remove almost every comment, (// text,) the only one you should leave should be:

```java
//accessTransformer = file("src/main/resources/META-INF/accesstransformer.cfg")
```

as you may need it later by uncommenting it. 

## Replacing defaults

Forge has a lot of example code in the buildscript file, such as "example" and "examplemod". The example refers to the creator of the mod, what you set for your name in `com.yourName.modName`.

Change all occurances of example to your name, and examplemod should change to your modid. For an example:

- example -> mezz
- examplemod -> jei

---

- [x] Tutorial Description
- [x] Installation
    * [x] Installing Java
    * [x] Installing An IDE
    * [x] Downloading Forge
    * [x] Running your mod
- [ ] Configuration
    * [x] File Structure
    * [x] Buildscript
    * [ ] Mod File
    * [ ] Main Class
- [ ] Conclusion


[Continue](mod-file.md){ .md-button .md-button--primary }