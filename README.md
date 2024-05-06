### Run the project

```sh
mvn clean compile exec:java -Dexec.mainClass="br.com.perrut.App" -Dexec.arguments="Java engineer"
```

- Use the -Dexec.arguments to pass the role desired

### Execute the test suite

```sh
mvn clean verify
```