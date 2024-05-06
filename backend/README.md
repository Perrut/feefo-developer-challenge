### Run the project

```sh
mvn clean compile exec:java -Dexec.mainClass="br.com.perrut.App" -Dexec.arguments="Java engineer"
```

- Use the -Dexec.arguments to pass the role desired
- Or just open the project (import via maven) in some Java IDE and run the App.class
  (don't forget to quote in the argument "Java engineer", because pass without quotes lead to 
  incorrect results)

### Execute the test suite

```sh
mvn clean verify
```