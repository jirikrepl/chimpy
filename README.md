# This code is still in use! Do not delete this repository!
Used in this package
https://www.npmjs.com/package/@jirkakrepl/chimpy

# Install
Package requires chromedriver to be installed as a dependency in your project.

To install both packages:

```
npm i --save-dev chimpy chromedriver
```

# Chimpy with Chromium on MacOS
It seems that Chrome binary paths is compiled in Chrome driver binary.
It should be possible to compile Chromedriver (part of Chromium project)
from [source](https://sites.google.com/a/chromium.org/dev/developers/how-tos/get-the-code).
Although it is possible, the steps below are a good workaround.

Install chromedriver as you normally would. 
Then create empty Google Chrome folder with Chromium launcher script.

    $ mkdir -p /Applications/Google\ Chrome.app/Contents/MacOS/
    $ cd /Applications/Google\ Chrome.app/Contents/MacOS/
    $ touch Google\ Chrome

paste the following into the file "Google Chrome"

    #! /bin/sh
    cd /Applications/Chromium.app/Contents/MacOS
    ./Chromium "$@"

Then change the permissions

    $ chmod 755 Google\ Chrome

There should not be any configuration needed in chimpy config file.
Chromedriver binary should fine chromium launcher script on the path: `/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome`

# IMPORTANT ANNOUNCEMENT - July 22nd, 2018

The Chimp that you know and love is now being split into two separate projects, both of which are intended to help you deliver higher quality faster.

The first is [*Chimpy*](https://github.com/TheBrainFamily/chimpy), which will be developed and maintained by [TheBrain team](http://team.thebrain.pro). This project will continue evolving and supporting the current thinking behind Chimp 1.x. 

The second is [*Chimp 2.0*](https://github.com/xolvio/chimp), which will be developed and maintained by [Xolv.io](http://xolv.io). This project will be built from scratch based on the learnings made while using Chimp 1.x in the field.

For more details about this decision, [please see the full announcement here.](https://medium.com/@sam_hatoum/the-future-of-chimp-js-e911f8e9aaa6)

---

Access the [documentation site here.](https://thebrainfamily.github.io/chimpy)
