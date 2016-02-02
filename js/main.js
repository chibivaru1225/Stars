var fight = null;
var game = null;
var exp = 0;
var firstscore = 0;
var score = firstscore;
var clearscore = 500000;
var bulletwait = 0;
var shootwait = 0;
var spawnwait = 0;
var spawnflag = true;
var bossspawn = false;
var bossspawnflag = true;
var add = 8;
var bulletadd = 1;
var life = 5;
var lifemax = 5;
var bomb = 0;
var bombwait = true;
var changewait = true;
var mode = 0; //0 = bullet 1 = beam 2 = bomb 3 = homing
var destroycount = 0;
var bossdeleteflag = false;
icons = new Array();
enchant();
var enemyid = 0;
var bossid = 0;
var shoottime = false;
var time = 0;
var timeindex = 0;
var stageclearflag = false;
var optionlevel = 0;
var shootlevel = 1;
var beamlevel = 1;
var bomblevel = 1;
var hominglevel = 1;
var stage = 1;
var defaultstage = 1;
var timeline = null;
var files;
var folder;
var teststage2 = [
	[0,2,120,0,0],
	[0,2,136,0,1],
	[0,2,152,0,2],
	[0,2,168,0,3],
	[0,2,184,0,4],
	[0,2,200,0,5],
	[0,2,216,0,6],
	[16,2,120,0,0],
	[16,2,136,0,1],
	[16,2,152,0,2],
	[16,2,168,0,3],
	[16,2,184,0,4],
	[16,2,200,0,5],
	[16,2,216,0,6],
	[32,2,120,0,0],
	[32,2,136,0,1],
	[32,2,152,0,2],
	[32,2,168,0,3],
	[32,2,184,0,4],
	[32,2,200,0,5],
	[32,2,216,0,6],
	[48,2,120,0,0],
	[48,2,136,0,1],
	[48,2,152,0,2],
	[48,2,168,0,3],
	[48,2,184,0,4],
	[48,2,200,0,5],
	[48,2,216,0,6],
	[64,2,120,0,0],
	[64,2,136,0,1],
	[64,2,152,0,2],
	[64,2,168,0,3],
	[64,2,184,0,4],
	[64,2,200,0,5],
	[64,2,216,0,6],
	[80,2,120,0,0],
	[80,2,136,0,1],
	[80,2,152,0,2],
	[80,2,168,0,3],
	[80,2,184,0,4],
	[80,2,200,0,5],
	[80,2,216,0,6],
	[96,2,120,0,0],
	[96,2,136,0,1],
	[96,2,152,0,2],
	[96,2,168,0,3],
	[96,2,184,0,4],
	[96,2,200,0,5],
	[96,2,216,0,6],
	[112,2,120,0,0],
	[112,2,136,0,1],
	[112,2,152,0,2],
	[112,2,168,0,3],
	[112,2,184,0,4],
	[112,2,200,0,5],
	[112,2,216,0,6],
	[128,2,120,0,0],
	[128,2,136,0,1],
	[128,2,152,0,2],
	[128,2,168,0,3],
	[128,2,184,0,4],
	[128,2,200,0,5],
	[128,2,216,0,6],
	[5000,1,1,true,10000000,-2],
];
var teststage1 = [
	[0,2,120,0,0],
	[0,2,136,0,1],
	[0,2,152,0,2],
	[0,2,168,0,3],
	[0,2,184,0,4],
	[0,2,200,0,5],
	[0,2,216,0,6],
	[16,10],
];
var stage1 = [
	[0,0,50,0,0,initializeDownEnemy,onenterframeDownEnemy,0],
	[0,0,334,0,0,initializeDownEnemy,onenterframeDownEnemy,0],
	[16,0,50,0,0,initializeDownEnemy,onenterframeDownEnemy,0],
	[16,0,334,0,0,initializeDownEnemy,onenterframeDownEnemy,0],
	[32,0,50,0,0,initializeDownEnemy,onenterframeDownEnemy,1],
	[32,0,334,0,0,initializeDownEnemy,onenterframeDownEnemy,1],
	[48,0,50,0,0,initializeDownEnemy,onenterframeDownEnemy,1],
	[48,0,334,0,0,initializeDownEnemy,onenterframeDownEnemy,1],
	[64,0,50,0,0,initializeDownEnemy,onenterframeDownEnemy,2],
	[64,0,334,0,0,initializeDownEnemy,onenterframeDownEnemy,2],
	[80,0,50,0,0,initializeDownEnemy,onenterframeDownEnemy,2],
	[80,0,334,0,0,initializeDownEnemy,onenterframeDownEnemy,2],
	[96,0,50,0,0,initializeDownEnemy,onenterframeDownEnemy,3],
	[96,0,334,0,0,initializeDownEnemy,onenterframeDownEnemy,3],
	[112,0,50,0,0,initializeDownEnemy,onenterframeDownEnemy,3],
	[112,0,334,0,0,initializeDownEnemy,onenterframeDownEnemy,3],
	[128,0,50,0,0,initializeDownEnemy,onenterframeDownEnemy,4],
	[128,0,334,0,0,initializeDownEnemy,onenterframeDownEnemy,4],
	[144,0,50,0,0,initializeDownEnemy,onenterframeDownEnemy,4],
	[144,0,334,0,0,initializeDownEnemy,onenterframeDownEnemy,4],
	[160,0,50,0,0,initializeDownEnemy,onenterframeDownEnemy,5],
	[160,0,334,0,0,initializeDownEnemy,onenterframeDownEnemy,5],
	[176,0,50,0,0,initializeDownEnemy,onenterframeDownEnemy,5],
	[176,0,334,0,0,initializeDownEnemy,onenterframeDownEnemy,5],
	[192,0,50,0,0,initializeDownEnemy,onenterframeDownEnemy,6],
	[192,0,334,0,0,initializeDownEnemy,onenterframeDownEnemy,6],
	[208,0,50,0,0,initializeDownEnemy,onenterframeDownEnemy,6],
	[208,0,334,0,0,initializeDownEnemy,onenterframeDownEnemy,6],
	[416,1,0,true,10000,2],
];
var stage2 = [
	[0,0,0,0,0,initializeHomingEnemy,onenterframeHomingEnemy,-1],
	[0,0,0,384,0,initializeHomingEnemy,onenterframeHomingEnemy,-1],
	[0,0,384,0,0,initializeHomingEnemy,onenterframeHomingEnemy,-1],
	[0,0,384,384,0,initializeHomingEnemy,onenterframeHomingEnemy,-1],
	[32,0,0,0,1,initializeHomingEnemy,onenterframeHomingEnemy,0],
	[32,0,0,384,1,initializeHomingEnemy,onenterframeHomingEnemy,0],
	[32,0,384,0,1,initializeHomingEnemy,onenterframeHomingEnemy,0],
	[32,0,384,384,1,initializeHomingEnemy,onenterframeHomingEnemy,0],
	[64,0,0,0,0,initializeHomingEnemy,onenterframeHomingEnemy,-1],
	[64,0,0,384,0,initializeHomingEnemy,onenterframeHomingEnemy,-1],
	[64,0,384,0,0,initializeHomingEnemy,onenterframeHomingEnemy,-1],
	[64,0,384,384,0,initializeHomingEnemy,onenterframeHomingEnemy,-1],
	[96,0,0,0,1,initializeHomingEnemy,onenterframeHomingEnemy,0],
	[96,0,0,384,1,initializeHomingEnemy,onenterframeHomingEnemy,0],
	[96,0,384,0,1,initializeHomingEnemy,onenterframeHomingEnemy,0],
	[96,0,384,384,1,initializeHomingEnemy,onenterframeHomingEnemy,0],
	[128,0,0,0,0,initializeHomingEnemy,onenterframeHomingEnemy,-1],
	[128,0,0,384,0,initializeHomingEnemy,onenterframeHomingEnemy,-1],
	[128,0,384,0,0,initializeHomingEnemy,onenterframeHomingEnemy,-1],
	[128,0,384,384,0,initializeHomingEnemy,onenterframeHomingEnemy,-1],
	[160,0,0,0,1,initializeHomingEnemy,onenterframeHomingEnemy,0],
	[160,0,0,384,1,initializeHomingEnemy,onenterframeHomingEnemy,0],
	[160,0,384,0,1,initializeHomingEnemy,onenterframeHomingEnemy,0],
	[160,0,384,384,1,initializeHomingEnemy,onenterframeHomingEnemy,0],
	[192,0,0,0,0,initializeHomingEnemy,onenterframeHomingEnemy,-1],
	[192,0,0,384,0,initializeHomingEnemy,onenterframeHomingEnemy,-1],
	[192,0,384,0,0,initializeHomingEnemy,onenterframeHomingEnemy,-1],
	[192,0,384,384,0,initializeHomingEnemy,onenterframeHomingEnemy,-1],
	[224,0,0,0,1,initializeHomingEnemy,onenterframeHomingEnemy,0],
	[224,0,0,384,1,initializeHomingEnemy,onenterframeHomingEnemy,0],
	[224,0,384,0,1,initializeHomingEnemy,onenterframeHomingEnemy,0],
	[224,0,384,384,1,initializeHomingEnemy,onenterframeHomingEnemy,0],
	[256,0,0,0,0,initializeHomingEnemy,onenterframeHomingEnemy,-1],
	[256,0,0,384,0,initializeHomingEnemy,onenterframeHomingEnemy,-1],
	[256,0,384,0,0,initializeHomingEnemy,onenterframeHomingEnemy,-1],
	[256,0,384,384,0,initializeHomingEnemy,onenterframeHomingEnemy,-1],
	[288,0,0,0,1,initializeHomingEnemy,onenterframeHomingEnemy,1],
	[288,0,0,384,1,initializeHomingEnemy,onenterframeHomingEnemy,1],
	[288,0,384,0,1,initializeHomingEnemy,onenterframeHomingEnemy,1],
	[288,0,384,384,1,initializeHomingEnemy,onenterframeHomingEnemy,1],
	[320,0,0,0,0,initializeHomingEnemy,onenterframeHomingEnemy,5],
	[320,0,0,384,0,initializeHomingEnemy,onenterframeHomingEnemy,5],
	[320,0,384,0,0,initializeHomingEnemy,onenterframeHomingEnemy,5],
	[320,0,384,384,0,initializeHomingEnemy,onenterframeHomingEnemy,5],
	[352,0,0,0,1,initializeHomingEnemy,onenterframeHomingEnemy,1],
	[352,0,0,384,1,initializeHomingEnemy,onenterframeHomingEnemy,1],
	[352,0,384,0,1,initializeHomingEnemy,onenterframeHomingEnemy,1],
	[352,0,384,384,1,initializeHomingEnemy,onenterframeHomingEnemy,1],
	[384,0,0,0,0,initializeHomingEnemy,onenterframeHomingEnemy,5],
	[384,0,0,384,0,initializeHomingEnemy,onenterframeHomingEnemy,5],
	[384,0,384,0,0,initializeHomingEnemy,onenterframeHomingEnemy,5],
	[384,0,384,384,0,initializeHomingEnemy,onenterframeHomingEnemy,5],
	[450,1,1,true,100000,3],
];
var stage3 = [
	[0,0,0,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[0,0,16,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[0,0,32,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[0,0,48,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[0,0,64,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[0,0,80,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[0,0,96,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[0,0,112,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[0,0,128,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[0,0,144,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[0,0,160,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[0,0,176,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[0,0,192,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[0,0,208,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[0,0,224,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[0,0,240,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[0,0,256,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[0,0,272,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[0,0,288,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[0,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[0,2,304,0,4],
	[0,2,320,0,4],
	[16,0,0,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[16,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[32,0,0,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[32,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[48,0,0,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[48,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[64,0,0,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[64,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[80,0,0,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[80,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[80,0,368,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[80,0,352,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[80,0,336,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[80,0,320,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[80,0,304,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[80,0,288,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[80,0,272,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[80,0,256,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[80,0,240,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[80,0,224,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[80,0,208,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[80,0,192,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[80,0,176,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[80,0,160,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[80,0,144,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[80,0,128,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[80,0,112,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[80,0,96,0,1,initializeWallEnemy,onenterframeWallEnemy,-1],
	[96,0,0,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[96,0,96,0,1,initializeWallEnemy,onenterframeWallEnemy,-1],
	[96,0,208,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[96,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[112,0,0,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[112,0,96,0,1,initializeWallEnemy,onenterframeWallEnemy,-1],
	[112,0,208,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[112,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[128,0,0,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[128,0,96,0,1,initializeWallEnemy,onenterframeWallEnemy,-1],
	[128,2,144,0,3],
	[128,2,160,0,3],
	[128,0,208,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[128,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[144,0,0,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[144,0,96,0,1,initializeWallEnemy,onenterframeWallEnemy,-1],
	[144,0,208,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[144,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[160,0,0,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[160,0,96,0,1,initializeWallEnemy,onenterframeWallEnemy,-1],
	[160,0,208,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[160,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[176,0,0,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[176,0,96,0,1,initializeWallEnemy,onenterframeWallEnemy,-1],
	[176,0,112,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[176,0,128,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[176,0,144,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[176,0,160,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[176,0,176,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[176,0,192,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[176,0,208,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[176,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[192,0,16,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[192,0,112,0,1,initializeWallEnemy,onenterframeWallEnemy,-1],
	[192,0,208,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[192,0,368,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[208,0,32,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[208,0,126,0,1,initializeWallEnemy,onenterframeWallEnemy,-1],
	[208,0,208,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[208,0,352,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[224,0,48,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[224,0,144,0,1,initializeWallEnemy,onenterframeWallEnemy,-1],
	[224,0,208,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[224,0,336,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[240,0,64,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[240,0,160,0,1,initializeWallEnemy,onenterframeWallEnemy,-1],
	[240,0,208,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[240,0,320,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[256,0,80,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[256,0,176,0,1,initializeWallEnemy,onenterframeWallEnemy,-1],
	[256,0,208,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[256,0,304,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[272,0,96,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[272,0,192,0,1,initializeWallEnemy,onenterframeWallEnemy,-1],
	[272,0,208,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[272,0,304,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[288,0,112,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[288,0,208,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[288,0,304,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[304,0,112,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[304,0,208,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[304,0,304,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[320,0,112,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[320,0,208,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[320,0,304,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[336,0,112,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[336,0,208,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[336,0,304,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[352,0,96,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[352,0,192,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[352,0,288,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[368,0,96,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[368,0,192,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[368,0,288,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[384,0,80,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[384,0,176,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[384,0,272,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[400,0,80,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[400,0,176,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[400,0,272,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[400,0,288,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[400,0,304,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[400,0,320,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[400,0,336,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[400,0,352,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[400,0,368,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[416,0,64,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[416,0,160,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[416,0,256,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[416,0,368,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[432,0,64,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[432,0,160,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[432,0,256,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[432,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[448,0,48,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[448,0,144,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[448,0,240,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[448,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[464,0,48,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[464,0,144,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[464,0,240,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[464,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[480,0,32,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[480,0,128,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[480,0,224,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[480,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[496,0,32,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[496,0,128,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[496,0,224,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[496,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[512,0,16,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[512,0,112,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[512,0,208,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[512,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[528,0,16,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[528,0,112,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[528,0,208,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[528,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[544,0,0,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[544,0,96,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[544,0,192,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[544,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[560,0,0,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[560,0,96,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[560,0,192,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[560,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[576,0,0,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[576,0,96,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[576,0,192,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[576,0,288,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[576,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[592,0,0,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[592,0,96,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[592,0,192,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[592,0,288,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[592,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[608,0,0,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[608,0,96,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[608,0,192,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[608,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[624,0,0,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[624,0,96,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[624,0,192,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[624,0,288,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[624,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[640,0,16,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[640,0,112,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[640,0,192,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[640,0,288,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[640,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[656,0,16,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[656,0,112,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[656,0,192,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[656,0,288,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[656,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[672,0,32,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[672,0,112,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[672,0,288,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[672,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[688,0,32,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[688,0,112,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[688,0,288,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[688,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[704,0,48,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[704,0,128,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[704,0,272,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[704,0,288,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[704,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[720,0,48,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[720,0,128,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[720,0,272,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[720,0,288,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[720,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[736,0,64,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[736,0,144,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[736,0,256,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[736,0,288,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[736,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[752,0,64,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[752,0,144,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[752,0,256,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[752,0,288,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[752,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[768,0,64,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[768,0,160,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[768,0,176,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[768,0,192,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[768,0,208,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[768,0,224,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[768,0,240,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[768,0,288,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[768,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[784,0,80,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[784,0,176,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[784,0,288,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[784,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[800,0,96,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[800,0,192,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[800,0,288,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[800,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[816,0,112,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[816,0,208,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[816,0,288,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[816,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[832,0,128,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[832,0,224,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[832,0,288,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[832,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[848,0,144,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[848,0,240,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[848,0,288,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[848,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[864,0,160,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[864,0,256,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[864,0,288,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[864,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[880,0,176,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[880,0,272,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[880,0,288,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[880,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[896,0,192,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[896,0,288,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[896,0,304,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[896,0,320,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[896,0,336,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[896,0,352,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[896,0,368,0,0,initializeWallEnemy,onenterframeWallEnemy,-1],
	[896,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[912,0,192,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[912,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[928,0,208,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[928,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[944,0,224,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[944,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[960,0,240,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[960,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[976,0,240,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[976,0,384,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[992,0,224,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[992,0,368,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[1008,0,208,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[1008,0,352,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[1024,0,192,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[1024,0,336,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[1040,0,176,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[1040,0,320,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[1056,0,160,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[1056,0,304,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[1072,0,144,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[1072,0,288,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[1088,0,128,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[1088,0,272,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[1104,0,112,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[1104,0,256,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[1120,0,112,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[1120,0,256,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[1136,0,112,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[1136,0,256,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[1152,0,112,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[1152,0,256,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[1168,0,112,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[1168,0,256,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[1184,0,112,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[1184,0,256,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[1200,0,112,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[1200,0,256,0,2,initializeWallEnemy,onenterframeWallEnemy,-1],
	[1500,1,0,false,200000,0],
	[12500,1,1,true,500000,1],
];

window.onload = function()
{
	game = new Game(400,500);
	game.scale = 1.5;
	//game.preload("fighter.png");
	//game.preload("bullets.png");
	//game.preload("enemys.png");
	//game.preload("effects.png");
	//game.preload("maps.png");
	//game.preload("icons.png");
	//game.preload("boss.png");
	//game.preload("option.png");
	//game.preload("wallenemy1.png");
	//game.preload("wallenemy2.png");
	//game.preload("wallenemy3.png");
	//game.preload("powerups.png");
	folder = getfolder();
	files = getfiles();
	for(var i = 0; i < files.length; i++)
	{
		game.preload(folder + files[i]);
	}
	game.keybind(90,"a");
	game.keybind(88,"b");
	game.onload = function()
	{
		fight = new Sprite(16,16);
		fight.image = game.assets[folder + files[0]];
		fight.x = 242;
		fight.y = 350;
		for(var i = 0; i < 30; i++)
		{
			var map = new Map(Math.floor(Math.random() * 400) % 25 * 16,Math.floor(Math.random() * 400) % 25 * 16);
			game.rootScene.addChild(map);
		}
		fight.addEventListener(enchant.Event.ENTER_FRAME,function(){			
			if(game.input.right)
			{
				if(this.x < 400 - 16)
				{
					this.x = this.x + add;
				}
			}
			if(game.input.left)
			{
				if(this.x > 0 + 8)
				{
					this.x = this.x - add;
				}
			}
			if(game.input.up)
			{
				if(this.y > 0)
				{
					this.y = this.y - add;
				}
			}
			if(game.input.down)
			{
				if(this.y < 400 - 16)
				{
					this.y = this.y + add;
				}
			}
		});
		game.addEventListener(enchant.Event.ENTER_FRAME,function(){
			switch(stage)
			{
				case -2:
				{
					timeline = teststage2;
					break;
				}
				case -1:
				{
					timeline = teststage1;
					break;
				}
				case 1:
				{
					timeline = stage1;
					break;
				}
				case 2:
				{
					timeline = stage2;
					break;
				}
				case 3:
				{
					timeline = stage3;
					break;
				}
			}
			if(game.input.a && mode == 0)
			{
				if(bulletwait == 0)
				{
					shootFunc(fight);
					bulletwait = bulletadd;
					shoottime = true;
				}
				else
				{
					bulletwait += -1;
					shoottime = false;
				}
			}
			if(game.input.a && mode == 1)
			{
				var beam = new Beam(fight.x,fight.y - 16,0,(beamlevel * beamlevel + 1) * 30,(beamlevel + 1) * 2,0);
				game.rootScene.addChild(beam); 
				shoottime = true;
			}
			while(timeindex < timeline.length)
			{
				if(timeline[timeindex][0] == time)
				{
					if(timeline[timeindex][1] == 0)
					{
						var enemy = new Enemy(timeline[timeindex][2],timeline[timeindex][3],timeline[timeindex][4],enemyid,timeline[timeindex][5],timeline[timeindex][6],timeline[timeindex][7]);
						game.rootScene.addChild(enemy);
						enemyid += 1;
					}
					else if(timeline[timeindex][1] == 1)
					{
						BossCreate(timeline[timeindex][2],timeline[timeindex][3],timeline[timeindex][4],timeline[timeindex][5]);
					}
					else if(timeline[timeindex][1] == 2)
					{
						var item = new Item(timeline[timeindex][2],timeline[timeindex][3],timeline[timeindex][4],0);
						game.rootScene.addChild(item);
					}
					else if(timeline[timeindex][1] == 10)
					{
						timeindex = -1;
						time = -1;
					}
					timeindex += 1;
				}
				else
				{
					break;
				}
			}
			if(game.input.a && mode == 3)
			{
				if(shootwait == 0)
				{
					if(Boss.collection.length > 0)
					{
						for(var i = 0; i < Boss.collection.length; i++)
						{
							var homing = new Homing(fight.x,fight.y,Boss.collection[i],(hominglevel + 1) * 15,(hominglevel + 1) * 10,1);	
							game.rootScene.addChild(homing);
						}
					}
					if(Enemy.collection.length > 0)
					{
						for(var i = 0; i < Enemy.collection.length; i++)
						{
							var homing = new Homing(fight.x,fight.y,Enemy.collection[i],(hominglevel + 1) * 15,(hominglevel + 1) * 10,0);	
							game.rootScene.addChild(homing);
						}
					}
					shootwait = 2;
					shoottime = true;
				}
				else
				{
					shootwait += -1;
					shoottime = false;
				}
			}
			if(game.input.a && bombwait && mode == 2)
			{
				if(bomb != 0)
				{
					for(var i = 0, l = Enemy.collection.length; i < l; i++)
					{
						score += Enemy.collection[0].score;
						var effect = new Effect(Enemy.collection[0].x,Enemy.collection[0].y,false);
						game.rootScene.addChild(effect);
						Enemy.collection[0].remove();
					}
					for(var i = 0, l = Bullet.collection.length; i < l; i++)
					{
						if(Bullet.collection[i].client == 1)
						{
							Bullet.collection[i].life = false;
						}
					}
					bombwait = false;
					bomb += -1;
				}
			}
			else if(game.input.a == false && bombwait == false)
			{
				bombwait = true;
			}
			if(game.input.a == false)
			{
				shootwait = 0;
				bulletwait = 0;
				shoottime = false;
			}
			if(game.input.a == false && game.input.b && changewait)
			{
				switch(mode)
				{
					case 0:
					{
						mode = 1;
						break;
					}
					case 1:
					{
						if(bomb == 0)
						{
							mode = 3;
							break;
						}
						else
						{
							mode = 2;
							break;
						}
					}
					case 2:
					{
						mode = 3;
						break;
					}
					case 3:
					{
						mode = 0;
						break;
					}
				}
				changewait = false;
			}
			if(game.input.a == false && game.input.b == false && changewait == false)
			{
				changewait = true;
			}
			if(life <= 0)
			{
				alert("game over!!");
				allreset(true);
			}
			if(stageclearflag == true)
			{
				alert(allreset(false));
			}
			time++;
		});
		bulletcount = new Label("level:");
		bulletcount.x = 128 + 16 + 4;
		bulletcount.y = 452 - 16 - 8 + 4;
		bulletcount.color = "#ff00ff";
		bulletcount.addEventListener(enchant.Event.ENTER_FRAME,function(){
			this.text = "score:" + Math.floor(score) + "<br/>" +
				"life:" + life + "/" + lifemax + "<br/>" +
				"bomb:" + bomb;
		});
		shootcount = new Label("level");
		shootcount.x = 16 + 4 + 32 * 0;
		shootcount.y = 432 + 32 + 4;
		shootcount.color = "#00ff00";
		shootcount.font = "12px";
		shootcount.addEventListener(enchant.Event.ENTER_FRAME,function(){
			this.text = "LV;" + shootlevel;
		});
		game.rootScene.addChild(shootcount);
		beamcount = new Label("level");
		beamcount.x = 16 + 4 + 32 * 1;
		beamcount.y = 432 + 32 + 4;
		beamcount.color = "#00ff00";
		beamcount.font = "12px";
		beamcount.addEventListener(enchant.Event.ENTER_FRAME,function(){
			this.text = "LV:" + beamlevel;
		});
		game.rootScene.addChild(beamcount);
		bombcount = new Label("level");
		bombcount.x = 16 + 4 + 32 * 2;
		bombcount.y = 432 + 32 + 4;
		bombcount.color = "#00ff00";
		bombcount.font = "12px";
		bombcount.addEventListener(enchant.Event.ENTER_FRAME,function(){
			this.text = "LV:" + bomblevel;
		});
		game.rootScene.addChild(bombcount);
		homingcount = new Label("level");
		homingcount.x = 16 + 4 + 32 * 3;
		homingcount.y = 432 + 32 + 4;
		homingcount.color = "#00ff00";
		homingcount.font = "12px";
		homingcount.addEventListener(enchant.Event.ENTER_FRAME,function(){
			this.text = "LV:" + hominglevel;
		});
		game.rootScene.addChild(homingcount);
		for(var i = 0; i < 4; i++)
		{
			icons[i] = new Sprite(32,32);
			icons[i].image = game.assets[folder + files[5]];
			icons[i].x = i * 32 + 16;
			icons[i].y = 432;
			icons[i].active = i;
			icons[i].passive = i + 4;
			icons[i].frame = i;
			icons[i].addEventListener(enchant.Event.ENTER_FRAME,function(){
				if(mode == this.active)
				{
					this.frame = this.active;
				}
				else
				{
					this.frame = this.passive;
				}
			});
			game.rootScene.addChild(icons[i]);
		}
		game.rootScene.addChild(bulletcount);
		game.rootScene.addChild(fight);
		game.rootScene.backgroundColor = "#000000";
	};
	game.start();
};
Beam = enchant.Class.create(Sprite,{
	initialize: function(x,y,client,power,level,quauter)
	{
		Sprite.call(this,16,16);
		this.x = x;
		this.y = y;
		this.addx = 0;
		this.addy = 0;
		this.client = client;
		this.power = power;
		this.level = level;
		this.image = game.assets[folder + files[1]];
		this.frame = 3;
		switch(quauter)
		{
			case 0:
			{
				//N
				this.rotate(0);
				this.addy = -16;
				break;
			}
			case 1:
			{
				//E
				this.rotate(90);
				this.addx = 16;
				break;
			}
			case 2:
			{
				//S
				this.rotate(180);
				this.addy = 16;
				break;
			}
			case 3:
			{
				//W
				this.rotate(270);
				this.addx = -16;
				break;
			}
		}
	},
	onenterframe: function()
	{
		if((this.x < 0) || (this.x > 400) || (this.y < 0) || (this.y > 400))
		{
			game.rootScene.removeChild(this);
			this.remove();
		}
		else
		{
			this.x += this.addx;
			this.y += this.addy;
		}
		if(this.frame == 3)
		{
			this.frame = 2;
		}
		if(this.client == 0)
		{
			for(var i = 0, l = Boss.collection.length; i < l; i++)
			{
				if(this.within(Boss.collection[i],16))
				{
					Boss.collection[i].label.life += -this.power;
					Boss.collection[i].level = this.level;
					var effect = new Effect(this.x,this.y,false);
					game.rootScene.addChild(effect);
					score += Boss.collection[i].score;
				}
			}
			for(var i = 0, l = Enemy.collection.length; i < l; i++)
			{
				if(this.within(Enemy.collection[i],8))
				{
					Enemy.collection[i].life += -this.power;
					Enemy.collection[i].level = this.level;
					var effect = new Effect(this.x,this.y,false);
					game.rootScene.addChild(effect);
					score += Enemy.collection[i].score;
				}
			}
			for(var i = 0,l = Bullet.collection.length;i < l; i++)
			{
				if(this.within(Bullet.collection[i],8))
				{
					if(Bullet.collection[i].client == 1)
					{
						Bullet.collection[i].life = false;
						score += 1;
					}
				}
			}
		}
		if(this.client == 1)
		{
			if(fight.within(this,8))
			{
				var effect = new Effect(this.x,this.y,false);
				game.rootScene.addChild(effect);
				life += -1;
			}
		}
	}
});
Bullet = enchant.Class.create(Sprite,{
	initialize: function(x,y,cilent,power,level,quauter)
	{
		Sprite.call(this,16,16);
		this.x = x;
		this.y = y;
		this.addx = 0;
		this.addy = 0;
		this.client = cilent;
		this.power = power;
		this.life = true;
		this.image = game.assets[folder + files[1]];
		this.level = level;
		switch(quauter)
		{
			case 0:
			{
				//N
				this.rotate(0);
				this.addy = -8;
				break;
			}
			case 1:
			{
				//E
				this.rotate(90);
				this.addx = 8;
				break;
			}
			case 2:
			{
				//S
				this.rotate(180);
				this.addy = 8;
				break;
			}
			case 3:
			{
				//W
				this.rotate(270);
				this.addx = -8;
				break;
			}
			case 4:
			{
				//NE
				this.rotate(45);
				this.addx = 6;
				this.addy = -6;
				break;
			}
			case 5:
			{
				//SE
				this.rotate(135);
				this.addx = 6;
				this.addy = 6;
				break;
			}
			case 6:
			{	
				//SW
				this.rotate(225);
				this.addx = -6;
				this.addy = 6;
				break;
			}
			case 7:
			{
				//NW
				this.rotate(315);
				this.addx = -6;
				this.addy = -6;
				break;
			}
		}
	},
	onenterframe: function()
	{
		if((this.x < 0) || (this.x > 400) || (this.y < 0) || (this.y > 400))
		{
			game.rootScene.removeChild(this);
			this.remove();
		}
		else
		{
			this.x += this.addx;
			this.y += this.addy;
		}
		if(this.client == 0)
		{
			for(var i = 0, l = Boss.collection.length; i < l; i++)
			{
				if(this.within(Boss.collection[i],16))
				{
					Boss.collection[i].label.life += -this.power;
					Boss.collection[i].level = this.level;
					var effect = new Effect(this.x,this.y,false);
					game.rootScene.addChild(effect);	
					this.remove();
					score += Boss.collection[i].score * this.level / 2;
				}
			}
			for(var i = 0, l = Enemy.collection.length; i < l; i++)
			{
				if(this.within(Enemy.collection[i],8))
				{
					Enemy.collection[i].life += -this.power;
					Enemy.collection[i].level = this.level;
					var effect = new Effect(this.x,this.y,false);
					game.rootScene.addChild(effect);	
					this.remove();
					score += Enemy.collection[i].score * this.level / 2;
				}
			}
		}
		else if(this.client == 1)
		{	
			if(fight.within(this,8))
			{
				var effect = new Effect(this.x,this.y,false);
				game.rootScene.addChild(effect);
				this.remove();
				life += -1;
			}
		}
		if(this.life == false)
		{
			this.remove();
		}
	}
});
Effect = enchant.Class.create(Sprite,{
	initialize: function(x,y,hitflg){
		Sprite.call(this,16,16)
		this.x = x;
		this.y = y;
		this.image = game.assets[folder + files[3]];
		this.frame = 0;
		this.count = 0;
	},
	onenterframe: function(){
		if(this.count == 5)
		{
			game.rootScene.removeChild(this);
			this.remove();
		}
		else
		{
			this.count += 1;
			this.frame += 1;
		}
	}
});
Map = enchant.Class.create(Sprite,{
	initialize: function(x,y){
		Sprite.call(this,16,16);
		this.x = x;
		this.y = y;
		this.image = game.assets[folder + files[4]];
		this.frame = (Math.floor(Math.random() * 400) % 3) + 2;
	},
	onenterframe: function(){
		if(this.y > 400 - 16)
		{
			this.y = 0;
			this.frame = (Math.floor(Math.random() * 400) % 3) + 2;
		}
		else
		{
			this.y += 2;
		}
	}
});
Enemy = enchant.Class.create(Sprite,{
	initialize: function(x,y,type,id,ini,onenter,drop){
		Sprite.call(this,16,16);
		this.onenter = onenter;
		this.id = id;
		this.x = x;
		this.y = y;
		this.type = type;
		this.removeflag = false;
		this.level = 1;
		this.drop = drop;
		this.ini = ini;
		this.ini();
	},
	onenterframe: function(){
		this.onenter();
	}
});
Boss = enchant.Class.create(Sprite,{
	initialize: function(label,ini,onenter,id){
		Sprite.call(this,32,32);
		this.label = label;
		this.id = id;
		this.ini = ini;
		this.onenter = onenter;
		this.ini();
	},
	onenterframe: function(){
		this.onenter();
	}
});
Homing = enchant.Class.create(Sprite,{
	initialize: function(x,y,target,level,power,type){
		Sprite.call(this,16,16);
		this.x = x;
		this.y = y;
		this.target = target;
		this.addx = 0;
		this.addy = 0;
		this.level = level;
		this.power = power;
		this.frame = 4;
		this.targetid = this.target.id;
		this.removeflag = false;
		this.image = game.assets[folder + files[1]];
		this.type = type;
	},
	onenterframe: function()
	{	
		if(Enemy.collection.length > 0 && this.type == 0)
		{
			for(var i = 0, l = Enemy.collection.length; i < l; i++)
			{
				if(Enemy.collection[i].id == this.targetid)
				{
					this.target = Enemy.collection[i];
					this.removeflag = false;
					break;
				}
				else
				{
					this.removeflag = true;
				}
			}
		}
		else if(Boss.collection.length > 0 && this.type == 1)
		{
			for(var i = 0, l = Boss.collection.length; i < l; i++)
			{
				if(Boss.collection[i].id == this.targetid)
				{
					this.target = Boss.collection[i];
					this.removeflag = false;
					break;
				}
				else
				{
					this.removeflag = true;
				}
			}
		}
		else
		{
			this.removeflag = true;
		}
		if((this.x < 0) || (this.x > 400) || (this.y < 0) || (this.y > 400))
		{
			this.removeflag = true;
		}
		else
		{
			if(this.target.x < this.x)
			{
				this.addx = -8;
			}
			else if(this.target.x > this.x)
			{
				this.addx = 8;
			}
			else
			{
				this.addx = 0;
			}
			if(this.target.y < this.y)
			{
				this.addy = -8;
			}
			else if(this.target.y > this.y)
			{
				this.addy = 8;
			}
			else
			{
				this.addy = 0;
			}
			this.x += this.addx;
			this.y += this.addy;
		}
		if(this.removeflag == true)
		{
			this.remove();
		}
		for(var i = 0, l = Boss.collection.length; i < l; i++)
		{
			if(this.within(Boss.collection[i],16))
			{
				Boss.collection[i].label.life += -this.power;
				Boss.collection[i].level = this.level;
				score += Boss.collection[i].score;
				var effect = new Effect(this.x,this.y,false);
				game.rootScene.addChild(effect);
				this.remove();
			}
		}
		for(var i = 0, l = Enemy.collection.length; i < l; i++)
		{
			if(this.within(Enemy.collection[i],8))
			{
				Enemy.collection[i].life += -this.power;
				Enemy.collection[i].level = this.level;
				score += Enemy.collection[i].score;
				var effect = new Effect(this.x,this.y,false);
				game.rootScene.addChild(effect);
				this.remove();
			}
		}
	}
});
Option = enchant.Class.create(Sprite,{
	initialize: function(addx,addy,owner,reverse)
	{
		Sprite.call(this,16,16);
		this.image = game.assets[folder + files[7]];
		this.owner = owner;
		this.x = this.owner.x + addx;
		this.y = this.owner.y + addy;
		this.addx = addx;
		this.addy = addy;
		this.reverse = reverse;
		if(this.reverse)
		{
			this.rotate(180);
		}
	},
	onenterframe: function()
	{
		if(shoottime)
		{
			if(mode == 0)
			{
				for(var i = 0; i < 4; i++)
				{
					if(this.reverse)
					{
						var bullet = new Bullet((this.x - 12) + (8 * i),this.y + 8,0,(shootlevel + optionlevel + 1) * 10,(shootlevel + 1) * 15,2);
						game.rootScene.addChild(bullet);
					}
					else
					{
						var bullet = new Bullet((this.x - 12) + (8 * i),this.y - 8,0,(shootlevel + optionlevel + 1) * 10,(shootlevel + 1) * 15,0);
						game.rootScene.addChild(bullet);
					}
				}
			}
			else if(mode == 1)
			{
				if(this.reverse)
				{
					var beam = new Beam(this.x,this.y + 16,0,(beamlevel * optionlevel + 1) * 15,(beamlevel * 1),2);
					game.rootScene.addChild(beam);
				}	
				else
				{
					var beam = new Beam(this.x,this.y - 16,0,(beamlevel * optionlevel + 1) * 15,(beamlevel * 1),0);
					game.rootScene.addChild(beam);
				}
			}
			else if(mode == 3)
			{
				if(Boss.collection.length > 0)
				{
					for(var i = 0; i < Boss.collection.length; i++)
					{
						var homing = new Homing(this.x,this.y,Boss.collection[i],(hominglevel + optionlevel + 1) + 10,(optionlevel + 1),1);	
						game.rootScene.addChild(homing);
					}
				}
				else if(Enemy.collection.length > 0)
				{
					for(var i = 0; i < Enemy.collection.length; i++)
					{
						var homing = new Homing(this.x,this.y,Enemy.collection[i],(hominglevel + optionlevel + 1) + 10,(optionlevel + 1),0);	
						game.rootScene.addChild(homing);
					}
				}
			}
		}
		this.x = this.owner.x + this.addx;
		this.y = this.owner.y + this.addy;
	}
});
Item = enchant.Class.create(Sprite,{
	initialize: function(x,y,type,mode){
		Sprite.call(this,16,16);
		this.image = game.assets[folder + files[11]];
		this.x = x;
		this.y = y;
		this.addx = 0;
		this.addy = 1;
		this.type = type;
		this.score = 10000;
		this.removeflag = false;
		this.frame = this.type;
		this.mode = mode;
	},
	onenterframe: function(){
		if((this.x < 0) || (this.x > 400) || (this.y < 0) || (this.y > 400))
		{
			this.removeflag = true;
		}
		else
		{
			if(this.mode == 1)
			{
				if(fight.x < this.x)
				{
					this.addx = -1;
				}
				else if(fight.x > this.x)
				{
					this.addx = 1;
				}
				else
				{
					this.addx = 0;
				}
				if(fight.y < this.y)
				{
					this.addy = -1;
				}
				else if(fight.y > this.y)
				{
					this.addy = 1;
				}
				else
				{
					this.addy = 0;
				}
				this.x += this.addx;
				this.y += this.addy;
			}
			if(fight.within(this,16))
			{
				switch(this.type)
				{
					case 0:
					{
						if(shootlevel < 10)
						{
							shootlevel += 1;
						}
						break;
					}
					case 1:
					{
						if(beamlevel < 10)
						{
							beamlevel += 1;
						}
						break;
					}
					case 2:
					{
						if(bomblevel < 10)
						{
							bomblevel += 1;
						}
						break;
					}
					case 3:
					{
						if(hominglevel < 10)
						{
							hominglevel += 1;
						}
						break;
					}
					case 4:
					{
						addOption();
						break;
					}
					case 5:
					{
						lifemax += 1;
						life = lifemax;
						break;
					}
					case 6:
					{
						bomb += 1;
						break;
					}
				}
				score += this.score;
				this.removeflag = true;
			}
			else
			{
				this.x += this.addx;
				this.y += this.addy;
			}
		}
		if(this.removeflag == true)
		{
			this.remove();
		}
	}
});
