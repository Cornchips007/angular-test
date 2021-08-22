# Services

Angular services can be thought of as helper classes / object.

Even though these have a global scope, please try to keep these pure, as in pure functions that don't hold state. Only keep global `const`s in there.
This will make them easier to test and maintain.

They do not need to be imported anywhere, not even the module, unless you want to scope them specifically (not needed).