var _deamon= _deamon || [];
//var counter=0;
var flagPreviousUser=false;
var start,end;
var ip;
$(document).ready(function(){
	//alert('document loaded');
var starttime;
var ip='';
var city='';
var countryName='';
var OSName='';
var browser='';
var device='';
var id='aditya';
getUserIpCountry();
getOs();
getBrowser();
getDevice();

function save()
{
    $.ajax({
        url: 'http://localhost/web_analytics/save.php',
        data: 'id='+id+'&ip='+ip+'&time='+starttime+'&city='+city+'&OSName='+OSName+'&country='+countryName+'&browser='+browser+'&device_type='+device+'&operating_system='+OSName,
        dataType: '',

        success: function(data){
       	 alert(data);
 
        }
    });
}
function getOs()
{
	  OSName="Unknown";
	 if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
	 if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
	 if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
	 if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

}
function getDevice()
{
	if(! navigator.userAgent.match(/Android/i) &&
            ! navigator.userAgent.match(/webOS/i) &&
            ! navigator.userAgent.match(/iPhone/i) &&
            ! navigator.userAgent.match(/iPod/i) &&
            ! navigator.userAgent.match(/iPad/i) &&
            ! navigator.userAgent.match(/Blackberry/i) )
    {
        device="Desktop";

    } else if ( navigator.userAgent.match(/iPad/i) ) 
    {
       device="ipad";
    }
    else
    	   device="mobile";
    	
	//$.browser.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
  	
}
function getBrowser()
{
	 if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
	    {
		 browser='Opera';
	    }
	    else if(navigator.userAgent.indexOf("Chrome") != -1 )
	    {
	    	browser='Chrome';
	    }
	    else if(navigator.userAgent.indexOf("Safari") != -1)
	    {
	    	browser='Safari';
	    }
	    else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
	    {
	    	browser='Firefox';
	    }
	    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
	    {
	    	browser='IE'; 
	    }  
	    else 
	    {
	    	browser='UNKNOWN';
	    }
	    	 
}
	function getUserIpCountry()
	{
		d=new Date();
		starttime=d.getTime();
		//2038-01-19 03:14:07
		starttime=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()+" "+d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
	//	alert(starttime);
	//	alert(starttime);
		$.ajax({
		    dataType: 'json',
		    url: 'http://api.hostip.info/get_json.php',
		    success: function(data) {
		        ip = data['ip']; 
		         city=data['city'];
		         countryName=data['country_name'];
		         alert(ip+"  "+city);
		         save(); 
		    }
		});
	}

});
$(window).unload(function(){
	//_deamon.push({"counter":counter});
	var d = new Date();
	end=d.getTime();
	var timeSpend=end-start;
	alert(timeSpend);
	//alert(_deamon[0].counter);
});

/* $city = data['city'],
$countryCode = data['country_code'],
$countryName = data['country_name']; */