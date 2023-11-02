### DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

Beskriv vad generics är i TypeScript och varför de är användbara.
Hur skiljer sig generics från att använda "any" i TypeScript?

    Generics in TypeScript are a method for creating reusable components or functions that can handle multiple types. They allow us to build data structures without needing to set a concrete time for them to execute at compile time.

    In TypeScript, generics serve the same purpose of writing reusable, type-safe code where the type of variable is known at compile time. This means that we can dynamically define the type of parameter or function that will be declared beforehand. This comes in really handy when we need to use certain logic inside of our application; with these reusable pieces of logic, we can create functions that take in and give out their own types.

    We can use generics to implement checks at compile time, eliminate type castings, and implement additional generic functions across our application. Without generics, our application code would compile at some point, but we may not get the expected results, which could possibly push bugs into production.

    By using generics, we can parameterize types. This powerful feature can help us create reusable, generalized, and type-safe classes, interfaces, and functions.


    TypeScript has provided us with many opportunities for JavaScript. One of those is type safety checking at compile time.

    function sum(a, b) {
    return a + b;
    }

    Now, that is a basic function. Our definition is simply to add two variables.

    If the variables are numeric, it will do a mathematical addition and return the sum. However, if at least one of the variables is a string, it will concatenate it and return a string.

    By default, TypeScript types variables as any because every variable must have a type. The type any basically says that, once a variable or function has this type, the compiler should not type-check it.
