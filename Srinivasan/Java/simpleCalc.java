
import java.util.Scanner;
public class simpleCalc {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter first number: ");
        int a = sc.nextInt();
        System.out.print("Enter operator: ");
        char operator = sc.next().charAt(0);
        System.out.print("Enter second number: ");
        int b = sc.nextInt();
        switch(operator){
            case '+':
                System.out.print(a+b);
                break;
            case '-':
                System.out.print(a-b);
                break;
            case '*':
                System.out.print(a*b);
                break;
            case '/':
                System.out.print(a/b);
                break;
            case '%':
                System.out.print(a%b);
                break;
            default:
                System.out.print("Invalid Operator");
        }
        sc.close();
    }
}