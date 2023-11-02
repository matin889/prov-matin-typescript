### DIN UPPGIFT: Besvara fråga 1 och 2 i denna md-fil. Fråga 3 behöver du inte besvara, utan den utför du.

1.  Vad är Typescript och och hur skiljer det sig från Javascript? / 2 poäng

    TypeScript is a statically compiled programming language for writing clear and concise JavaScript code. It’s fulfilling the same purpose as JavaScript and can be used for both client-side and server-side applications. In addition, the libraries of JavaScript are also compatible with TypeScript.

    JavaScript and TypeScript look very similar, but there's one important distinction.
    The key difference between JavaScript and TypeScript is that JavaScript lacks a type system. In JavaScript, variables can haphazardly change form, while TypeScript in strict mode forbids this. This makes TypeScript easier to manage and maintain, especially with a large codebase.

    JavaScript is a scripting language which helps you create interactive web pages whereas Typescript is a superset of JavaScript.

    Typescript code needs to be compiled while JavaScript code doesn’t need to compile.

    Comparing TypeScript and JS, Typescript supports a feature of prototyping while JavaScript doesn’t support this feature.

    Typescript uses concepts like types and interfaces to describe data being used whereas JavaScript has no such concept.

    Typescript is a powerful type system, including generics & JS features for large size project whereas JavaScript is an ideal option for small size project.

2.  Vad är fördelen att använda sig av Typescript? Finns det nackdelar? / 2 poäng

    Advantages:

    TypeScript made by Microsoft:
    The fact that it was made by a large company is that it has a high possibility of future development and can be used in many fields. For example, Visual Studio Code is written in TypeScript.

    Open source:
    Being open source means that it is easy to apply and a lot of information is shared.

    Superset of JavaScript:
    Quickly reflect the most recent updates to ECMAScript. Therefore, it is possible to use new functions efficiently.

    Easy:
    The number of JavaScript users is increasing these days. TypeScript is a superset of JavaScript, so if you know how to use JavaScript, you can learn TypeScript in no time. In addition, it may seem easy because JavaScript solves some of the weaknesses that you see when you’re working on a large enough.

    Type control by analogy is possible without specifying the type for all codes:
    In fact, it may not be good, but it is good in terms of complementing JavaScript’s weaknesses. Basically, many languages specify types (data types, classes, etc.), and TypeScript originate from JavaScript. It is an improvement in existing languages, not new ones, so if the depth increases, it may not be possible to infer the type. However, it catches errors unexpectedly well, so there is no big problem when using it. Therefore, you can prevent errors for the type in advance.

    Supports the browser’s engine the same way JavaScript does:
    It can compile TypeScript to a lower version of ECMAScript. Not only Node.js, but also Pure JS, which is purely a scripted JavaScript used on the web.

    Disadvaantages:

    The initial setting is uncomfortable:
    Since TypeScript is not an independent language, it runs on existing JavaScript engines. To do this, there are modules that need to be installed by default, and you also need to set options for compiling. The initial setup is difficult when using modules and the framework.

    It’s annoying because of the type:
    The type is automatically specified, but the necessary parts are also included.
    As a result, productivity is reduced and red lines are often seen due to TypeError.

    Sometimes there is an error because of the name such as interface or class
    Even if it contains the same content, problems can arise if the names are different. Also, other contents or purposes are similar, so if you name them, there can be problems. In JavaScript, names for things you don’t need to do can cause problems.

    Less legibility:
    Even if you enter the same code, the readability of JavaScript and TypeScript is significantly different. The length of the cord inevitably gets longer and while naming a declared type, it may also lose its purpose.

    TypeScript cannot avoid errors that occur in JavaScript.
    Even though we worked hard to solve TypeError, This means that JavaScript’s chronic errors can continue to occur.

3.  Initiera ett vanilla TS-projekt så att du kan kompilera
    Typescript i alla ts-filer i en och samma mapp (src). De kompilerade filerna ska hamna i en dist-mapp. / 2 poäng
