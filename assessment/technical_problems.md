## Trouble Shooting

Below are some errors you might encounter when trying to set up your development environment.

To get going with the assessment, you can just use the Azure labs virtual machine; however, if you want to set up your own environment, you just need to install: Node.js, MySQL, and VS Code.

## Node

Typically, node is easy to install. The only issue, is you have not installed it! To install node, follow the instructions [here](https://nodejs.org/en/download/).

### Command not found

If you get an error like this:

```
$ node -v
-bash: node: command not found
```

This means that you don't have node installed. You can install it by following the instructions [here](https://nodejs.org/en/download/).

## MySQL

### Command not found

If you get an error like this:

```
$ mysql -u root -p
$ mysql: command not found
```

- If you are using a Mac, you can install it using [Homebrew](https://brew.sh/).
- If you are using Windows, you can install it using [Chocolatey](https://chocolatey.org/install).

Using a package manager is the easiest way to install MySQL. It will ensure that you have the correct version of MySQL, and that it is installed in the correct location.

Then, you can install MySQL using the following command:

```

brew install mysql

```

or

```
choco install mysql

```

### Not Support Auth Mode

A few people get an error like this when trying to connect to MySQL from Node.js:

```js
"ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication
protocol requested by server. Consider upgrading MySQL client"
```

The easiest way to fix this error, is to access the MySQL database from the command line, and run the following command:

```sql

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_password_here';

```

Many of you won't have a root password, so you can just use the following command:

```sql

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';

```
