# Work Day

Easily start/end your work day with this simple CLI tool.  Open your apps and sites with one command.  At the end of the day close all those apps down or close everything and put your computer to sleep.

This is a private add-on and will not be published in the npm directory.

## Prerequisites

This CLI relies on a custom Automator application.  It handles being able to close ALL open applications.

1. Open Automator
2. Create new application
3. Search for "Quit All Applications"
4. Drag it to the right panel
5. Ensure that "Ask to save on quit" is checked
6. Save application and call it QuitEverything in your Applications folder  

## Installation

From the root of the project directory.

```
npm install -g
```

## Set up your configuration

In the installation directory, `/usr/local/lib/node_modules/work_day` copy teh config.json.sample to config.json and add the apps and sites you would like opened.

## Start you're day quickly

Once you have a config set up enter the command:

```
$ work-day
Good morning. Let's get productive!!
Opening apps.
Opening Google Chrome.
Opening HipChat.
Opening sites in browser.
Opening GMail.
Opening Google Calendar.
```

## Close work apps at end of day

```
$ work-day -e
Quiting apps.
Quiting Google Chrome.
Quiting HipChat.
Have a great evening!!
```

## Close all apps currently open

Note: Requires Automator app created as described above

```
$ work-day -a
```

## Put computer to sleep

```
$ work-day -s
```

## Close all apps and put computer to sleep

```
$ work-day -as
```

## All options

```
$ work-day -h

  Usage: work-day [options]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
    -v, --verbose  Enable verbose logging
    -a, --all      Quit all open apps
    -s, --sleep    Put the computer to sleep.
    -e, --end      It's the end of the workday. Quit all work related apps.
```