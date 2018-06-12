# todo-cli-summer18

A todo list for devs.  Create and manage a list of todo items for your software project.  Simply install the cli via npm (coming soon), run `todo init` and add your first todo item via `todo add drink coffee`.  Multiple todo lists can be created, one for each project directory. The todo list is stored within a **todos.json** file. 


## Install (Coming Soon)

The todo cli should be installed globally.  That way you can run it from any project directory on your local machine. 

```
npm install todo-cli-summer18 -g
```

## Create your first todo list

After installing the todo cli, you can move into your project directory and create your first todo list via the `todo init` command.  Remember, each directory can hold its own todo list. 

```
cd <your project directory>
todo init
```

## Create your first todo item

```
todo add drink coffee
```

## Contributing

We are accepting pull requests.  To contribute, fork and clone, make your changes, and submit a pull request. After you've cloned your fork, you can install the project's dependencies.  

```
git clone <url to your fork>
cd todo-cli-summer18
npm install
```

## Commands 

## `init`

Prepare to add todo items by initializing a **todos.json** file.  If this is the first time running `todo init` within a project directory, a new  **todos.json** file containing an empty array.   If previous run `todo init` in the same directory, use the `--force` option to overwrite the existing file.  

**Examples**

Initializing a todo list for the first time. 

```
todo init
```

Overwriting the **todos.json** file with the `--force` option.

```
todo into --force
```

## `search`

Search uses a keyword and filters out all todo items then displays all todo items that are relevant to the search.

**Examples**

```
todo search bitcoin
```

result : 

```
[X] buy bitcoin
```

## `ls`

list todos gives you the ability to list all todo items within the todos.json. By running the ls command you can view all the items in your todo list.  Running the list allow you to see the number of tasks remaining and the percent completed.

**Examples**

```
todo ls
```

result: 

```
 My To Do List
  ---------------------------------------
  [ ] - 1 cut grass
  [X] - 2 make dinner
  [ ] - 3 eat dinner
  ---------------------------------------
  2 remaining  33% completed
```
<img src='https://github.com/coinGuyBri/Learning-Git/blob/master/Jun%2012%202018%2010_52%20AM.gif?raw=true'>
