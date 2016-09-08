using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using StandupManagement.Services.Classes;

namespace StandupManagement.Services
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IResourceService" in both code and config file together.
    [ServiceContract]
    public interface IResourceService
    {
        [OperationContract]
        [WebInvoke(Method = "GET", ResponseFormat = WebMessageFormat.Json,
             BodyStyle = WebMessageBodyStyle.Bare)]
        string GetResources();

        [OperationContract]
        [WebInvoke(Method = "GET", ResponseFormat = WebMessageFormat.Json, UriTemplate="GetReportsByResourceId/{resourceId}",
             BodyStyle = WebMessageBodyStyle.Bare)]
        string GetReportsByResourceId(string resourceId);
    }
}
