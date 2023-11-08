import java.io.*;

class Test {

    public static boolean checkPangram(String str) {
        boolean[] mark = new boolean[26];
        int index = 0;
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) >= 'A' && str.charAt(i) <= 'Z') {
                index = str.charAt(i) - 'A';
            } else if (str.charAt(i) >= 'a' && str.charAt(i) <= 'z') {
                index = str.charAt(i) - 'a';
            } else {
                continue;
            }
            mark[index] = true;
        }
        for (int i = 0; i <= 25; i++) {
            if (mark[i] == false) {
                return (false);
            }
        }
        return (true);
    }

    public static void main(String[] args) {
        if (checkPangram("Waltz, bad nymph, for quick jigs vex") == true) {
            System.out.println("Is Pangram");
        } else {
            System.out.println("Not panagram");
        }
    }
}
