 

import java.util.Scanner;

public class LiquidContainersMethods {

    private static int first = 0;
    private static int second = 0;

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        while (true) {
            System.out.println("First: " + first + "/100" + "\n" + "Second: " + second + "/100");
            String input = scan.nextLine();
            processInput(input);

            if (input.equals("quit")) {
                break;
            }
        }
    }

    private static void processInput(String input) {
        String[] parts = input.split(" ");
        String command = parts[0];

        if (parts.length < 2) {
            System.out.println("Invalid input. Please enter a command and an amount.");
            return;
        }

        int amount = Integer.parseInt(parts[1]);

        if (command.equals("add")) {
            add(amount);
        } else if (command.equals("move")) {
            move(amount);
        } else if (command.equals("remove")) {
            remove(amount);
        } else {
            System.out.println("Invalid command.");
        }
    }

    private static void add(int amount) {
        if (amount > 0) {
            first += amount;
            if (first > 100) {
                first = 100;
            }
        }
    }

    private static void move(int amount) {
        if (amount > 0) {
            if (amount > first) {
                second += first;
                first = 0;
                if (second > 100) {
                    second = 100;
                }
            } else {
                first -= amount;
                second += amount;
                if (second > 100) {
                    second = 100;
                }
            }
        }
    }

    private static void remove(int amount) {
        if (amount > 0) {
            second -= amount;
            if (second < 0) {
                second = 0;
            }
        }
    }
}