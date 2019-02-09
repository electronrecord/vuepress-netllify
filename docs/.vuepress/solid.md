# SOLID

A Quick Refresher on SOLID.
SOLID is an acronym for a set of five software development principles, which if followed, are intended to help developers create flexible and clean code. The five principles are:

1. The Single Responsibility Principle — Classes should have a single responsibility and thus only a single reason to change.
2. The Open/Closed Principle — Classes and other entities should be open for extension but closed for modification.
3. The Liskov Substitution Principle — Objects should be replaceable by their subtypes.
4. The Interface Segregation Principle — Interfaces should be client specific rather than general.
5. The Dependency Inversion Principle — Depend on abstractions rather than concretions.


## Single Responsibility

[SOLID article source](https://medium.com/@severinperez/writing-flexible-code-with-the-single-responsibility-principle-b71c4f3f883f)

The Single Responsibility Principle

The single responsibility principle (SRP) states that every class or module in a program should have responsibility for just a single piece of that program’s functionality. Further, the elements of that responsibility should be encapsulated by the responsible class rather than spread out in unrelated classes. The developer and chief evangelist of the SRP, Robert C. Martin, describes a responsibility as a “reason to change.” So, another way of putting the SRP is to say, as Martin does, that “a class should have only one reason to change.”


## Open-Closed

[SOLID article source](https://medium.com/@severinperez/maintainable-code-and-the-open-closed-principle-b088c737262)

Robert C. Martin breaks down the OCP into its two constituent parts, defining code that is “open for extension” as code to which you can add new behavior, and code that is “closed for modification” as code that is “inviolate” in that it’s design should never be changed once implemented. 
**In other words, the OCP says that you can always add new code to an object, but should never change the design of old code.**
