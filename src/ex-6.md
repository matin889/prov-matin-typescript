### DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

I Typescript kan både type och interfaces användas för att skapa egna sammansatta typer. I många fall kan man använda antingen type eller interfaces, men det finns också skillnader. Redogör för dem och visa med kodexempel.

The type or type alias in typescript is defined as the type declaration for creating a variable name with a data type declared before the name where it can create names for a type such as built-in type declaration which includes the numbers, string, boolean values, null, undefined, etc and the type can also declare user-defined types such as union, intersection, and tuple type. We can say that interfaces have more capabilities than types hence it is said that types are more flexible than the interfaces.

Merging the Declarations:
Merging the declarations is only possible with interfaces and not with types. It happens when the typescript compiler merges two or more interfaces that share the same name into only one that is in a single declaration. Let's see an example below:

interface colors {
colorname: string;
};

interface colors {
colortype: string;
};

const colors: colors = {
colorname: "Green",
colortype: "Light"
};

Primitives:
Primitives can only be used by types and not interfaces. Let's see an example below.

type colorname = string
type colortype = string
type coloruse = string
type colorcode = number

Unions:
Union types are used to create new types that are it can have a value of one or a few more types. To create a union type, we have to use the | keyword. Now let's see an example below.

type color1 = {
color_name: “string”
};

type color2 = {
color_name: “string”
};

type colors = color1 | color2;

Here we have seen an example with types let's see another example of a union type combining two interfaces

interface color1 {
color_name: "string"
};

interface color2 {
color_name: "string"
};

type colors = color1 | color2;

Tuple Types:
Tuples are very useful because they can have two sets of values of different data types. We can only declare tuples using types and not interfaces. Let's see an example below.

type color = [string, number]

Though we cannot declare a tuple in TypeScript using an interface, we can still use a tuple inside an interface, like in the example shown below:

interface colors {
name: [string, number]
}

Inheritance:
Inheritance is the ability to inherit attributes and methods from a parent. Inheritance is only possible with interfaces it is not possible with types. Let's see an example below :

interface color {
colorname: string
}
interface colortype {
colortype: string
}
interface colors extend to color, colortype {}
class col implements colors {
colorname = "green"
colortype = "light"
}

Intersection:
An intersection type is a type that allows us to merge several kinds into one. This allows us to combine many types to create a single type with all of the properties that we require. The & operator is used to combine multiple types using the intersection type but it does not combine multiple types into one interface. Let's see an example below :

interface color {
colorname: string
}
interface colortype {
colortype: string
}
type colors = color & colortype
