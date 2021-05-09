package Trello.TrelloBackEnd.BusinessLogic.scheduledEmail.Scheduling;
import Trello.TrelloBackEnd.dtos.EmailDto;
import org.quartz.*;
import org.quartz.impl.StdSchedulerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@Service
public class ScheduledMail {
    public ResponseEntity<Void> scheduleEmail(String username, String recipientMail, EmailDto emailInfo) throws Exception {
        String cronEx = this.makeCronExpression(emailInfo.getDate());

        JobDetail job = JobBuilder.newJob(ScheduledJob.class)
                .usingJobData("username",username)
                .usingJobData("title", emailInfo.getTitle())
                .usingJobData("date", emailInfo.getDate())
                .usingJobData("recipientMail", recipientMail)
                .withIdentity("job"+emailInfo.getTitle(), "group1")
                .build();

        Trigger trigger = TriggerBuilder.newTrigger()
                .withIdentity("cronTrigger1"+emailInfo.getTitle(),"group1")
                .withSchedule(CronScheduleBuilder.cronSchedule(cronEx))
                .build();

        Scheduler scheduler = new StdSchedulerFactory().getScheduler();
        scheduler.start();
        if(scheduler.checkExists(job.getKey()))
            scheduler.deleteJob(job.getKey());
        scheduler.scheduleJob(job, trigger);

        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    private String makeCronExpression(String date){
//        "YYYY-MM-DD"
        System.out.println(date);
        StringBuilder cronExpression = new StringBuilder();
        String[] splitedDate = date.split("-");
        String year = splitedDate[0];
        String month = splitedDate[1];
        String day = splitedDate[2];

        StringBuilder monthInCorn = new StringBuilder();
        switch(month){
            case "01":
                monthInCorn.append("JAN");
                break;
            case "02":
                monthInCorn.append("FEB");
                break;
            case "03":
                monthInCorn.append("MAR");
                break;
            case "04":
                monthInCorn.append("APR");
                break;
            case "05":
                monthInCorn.append("MAY");
                break;
            case "06":
                monthInCorn.append("JUN");
                break;
            case "07":
                monthInCorn.append("JUL");
                break;
            case "08":
                monthInCorn.append("AUG");
                break;
            case "09":
                monthInCorn.append("SEP");
                break;
            case "10":
                monthInCorn.append("OCT");
                break;
            case "11":
                monthInCorn.append("NOV");
                break;
            case "12":
                monthInCorn.append("DEC");
                break;
        }
        // At 8AM in /DAY-MONTH-YEAR /
        cronExpression.append("0 0 8 ").append(day).append(" ").append(monthInCorn).append(" ").append("?")
                .append(" ").append(year);
        System.out.println(cronExpression.toString());
        return cronExpression.toString();
    }

}
