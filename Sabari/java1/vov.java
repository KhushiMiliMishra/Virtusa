package java1;

import java.util.Scanner;

public class vov {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine().toLowerCase();

        int v = 0, c = 0;

        for (char ch : s.toCharArray()) {
            if ("aeiou".indexOf(ch) != -1)
                v++;
            else if (ch >= 'a' && ch <= 'z')
                c++;
        }

        System.out.println("Vowels: " + v);
        System.out.println("Consonants: " + c);
    }
}
