public class Roman {
    int value(char r) {
        if (r == 'I')
            return 1;
        if (r == 'V')
            return 5;
        if (r == 'X')
            return 10;
        if (r == 'L')
            return 50;
        if (r == 'C')
            return 100;
        if (r == 'D')
            return 500;
        if (r == 'M')
            return 1000;
        return -1;
    }

    public static void main(String[] args) {
        Roman t = new Roman();
        String str = "XIV"; // 10 1 5 -- 
        int result = t.value(str.charAt(str.length() - 1));

        for (int i = str.length() - 2; i >= 0; i--) {
            if (t.value(str.charAt(i)) < t.value(str.charAt(i + 1))) {
                result = result - t.value(str.charAt(i));

            } else {
                result = result + t.value(str.charAt(i));
            }
        }

        System.out.println(result);
    }
}
