# Forge 1.19.x Tools - Access Transformers

Access Transformers _(**AT**s for short)_ are a light way of changing the **access modifiers** of a variable in Minecraft's source code.
They can also help with removing the final modifier, if a variable needs to be changed.

## 1. Enabling ATs

We must begin by enabling ATs in our `build.gradle`. You can add this line to the dependencies section:

```groovy title="Enabling Access Transformers" hl_lines="3"
minecraft {
	mappings channel: 'official', version: '1.19.3'
	accessTransformer = file('src/main/resources/META-INF/at.cfg') //(1)!
	runs {
		// Runs...
	}
}
```

1. Notice that this is a file path! This is where we will be creating our access transformer file.

Next, we can create a file named `at.cfg` at the path `src/main/resources/META-INF/at.cfg`.
This is where all of our access transformers will be stored!

## 2. Writing ATs

All variables will have some sort of modifier. These can be either access modifiers or non-access modifiers.

|           Modifier | Function                                                         |
| -----------------: | ---------------------------------------------------------------- |
|    `#!java public` | The field / method is accessible for all other classes.          |
|   `#!java private` | The field / method is only accessible within the declared class. |
| `#!java protected` | The field / method is only accessible in the same package.       |
|     `#!java final` | The field / method cannot be overwritten or modified.            |

We can change all of these, although they slightly differ based on the target.

### 2.1 Fields

To modify a field, add the following line to the `.cfg` file:

```cs
<Modifier>[Final Suffix] <FQ Class Name> <Deobsfucated Field Name>
```

- The `#!yaml <Modifier>` is the **modifier** to set the field to. This is usually `#!java public`, but can be any of the 3 access modifiers.
- The `#!yaml <FQ Class Name>` is the **fully qualified class name** of the class the field is in. For example, for the `Gui` class this would be `net.minecraft.client.gui.Gui`.
- The `#!yaml <Obsfucated Field Name>` is the **obsfucated field name** of the field you are modifying. _(See Below.)_
- The `#!ini [Final Suffix]` is an optional suffix that can remove (`#!diff -f`) or add (`#!diff +f`) the **final modifier**.

The **obsfucated field name** is the unmapped name of the function *(e.g. `f_25190_`, `f_17500_`)*. You can find the obsfucated field name using the search tool below!
<div class="mappingDiv" markdown>
<div class="mappingsNamespaces" markdown>
=== "Mojang (SRG)"
</div>
<div class="mappingSearchBox">
	<input class="mappingSearchInput" placeholder="Search the 1.19.3 mappings database..." version="1.19.3" allow="true,false,false"/>
	<div class="mappingSearchRes">
		<ol class="mappingSearchList"></ol>
	</div>
</div>
</div>

### 2.2 Methods

To modify a method, add the following line to the `.cfg` file:

```cs
<Modifier>[Final Suffix] <FQ Class Name> <Method Signature>
```

- The `#!yaml <Modifier>` is the **modifier** to set the method to. This is usually `#!java public`, but can be any of the 3 access modifiers.
- The `#!yaml <FQ Class Name>` is the **fully qualified class name** of the class the method is in. For example, for the `Gui` class this would be `net.minecraft.client.gui.Gui`.
- The `#!yaml <Method Signature>` is the **method signature** of the method you are modifying. _(See Below.)_
- The `#!ini [Final Suffix]` is an optional suffix that can remove (`#!diff -f`) or add (`#!diff +f`) the **final modifier**.

??? info "Method Signatures"

	A method signature points to a specific method in the Java code. They are written as `name(paramaters)return`:

	- The `name` is the name of the function to find. For `boolean attackEntityFrom(DamageSource source, float amount)` this would be `attackEntityFrom`.
	- The `parameters` are the types of parameters passed in. For `boolean attackEntityFrom(DamageSource source, float amount)` this would be `Lnet/minecraft/util/DamageSource;F`. *(See below.)*
	- The `return` is the type to return. For `boolean attackEntityFrom(DamageSource source, float amount)` this would be `Z`. *(See below.)*

	**Descriptors** define how to represent a type in a method signature. Primitives are defined by a letter, whereas classes are paths surrounded by `L` and `;`:

	| Descriptor | Infomation |
	|-----:|---|
	|`B`|A `byte` type.|
	|`C`|A `char` type.|
	|`D`|A `double` type.|
	|`F`|A `float` type.|
	|`I`|A `int` type.|
	|`J`|A `long` type.|
	|`LClassName;`|A **typed object**. For example, `Lnet/minecraft/util/DamageSource;`.|
	|`S`|A `short` type.|
	|`V`|A `void` type.|
	|`Z`|A `boolean` type.|
	|`[Type`|An **array** of a given type. For example, `[B` or `[Lnet/minecraft/util/DamageSource;`.|

You can search for **method signatures** using the tool below.

<div class="mappingDiv" markdown>
<div class="mappingsNamespaces" markdown>
=== "Mojang (SRG)"
</div>
<div class="mappingSearchBox">
	<input class="mappingSearchInput" placeholder="Search the 1.19.3 mappings database..." version="1.19.3" allow="false,true,false"/>
	<div class="mappingSearchRes">
		<ol class="mappingSearchList"></ol>
	</div>
</div>
</div>

### 2.3 Classes

To modify a class, add the following line to the `.cfg` file:

```cs
<Modifier>[Final Suffix] <FQ Class Name>
```

- The `#!yaml <Modifier>` is the **modifier** to set the class to. This is usually `#!java public`, but can be any of the 3 access modifiers.
- The `#!yaml <FQ Class Name>` is the **fully qualified class name** of the class to target. __(See below.)__
- The `#!ini [Final Suffix]` is an optional suffix that can remove (`#!diff -f`) or add (`#!diff +f`) the **final modifier**.

The **Fully Qualified Class Name** is the path to the class *(e.g. `net.minecraft.client.gui.Gui`)*. You can find this using the search tool below!
<div class="mappingDiv" markdown>
<div class="mappingsNamespaces" markdown>
=== "Mojang (SRG)"
</div>
<div class="mappingSearchBox">
	<input class="mappingSearchInput" placeholder="Search the 1.19.3 mappings database..." version="1.19.3" allow="false,false,true"/>
	<div class="mappingSearchRes">
		<ol class="mappingSearchList"></ol>
	</div>
</div>
</div>
