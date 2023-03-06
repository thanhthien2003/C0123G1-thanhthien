package Introduction_to_Java.bai_3;

import java.util.Scanner;

public class UngDungChuyenDoiTienTe {
    public static void main(String[] args) {
        double vnd = 23000;
        double usd;
        Scanner sc = new Scanner(System.in);
        System.out.println("nhap so usd ban muon quy doi");
        usd = sc.nextDouble();
        double quydoi = usd * vnd;
        System.out.println("gia tri vnd cua so usd ban co la " + quydoi);

    }
}
