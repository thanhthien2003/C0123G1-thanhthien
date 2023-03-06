package Introduction_to_Java.bai_1;

import java.util.Scanner;

public class HienThiLoiChao {
    public static void main(String[] args) {
        System.out.println("nhap ten ban vao");
        Scanner sc = new Scanner(System.in);
        String name = sc.nextLine();
        System.out.println("hello " + name);
    }
}
