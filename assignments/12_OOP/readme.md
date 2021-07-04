# Object Oriented Programming

Object Oriented Programming (OOP) is a programming paradigm that is based on "objects" rather than "functions". A program operates by creating objects and letting them interact with each other.

Objects provide a layer of abstraction so that their internal state or code can be separated from the external code. They store data inside of fields and provide functionality in the form of methods. A new object instance is created by calling a special type of method called the constructor. External code can use the objects by calling a method on a specific instance.

Objects are often used to model things and their properties from the real world like "circle", "car" or "dog".

Many programming languages are multi-paradigm and support OOP to different degrees. However, there are two approaches to OOP:
- In class-based languages the classes are defined beforehand and the objects are instantiated based on the classes. The classes also determine the type of an object.

- In prototype-based languages a prototype is itself an object to which another object can be linked. New objects can be created based on already existing objects chosen as their prototype. The attributes and methods of the prototype are delegated to all the linked objects. The individual attributes and methods are not shared between objects linked to the same prototype.

## OOP Concepts:

- **Dynamic Dispatch**:
    The objects are responsible for choosing which implementation of a polymorphic operation is executed when a method is called at runtime. This enables instances to use different implementations for a method.

- **Encapsulation**:
    The objects can restrict access to fields and methods, so that the data the object holds can only be modified by the methods provided to the external code. This concept is a strong form of abstraction and prevents external code to know the inner workings of the object.

- **Inheritance**:
    Inheritance allows classes to be arranged in a hierarchy that represents "is-a-type-of" relationships. All attributes and methods of the parent class also appear in the child class, but not the other way. This allows easy reuse of code and data definitions. Subclasses can override the methods defined in the superclass. In some languages inheritance over multiple layers is allowed. Abstract classes cannot be instantiated and only exist for the purpose of inheritance. Nevertheless they can define fields and methods.

- **Delegation**:
    Delegation refers to the evaluation of a member of one object in the context of another original object. Delegation can be done explicitly, by passing the sending object to the receiving object, or implicitly, by the member lookup rules of the language. Implicit delegation is the fundamental method for behavior reuse in prototype-based languages, corresponding to inheritance in class-based languages.

- **Composition**:
    Objects are variables with a complex structure. They even can contain other objects as an attribute; this is known as object composition. It is used to model "has-a" relationships.

- **Polymorphism**:
    Polymorphism is the provision of a single interface to entities of different types or the use of a single symbol to represent multiple different types. This means that a method name can be overloaded by multiple implementations. They either accept different parameters or override the inherited implementation from the superclass.
    
**Why use OOP?**

So if you want to use one or more of the concepts described above, you should consider using an object-oriented approach. But remember there are always multiple ways to write a program.


# Project: Simple Drawing Board

## Description

This application is a very simple drawing application.
The application shows a blank canvas on which the user can draw circles or rectangles with a random color.

## User Stories

- Draw Circle
    When the user left clicks on the canvas, they create a new circle object and set the circle's center point.
    The color of the circle is randomly set. 
    By dragging the cursor the user can adjust the circle's radius and therefore resize the circle.
    After the user releases the left mouse button, the circle cannot be adjusted anymore.

- Draw Rectangle
    When the user right clicks on the canvas, they create a new rectangle object and sets the position of the first corner.
    The color of the rectangle is randomly set. 
    By dragging the cursor, the user can move the rectangle's second corner.
    After the user releases the left mouse button, the rectangle cannot be adjusted anymore.

## Object Structure

    Shape:
        number x
        number y
        number color
        Shape(x, y)
        abstract func void draw()
        abstract func void resize(x2, y2)

    Circle (extends Shape):
        number r
        Circle(x, y)
        override func void draw()
        override func void resize(x2, y2)
        
    Rectangle (extends Shape):
        number w
        number h
        Rectangle(x, y)
        override func void draw()
        override func void resize(x2, y2)