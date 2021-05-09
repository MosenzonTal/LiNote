package Trello.TrelloBackEnd.BusinessLogic.scheduledEmail.Scheduling;
import Trello.TrelloBackEnd.BusinessLogic.scheduledEmail.EmailManager;
import Trello.TrelloBackEnd.dtos.EmailDto;
import org.quartz.*;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("singleton")
public class ScheduledJob implements Job {

    @Override
    public void execute(JobExecutionContext jobExecutionContext) throws JobExecutionException {
        try {
            JobDataMap dataMap = jobExecutionContext.getJobDetail().getJobDataMap();

            String username = dataMap.getString("username");
            String title = dataMap.getString("title");
            String date = dataMap.getString("date");
            String recipientMail = dataMap.getString("recipientMail");
            System.out.println(username + " " + title + " " + " " + date);

            EmailDto emailDto = new EmailDto();
            emailDto.setTitle(title);
            emailDto.setDate(date);

            EmailManager emailManager = new EmailManager();
            emailManager.setRecipientMail(recipientMail);
            emailManager.sendMail(username, recipientMail, emailDto);

        } catch (Exception exception) {
            exception.printStackTrace();
        }
    }

}
