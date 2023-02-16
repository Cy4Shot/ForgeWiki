# Setup - Configuration

## 1. Deciding Your Mod ID

You should now decide on a Mod ID! This is a unique identifier for your mod comprising of **lowercase letters**. For example:

- **Minecraft** has a Mod ID of `minecraft`.
- **Just Enough Items** has a Mod ID of `jei`.
- **Machina** has a Mod ID of `machina`.

Remember this ID as it will be used a lot.

## 2. The Buildscript

The buildscript is the `build.gradle` file of your project.

1. Open up the file, and start deleting all the comments *(Lines that begin with a `//`)*.
2. Next, replace all occurences of `examplemod` with your Mod ID.
3. Finally, replace `example` with your name.


??? example "Example build.gradle"

    ```groovy title="Below is an example, annotated, buildscript." linenums="1"
    plugins {
        id 'eclipse'
        id 'maven-publish'
        id 'net.minecraftforge.gradle' version '5.1.+'
    }

    version = '1.0' //(1)!
    group = 'com.yourname.modid' //(2)!
    archivesBaseName = 'modid' //(3)!

    java.toolchain.languageVersion = JavaLanguageVersion.of(17)

    minecraft {
        mappings channel: 'official', version: '1.19.3' //(4)!

        runs {
            client {
                workingDirectory project.file('run')
                property 'forge.logging.markers', 'REGISTRIES'
                property 'forge.logging.console.level', 'debug'
                property 'forge.enabledGameTestNamespaces', 'examplemod'
                mods {
                    examplemod/*(8)!*/ { source sourceSets.main }
                }
            }

            server {
                workingDirectory project.file('run')
                property 'forge.logging.markers', 'REGISTRIES'
                property 'forge.logging.console.level', 'debug'
                property 'forge.enabledGameTestNamespaces', 'examplemod'
                mods {
                    examplemod/*(9)!*/ { source sourceSets.main }
                }
            }

            gameTestServer {
                workingDirectory project.file('run')
                property 'forge.logging.markers', 'REGISTRIES'
                property 'forge.logging.console.level', 'debug'
                property 'forge.enabledGameTestNamespaces', 'examplemod'
                mods {
                    examplemod/*(13)!*/ { source sourceSets.main }
                }
            }

            data {
                workingDirectory project.file('run')
                property 'forge.logging.markers', 'REGISTRIES'
                property 'forge.logging.console.level', 'debug'
                args '--mod', 'examplemod', '--all', '--output', file('src/generated/resources/'), '--existing', file('src/main/resources/')
                mods {
                    examplemod/*(10)!*/ { source sourceSets.main }
                }
            }
        }
    }

    sourceSets.main.resources { srcDir 'src/generated/resources' }

    repositories {}

    dependencies {
        minecraft 'net.minecraftforge:forge:1.19.3-44.1.16' //(5)!
    }

    jar {
        manifest {
            attributes([
                    "Specification-Title"     : "examplemod", //(6)!
                    "Specification-Vendor"    : "examplemodsareus",
                    "Specification-Version"   : "1", //(11)!
                    "Implementation-Title"    : project.name,
                    "Implementation-Version"  : project.jar.archiveVersion,
                    "Implementation-Vendor"   : "examplemodsareus", //(12)!
                    "Implementation-Timestamp": new Date().format("yyyy-MM-dd'T'HH:mm:ssZ")
            ])
        }
    }

    jar.finalizedBy('reobfJar')

    publishing {
        publications {
            mavenJava(MavenPublication) {
                artifact jar
            }
        }
        repositories {
            maven {
                url "file://${project.projectDir}/mcmodsrepo"
            }
        }
    }

    tasks.withType(JavaCompile).configureEach {
        options.encoding = 'UTF-8'
    }
    ```

    1. `version` is the version number of your mod. *This can be any string.*
    2. `group` points to the directory your **Main** class will be in.
    3. `archivesBaseName` should be your Mod ID! This is used as the base name for the JAR file when you build your mod, and as the artifactId of your mod's maven coordinates.
    4. These are mappings, defining the names of Minecraft's deobsfucated functions! The `channel` represents where the mappings are sourced from, and the `version` represents the version of the mappings to use. Here, the official mappings are used, which are provided to us by Mojang.
    5. The `dependencies` section holds any dependencies your mod may have. By default, we are adding a dependancy to `minecraftforge`, with the version specified by the string.
    6. `Specification-Title` is the name of your mod when exported.
    7. `Specification-Vendor` is the name of the author when exported. That's you!
    8. This is the `client` run, which launches the game with your mod enabled. *Make sure to replace `examplemod` with your Mod ID!*
    9. This is the `server` run, which launches a server with your mod enabled. *Make sure to replace `examplemod` with your Mod ID!*
    10. This is the `data` run, which runs data generation scripts if present. *Make sure to replace `examplemod` with your Mod ID!*
    11. `Specification-Version` is the version of your mod when exported.
    12. `Implementation-Vendor` is the name of the author when exported. That's you!
    13. This is the `gameTestServer` run, which runs registered game tests before exiting. *Make sure to replace `examplemod` with your Mod ID!*

!!! warning "Changing the Buildscript"

    Every time you change this file, you should rerun the **Gradlew Commands**.

- [x] Tutorial Description
- [x] Installation
    * [x] Installing Java
    * [x] Installing An IDE
    * [x] Downloading Forge
- [ ] Configuration
    * [x] Buildscript
    * [ ] Gradlew Commands
    * [ ] Mod File
    * [ ] Main Class
- [ ] Conclusion


[Continue](gradlew.md){ .md-button .md-button--primary }