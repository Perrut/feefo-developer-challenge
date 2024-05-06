package br.com.perrut;

public class App
{
    public static void main( String[] args )
    {
        final Normaliser normaliser = new Normaliser();
        System.out.println(normaliser.normalise("Java engineer"));
        System.out.println(normaliser.normalise("C# engineer"));
        System.out.println(normaliser.normalise("Accountant"));
        System.out.println(normaliser.normalise("Chief Accountant"));
    }
}
