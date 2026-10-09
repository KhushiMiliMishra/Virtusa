class ProdCons {

    private int item;
    private boolean available = false;

    synchronized void produce(int value) {

        while (available) {
            try {
                wait();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }

        item = value;
        available = true;

        System.out.println("Produced: " + value);

        notify();
    }

    synchronized void consume() {

        while (!available) {
            try {
                wait();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }

        System.out.println("Consumed: " + item);

        available = false;

        notify();
    }

    public static void main(String[] args) {

        ProdCons pc = new ProdCons();

        Thread producer = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                pc.produce(i);
            }
        });

        Thread consumer = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                pc.consume();
            }
        });

        producer.start();
        consumer.start();
    }
}