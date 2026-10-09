
import java.util.Scanner;

public class decimalToBinary {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a decimal number: ");
        int n = sc.nextInt();
        int binary = 0;
        int place = 1;
        while (n > 0) {
            int rem = n % 2;
            binary = binary + rem * place;
            place = place * 10;
            n = n / 2;
        }
        System.out.println("Binary Number is: " + binary);
        sc.close();
    }
}