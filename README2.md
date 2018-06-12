# Readme2

## `rm`

Removes a todo from the todos.json, selected by the id chosen by the user. Then, displays a list of the remaining items in the todo list.

**Examples**

Given a starting todo list of:

```
My To Do List
---------------------------------------
[ ] - 1 win a car
[ ] - 2 buy bitcoin
[ ] - 3 sell bitcoin
---------------------------------------
remaining : 3
```

You can remove the todo with the id of `2` by typing the following into your terminal:

```
todo rm 2
```

This would result in the following updated todo list:

```
My To Do List
---------------------------------------
[ ] - 1 win a car
[ ] - 3 sell bitcoin
---------------------------------------
remaining : 2
```
