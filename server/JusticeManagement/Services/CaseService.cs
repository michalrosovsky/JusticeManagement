using MassTransit;

namespace Case
{
    public interface ICaseService
    {
        Case CreateCase(Case request);
    }
    public class CaseService : ICaseService
    {
        private readonly IRequestClient<InvolvedFactorConsumer> _involvedFactorClient;
        static int CaseNumber = 110;
        public CaseService(IRequestClient<InvolvedFactorConsumer> involvedFactorClient)
        {
            _involvedFactorClient = involvedFactorClient;
        }

        public Case CreateCase(Case request)
        {
            request.Number = $"{CaseNumber++}/2024";
            request.OpenDate = DateTime.Now;
            request.Status = "קליטת תיק";
            //:הודעה לגורמים הרלוונטיים על פתיחת תיק
            //בהנחה ש _involvedFactorClient מפנה למיקרו שירות אחר
            //var result = await _involvedFactorClient.GetResponse<CreateCaseMessage>(new
            //{
            //    CaseId = request.Number,
            //});
            return request;
        }
    }
}
