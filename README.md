ShivJS
======
_Gets the job done._

Shiv is a work-in-progress JavaScript toolkit for bare-bones JS testing. 
Currently it's just the minimum I need for two similar projects (that are not
in production).

It's written completely from scratch and is still extremely raw.

Example:
--------

    <script type="text/javascript" src="../shiv.js"></script>
    <script type="text/javascript">
      shiv.addOnLoad(function() {
        shiv.prefix = "../js/";
        shiv.load("shiv-util");
      });
    </script>


