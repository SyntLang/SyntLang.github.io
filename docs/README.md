# General

## What is Synt?

Synt is a `programming language` and it is very suitable for beginners.
Code is `easy` and really `simple`.
`Syntax` is `user friendly` are really `readable` for person who can read and understand English.

Synt is `free` and `open source`.
It is made with `Python`.
Synt is the `next gen` programming language.
It is made so that updates are `easy` and `fast`.
Synt is made to make `software and game development` `easier` and `faster`.

For the history of Synt, it was initiated by [`Attachment Aditya`](https://attaditya.is-a.dev/) in year `2020`.
It was initially expected to be worked for about `1-2 Months`.
Later as time went by, it was expanded to be a larger project.
It will most probably be getting updated and expanded in the future.

## Examples

### Hello Synt

```synt
output "Hello Synt!"
```

### Create Variables

```synt
var number my_num1 0
```

### Add Numbers

```synt
var number my_sum 0
add my_sum 10 20 30 40 50 60
```

### Variable Referencing

```synt
var text name "Synt"
output "Hello #name#!!! Welcome Back!!!"
```

## Installation

Synt is created in a way so that it can be run in any systems.
However, the major focus is for `Windows`.
For other system Synt has `Python Source Code` which can be run to use Synt.
In future, there might be versions of Synt targetted for other platforms.

This section is focussing to install synt on `Windows`.

For other platforms you need to have `Python` installed on your system.
After that install the `Source Code` of Synt from `GitHub`.
Run the `Python Source Code` using `Python` to use Synt.

### Download Synt

Download `Synt Executable` for you through [`Official Synt Site`](https://synt.ml/#downloads).

### Move to Path

Installing Synt just means moving it to the `Path` you want it to be.
It can be done manually.
This allows Synt to be used portably.

Generally, for `Windows`, it is recommended for `Apps` to be installed in `Programs Files`.
Although this is not mandatory, it is on the user where to install it.

```
Suggested Synt Folder: C:\Program Files\Synt
```

### Add to Path

Although you might have installed synt in the `Path` you want it to be in, but you still need to access it.
To access synt, you may need to use the `Path` again and again to refer to the `Synt Executable` that will run Synt Code.

A simple solution is to add the `Path` to your `Path` in your `Environment Variables`.
This might sound complicated, but it isn't really that hard.

First of all, copy the `Folder Path` you want to add to your `Path` to your `Environment Variables`.
Now, open your `Environment Variables`.
To do so, start `Run`(`Windows Key` + `R`).
In run, type `sysdm.cpl`.
Once this causes the `System Properties` to open, click on `Advanced`.
Now, click on `Environment Variables`.
Under `System Variables`, click on `Path` and click on `Edit`.
Now, click on `New` and then paste the `Folder Path`.
Finally, click on `Apply` and `OK` on all windows till all `System Properties` windows are closed.

Synt is now globally added to `Path`. You can just refer `Synt` to run Synt.

## Modes

On using Synt without console arguments, it asks you for modes.
Synt has two major running modes.
`File Mode` and `Interactive Mode`.
Apart from modes that can run code, there are more modes.
`Quit Mode` and `Compile Mode` are two of them.
Synt also allows code to convert into SPyC (SyntPythonCompiler) that can be run with `Python`.

### File Mode

To run an existing code using `File Mode` is suggested.
This mode will ask you file path.
It is the complete file location to your code file.
Once code completed it closes.

This mode can be also accesed from directly passing `source code file path` in command line arguments.
The mode key is `*f` and `*file`.

```
synt *f
synt *file
synt "main.synt"
```

### Interactive Mode

`Interactive Mode` or `Synteractive` is a good mode to learn and test commands.
This mode allows you to type and run code at same time.
As it runs at same time, it doesn't close until closing through code or force close.

The mode key is `*i` and `*interactive`.

```
synt *i
synt *interactive
```

### Compile Mode

`Compile Mode` is a `command line arguments` based mode.
This mode `compiles` from `synt code` to an `distributable` application.

The mode key is `*c` and `*compile`.

```
synt *c "main.synt"
synt *compile "main.synt"
```

### Quit Mode

`Quit Mode` just closes Synt.

The mode key is `*q` and `*quit`.

```
synt *q
synt *quit
```

### SPyC Mode

`SPyC Mode` is a `command line arguments` based mode.
This mode compiles from `synt code` to `Python Source Code`.

The mode key is `*spyc`.

```
synt *spyc "main.synt"
```

### SPyC Run Mode

`SPyC Run Mode` is a `command line arguments` based mode.
This mode directly exports and runs the `SPyC Output`.

The mode key is `**spyc`.

```
synt **spyc "main.synt"
```

# Learn Synt

## What is Console?

The console is the main window that opens when Synt or Synt Code is run.
It is the place where you can type and run code in Interactive Mode.
In file mode you can use console to see the outputs of code and give code inputs.

## How Synt Reads Code?

First, obviously, Synt gets the code it needs to run.
This code can also be called as `source code`.

Then, Synt breaks the code into `blocks`.
The `blocks` into `tokens`.

Synt uses these blocks and tokens to recognize and execute corresponding commands and code.
Synt runs `block after block`.

## Commenting in Synt

There are three `Commenting Character` options in synt.
The functioning and working of all three is same.
All of them will be ignored during execution.
These are classified on the basis of organizing and how they are supposed to be used.

### General Comments

Such comment is an algorithm in synt that will be ignored.
It has no use except for being used as placeholders and of course to comment in between code.

```synt
comment This is a comment. This will be ignored in execution.
$ This is a comment. This will be ignored in execution.
```

### Info Comments

This type of comment is used to `organize` code.
This should be generally used to convey what the following code is about and what it should do.

```synt
? This is a query comment. This will be ignored in execution.
```

### Command Comments

This type of comment is used when using an `AI` to write or analyze code.
Its content will depend on the `AI's` and `custom mods` that are used.

```synt
> This is an AI command comment. If any AI or mod installed, this might do something.
> It won't do anything in execution.
```

## Basic Algorithms of Synt

There are a few basic functions or so called `Algorithms` in synt.
These include basic `input` and `output` functions, as well as `version` function and `end` function.
These are the most primitive functions in synt.

### Version

This function just outputs the `version` of synt in console.

```synt
version
```

### End

This function just ends/pauses the execution of synt.

```synt
end
```

### Output

This function outputs the `arguments` passed into the function to the console.

```synt
output "Hello Synt!"
```

### Input

This function is slightly more complex than the `output` function.
The first argument it takes is the `Output Variable`.
This is the variable that the `Input` will be stored in.
The second argument is the `Input Prompt`.
This is basically the text that should output before user is asked to input something.

```synt
input input_var "Enter your input:"
```

## Variables and Functions
## Synt Mathematical Operations
## Functions for Collections and Other Iterables
## Conditional Programming with Synt
## Repitition and Looping Code
## Debugging in Synt
## Modules and External Resources
## Synt Time and Ticking
## Handling Running Console with Synt
## Reading and Writing Files

[Synt](https://synt.ml)

