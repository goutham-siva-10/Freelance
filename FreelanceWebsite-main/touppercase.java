import java.util.Scanner;

public class touppercase {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number of characters:");
        int len = sc.nextInt();
        System.out.println("Enter the string");
        String input = sc.next();
        if (input.length() == len) {
            System.out.println("Upper Case:" + input.toUpperCase());
        } else {
            System.out.println("Length doesn't match");
        }
    }
}