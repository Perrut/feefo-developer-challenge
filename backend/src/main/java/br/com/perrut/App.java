package br.com.perrut;

public class App {
    public static void main(String[] args) {
        final Normaliser normaliser = new Normaliser();
        System.out.println(normaliser.normalise(args[0]));
    }
}
