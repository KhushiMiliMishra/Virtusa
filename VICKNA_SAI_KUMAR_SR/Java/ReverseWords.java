import java.util.Scanner;

public class ReverseWords {

    public static String reverseWords(String sentence) {
        String[] words = sentence.trim().split("\\s+");
        StringBuilder result = new StringBuilder();

        for (String word : words) {
            result.append(new StringBuilder(word).reverse()).append(" ");
        }

        return result.toString().trim();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine();

        System.out.println("Reversed words: " + reverseWords(sentence));

        scanner.close();
    }
}