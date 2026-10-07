
import java.util.*;

public class Count
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine();
        input=input.replaceAll("[^a-zA-Z0-9 ]", " ");
        String words[] = input.split("\\s+");
        // String words[]=input.split(" ");
        HashMap<String,Integer> map = new HashMap<>();
        for(String word:words)
        {
            if(map.containsKey(word))
            {
                map.put(word,map.get(word)+1);
            }
            else
            {
                map.put(word,1);
            }
        }
        for(Map.Entry<String,Integer> entry:map.entrySet())
        {
            System.out.println(entry.getKey()+" "+entry.getValue());
        }
    }
}