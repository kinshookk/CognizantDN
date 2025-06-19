
public class Main {
    public static void main(String[] args){
        Product[] products = {
              new Product(1, "Laptop", "Electronics"),
                new Product(2, "Shampoo", "Personal Care"),
                new Product(3, "Smartphone", "Electronics"),
                new Product(4, "Notebook", "Stationery")
        };

        //Linear Search

        System.out.println("Linear Search:");
        Product result1 = ProductSearch.linearSearch(products, "Smartphone");
        System.out.println(result1!=null ? result1 : "Product not found.");

        //sorting before binary search
        ProductSearch.sortProductsByName(products);

        //binary search
        System.out.println("Binary Search:");
        Product result2 = ProductSearch.binarySearch(products, "Smartphone");
        System.out.println(result2!=null ? result2 : "Product not found.");

    }
}
