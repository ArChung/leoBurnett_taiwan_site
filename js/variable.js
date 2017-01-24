
//是否在子頁
var $isSubPageNow=false;

//主要金色邊框距邊寬度
var $border_distant=15;

//預設首頁
var $pageChannel=1; 
//client/showcase/humanKind
var $subPageOn="";
var $skipIntro=false;

//影片撥放器
// var $videoPlayer;

var $isInSubPage=false;

var $isVideo = false;

var $defaultVolume=0;

//---- showCase ----//

//全部的case數量
var $totalshowCaseNum=20;

var $sourcePath='http://ad.arcww.com.tw/arChung/LBsite/';


//case的種類
var $caseTypeArr=[
'video','video','video','video',
'video','video','video','video',
'video','video','poster','poster',
'video','website','website','website'];


//video的高...
var $videoHeightTypeArr=[
{width:1920,height:1080},
{width:640,height:480},
{width:640,height:480},
{width:720,height:480},

{width:640,height:480},
{width:640,height:480},
{width:640,height:480},
{width:720,height:480},

{width:640,height:480},
{width:640,height:480},
{width:0,height:0},
{width:0,height:0},

{width:1280,height:720},
{width:0,height:0},
{width:0,height:0},
{width:0,height:0}]





//webSiteUrlArr
var $webSiteUrlArr=[
'video','video','video','video',
'video','video','video','video',
'video','video','poster','poster',
'video',
'http://www.mercedes-benz-select.com.tw/',
'http://www.regenttaipei.com/',
'http://www.lemeridien-taipei.com/'];



//摘星人的位置
var StarManPointArr=[{x:144,y:100},{x:1079,y:117},{x:325,y:158},{x:937,y:200},{x:1210,y:251},{x:227,y:273},{x:51,y:301},{x:1079,y:315},{x:141,y:321},{x:1280,y:332},{x:1181,y:342},{x:279,y:361},{x:206,y:386},{x:963,y:388},{x:69,y:390},{x:749,y:398},{x:1127,y:408},{x:376,y:414},{x:1240,y:431},{x:131,y:442},{x:831,y:445},{x:1059,y:445},{x:272,y:457},{x:903,y:478},{x:569,y:479},{x:1172,y:485},{x:650,y:487},{x:479,y:495},{x:381,y:503},{x:57,y:509},{x:198,y:511},{x:985,y:521},{x:1099,y:523},{x:775,y:525},{x:855,y:546},{x:307,y:550},{x:517,y:567},{x:616,y:574},{x:915,y:582},{x:444,y:584},{x:695,y:586},{x:807,y:600}];
//摘星人的照片張數，命名從1.png開始
var StarManTotalNum=22;


//滑鼠的事件
var $MouseMoveScroll=new chung.MouseMoveScroll();
var $ResizeManager=new chung.ResizeManager();

$MouseMoveScroll.init();
$ResizeManager.init();

var Interval;

var isVideoPage=false;