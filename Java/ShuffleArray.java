import java.util.Random;

public class ShuffleArray {

    public static void main(String[] args) {
        int[] array = { 1, 2, 3, 4, 5 };
        Random rand = new Random();
        System.out.println();

        for (int i = 0; i < array.length; i++) {
            int rIndex = rand.nextInt(array.length);
            int temp = array[rIndex];
            array[rIndex] = array[i];
            array[i] = temp;
        }

        for (int i = 0; i < array.length; i++) {
            System.out.println(array[i]);
        }
    }
}