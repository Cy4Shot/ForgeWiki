# Setup - Java Installation
## About Java

In this section of the tutorial, we will be installing the **Java** programming language.
If you already have the correct version of Java installed, you may skip this section of the tutorial.

Minecraft 1.18.x uses **Java 17**, which is the version we will be installing!
We also need to make sure to install the **JDK** (*Java Development Kit*) rather than the **JRE** (*Java Runtime Environment*).
Historically, they were downloaded seperately, but now can be found packaged together in one installer.

!!! warning "Operating System"

    This tutorial will be using **Windows** as an example, but the process should be similar on **MacOS**.
    If you are using **Linux**, we assume you know what you're doing!

## Installing Java

Let's begin by heading over to [Eclipse Terumin](https://adoptium.net/temurin/releases/){:target="_blank"}, which is the distribution of Java we will be installing.
Now, download the **Java 17 JDK** for your Operating System.

Make sure to select `Add to PATH` and `Set JAVA_HOME` when installing.
If you forgot to do so, or would like to perform a sanity check, you can do the following:

1. Search for `Edit the system environment variables` in the Start Menu.
2. Click on `Environment Variables`.
3. In the **System** section, check your `JAVA_HOME` variable. Mine is set to `C:\Program Files\Eclipse Adoptium\jdk-17.0.3.7-hotspot`, but this may differ slightly between installations.
4. Remember this path, then select `Path` in the **System** section and click `Edit`.
5. Make sure that the path in the `JAVA_HOME` is present in the `Path` variables. If it's not, add it.
6. Finally, make sure that the new path is above other Java installations in the `Path` variable.

## Conclusion
If no errors have appeared, you have successfully installed the Java JDK!

!!! tip "Testing The Installation"
    
    We can easily test installation of Java using the following steps:

    1. Press ++win+r++ and type `cmd` to open the command prompt.
    2. Type `java -version` and press ++enter++.
    3. If the Java version you installed is shown, you have successfully installed Java!

    *If an error, or the wrong version is shown, make sure the environment variables are set properly, as above.*

---

- [x] Tutorial Description
- [ ] Installation
    * [x] Installing Java
    * [ ] Installing An IDE
    * [ ] Downloading Forge
- [ ] Configuration
    * [ ] File Structure
    * [ ] Buildscript
    * [ ] Mod File
    * [ ] Main Class
- [ ] Conclusion


[Continue](ide.md){ .md-button .md-button--primary }