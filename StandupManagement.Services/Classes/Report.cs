using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StandupManagement.Services.Classes
{
    public class Report
    {
        public string Id;
        public DateTime ReportDate;
        public string Team;
        public string ResourceName;
        public string StoryProgress;
        public string DefectProgress;
        public string PanForToday;
        public string Comment;
    }
}