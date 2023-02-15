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
    buildscript {
        repositories {
            maven { url = 'https://maven.minecraftforge.net' }
            mavenCentral()
        }
        dependencies {
            classpath group: 'net.minecraftforge.gradle', name: 'ForgeGradle', version: '5.1.+', changing: true
        }
    }
    apply plugin: 'net.minecraftforge.gradle'
    apply plugin: 'eclipse'
    apply plugin: 'maven-publish'

    version = '1.0' //(1)!
    group = 'com.cy4.tutorialmod' //(2)!
    archivesBaseName = 'tutorialmod' //(3)!

    java.toolchain.languageVersion = JavaLanguageVersion.of(17)

    minecraft {
        mappings channel: 'official', version: '1.18.1' //(4)!

        runs {
            client {
                workingDirectory project.file('run')
                property 'forge.logging.markers', 'REGISTRIES'

                property 'forge.logging.console.level', 'debug'

                mods {
                    tutorialmod/*(8)!*/ { source sourceSets.main }
                }
            }

            server {
                workingDirectory project.file('run')

                property 'forge.logging.markers', 'REGISTRIES'

                property 'forge.logging.console.level', 'debug'

                mods {
                    tutorialmod/*(9)!*/ { source sourceSets.main }
                }
            }

            data {
                workingDirectory project.file('run')
                property 'forge.logging.markers', 'REGISTRIES'

                property 'forge.logging.console.level', 'debug'

                args '--mod', 'examplemod', '--all', '--output', file('src/generated/resources/'), '--existing', file('src/main/resources/')

                mods {
                    tutorialmod/*(10)!*/ { source sourceSets.main }
                }
            }
        }
    }

    sourceSets.main.resources { srcDir 'src/generated/resources' }

    repositories { }

    dependencies {
        minecraft 'net.minecraftforge:forge:1.18.1-39.0.5' //(5)!
    }

    jar {
        manifest {
            attributes([
                    "Specification-Title"     : "TutorialMod", //(6)!
                    "Specification-Vendor"    : "Cy4", //(7)!
                    "Specification-Version"   : "1", //(11)!
                    "Implementation-Title"    : project.name,
                    "Implementation-Version"  : project.jar.archiveVersion,
                    "Implementation-Vendor"   : "Cy4", //(12)!
                    "Implementation-Timestamp": new Date().format("yyyy-MM-dd'T'HH:mm:ssZ")
            ])
        }
    }

    jar.finalizedBy('reobfJar')

    publishing {
        publications {
            mavenJava(MavenPublication) { artifact jar }
        }
        repositories {
            maven { url "file://${project.projectDir}/mcmodsrepo" }
        }
    }
    ```

    1. This is the version number of your mod.
    2. This is the directory your **Main** class will be in.
    3. Your Mod ID!
    4. These are mappings, defining the names of Minecraft's deobsfucated functions!
    5. This is the version of Forge you are using. You can change it here!
    6. This is the name of your exported mod.
    7. It's you! The author!
    8. Your Mod ID!
    9. Your Mod ID!
    10. Your Mod ID!
    11. This is the version number of your mod.
    12. It's you! The author!

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