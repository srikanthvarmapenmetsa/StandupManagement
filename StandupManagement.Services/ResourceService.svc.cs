using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using System.Web.Script.Serialization;
using StandupManagement.Services.Classes;

namespace StandupManagement.Services
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "ResourceService" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select ResourceService.svc or ResourceService.svc.cs at the Solution Explorer and start debugging.
    public class ResourceService : IResourceService
    {
        public string GetResources()
        {
            List<Resource> resources = new List<Resource>();
            resources.Add(new Resource { Id = "1", Name = "Raghu" });
            resources.Add(new Resource { Id = "2", Name = "Amit" });
            resources.Add(new Resource { Id = "3", Name = "Sandhya" });
            resources.Add(new Resource { Id = "4", Name = "Kiran" });
            resources.Add(new Resource { Id = "5", Name = "Servani" });
            resources.Add(new Resource { Id = "6", Name = "Srikanth" });
            JavaScriptSerializer serializer = new JavaScriptSerializer();
           return serializer.Serialize(resources);
        }

    }
}
