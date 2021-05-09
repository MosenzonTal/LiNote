package Trello.TrelloBackEnd;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;


@SpringBootApplication
public class TrelloBackEndApplication {

	public static void main(String[] args) throws Exception {
		ApplicationContext contex = SpringApplication.run(TrelloBackEndApplication.class, args);
	}

}
