import java.util.Scanner;

public class PowerCalculator {

    public static long calculatePower(int base, int exponent) {
        long result = 1;

        for (int i = 0; i < exponent; i++) {
            result *= base;
        }

        return result;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter base: ");
        int base = scanner.nextInt();

        System.out.print("Enter exponent: ");
        int exponent = scanner.nextInt();

        if (exponent < 0) {
            System.out.println("Please enter a non-negative exponent.");
        } else {
            System.out.println("Result: " + calculatePower(base, exponent));
        }

        scanner.close();
    }
}