var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-XXXXXX-1"]);
_gaq.push(["_trackPageview"]);
_gaq.push(
["_addOrganic", "baidu", "word"],
["_addOrganic", "so.360.cn", "q"],
["_addOrganic", "sogou", "query"],
["_addOrganic", "soso", "w"],
["_addOrganic", "gougou", "search"],
["_addOrganic", "youdao", "q"]
)
(function() {
var ga = document.createElement(“script”); ga.type = “text/javascript”; ga.async = true;
ga.src = (“https:” == document.location.protocol ? “https://ssl” : “http://www”) + “.google-analytics.com/ga.js”;
var s = document.getElementsByTagName(“script”)[0]; s.parentNode.insertBefore(ga, s);
})();