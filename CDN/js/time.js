function show_date_time(date_) {
    var Config = { "siteStartTime": date_, "version": "1.0.0" }; //date format: 2019-11-11
    var StartTime = Config.siteStartTime;
    var date = new Date(StartTime.replace(/-/g, "/"));
    var today = new Date();
    var timeold = (today.getTime() - date.getTime());
    var msPerDay = 24 * 60 * 60 * 1000;
    var e_daysold = timeold / msPerDay;
    var daysold = Math.floor(e_daysold);
    var e_hrsold = (e_daysold - daysold) * 24;
    var hrsold = Math.floor(e_hrsold);
    var e_minsold = (e_hrsold - hrsold) * 60;
    var minsold = Math.floor((e_hrsold - hrsold) * 60);
    var seconds = Math.floor((e_minsold - minsold) * 60);
    currentTimeHtml = daysold + " 天 " + hrsold + " 时 " + minsold + " 分 " + seconds + " 秒 ";
    document.getElementById("build_time").innerHTML = currentTimeHtml
}