import java.util.Scanner;

public class TemperatureConverter {

    public static double celsiusToFahrenheit(double celsius) {
        return (celsius * 9 / 5) + 32;
    }

    public static double fahrenheitToCelsius(double fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("1. Celsius to Fahrenheit");
        System.out.println("2. Fahrenheit to Celsius");
        System.out.print("Choose conversion: ");

        int choice = scanner.nextInt();

        System.out.print("Enter temperature: ");
        double temperature = scanner.nextDouble();

        if (choice == 1) {
            System.out.printf("Fahrenheit: %.2f%n", celsiusToFahrenheit(temperature));
        } else if (choice == 2) {
            System.out.printf("Celsius: %.2f%n", fahrenheitToCelsius(temperature));
        } else {
            System.out.println("Invalid choice.");
        }

        scanner.close();
    }
}