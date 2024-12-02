using MassTransit;

namespace Case
{
    public class InvolvedFactorConsumer : IConsumer<CreateCaseMessage>
    {
        //ה consumer אמור להיות במיקרו שירות שאליו רוצים לפנות
        public async Task Consume(ConsumeContext<CreateCaseMessage> context)
        {

            await context.RespondAsync<CreateCaseResponse>(new
            {
                CaseId = 1
            });
        }
    }
}
