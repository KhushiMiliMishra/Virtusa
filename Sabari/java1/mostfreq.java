package java1;

import java.util.HashMap;
import java.util.Scanner;

public class mostfreq {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string");
        String s = sc.nextLine();

        HashMap<Character, Integer> map = new HashMap<>();

        for (char c : s.toCharArray())
            map.put(c, map.getOrDefault(c, 0) + 1);

        char maxChar = ' ';
        int max = 0;

        for (char c : map.keySet()) {
            if (map.get(c) > max) {
                max = map.get(c);
                maxChar = c;
            }
        }

        System.out.println(maxChar + " = " + max);
    }
}

