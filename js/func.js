function allreset(mode)
{
	if(score > clearscore)
	{
		mode = true;
	}
	for(var i = 0, l = Enemy.collection.length; i < l; i++)
	{
		Enemy.collection[0].remove();
	}
	for(var i = 0, l = Bullet.collection.length; i < l; i++)
	{
		Bullet.collection[0].remove();
	}
	for(var i = 0, l = Beam.collection.length; i < l; i++)
	{
		Beam.collection[0].remove();
	}
	for(var i = 0, l = Effect.collection.length; i < l; i++)
	{
		Effect.collection[0].remove();
	}
	for(var i = 0, l = Item.collection.length; i < l; i++)
	{
		Item.collection[0].remove();
	}
	for(var i = 0, l = Boss.collection.length; i < l; i++)
	{
		Boss.collection[0].label.delete = true;
		Boss.collection[0].remove();
	}
	game.input.a = false;
	game.input.b = false;
	game.input.right = false;
	game.input.left = false;
	game.input.up = false;
	game.input.down = false;
	spawnwait = 1;
	spawnflag = true;
	destroycount = 0;
	stageclearflag = false;
	time = -1;
	timeindex = 0;
	var text = "stage clear!!" + "\n" + "score = " + Math.floor(score);
	if(mode == true)
	{
		text = "game clear!!" + "\n" + "score = " + Math.floor(score);
		life = 5;
		lifemax = 5;
		bomb = 0;
		score = firstscore;
		optionlevel = 0;
		shootlevel = 1;
		beamlevel = 1;
		bomblevel = 1;
		hominglevel = 1;
		level = 1;
		mode = 0;
		stage = defaultstage;
		for(var i = 0, l = Option.collection.length; i < l; i++)
		{
			Option.collection[0].remove();
		}
	}
	return text;
}
function BossCreate(type,endflag,life,next)
{
	switch(type)
	{
		case 0:
		{
			bosslife = new Label("Boss life:");
			bosslife.x = 250;
			bosslife.y = 452 - 16;
			bosslife.color = "#0000ff";
			bosslife.life = life;
			bosslife.maxlife = life;
			bosslife.endflag = endflag;
			bosslife.delete = false;
			bosslife.nextstage = next;
			bosslife.addEventListener(enchant.Event.ENTER_FRAME,function(){
				if(this.life <= 0)
				{
					if(this.endflag == true)
					{
						stageclearflag = true;
						stage = this.nextstage;
						this.remove();
					}
					else
					{
						time = timeline[timeindex][0] - 100;
						this.remove();
					}
				}
				else if(this.delete == true)
				{
					this.remove();
				}
				else
				{
					this.text = "Boss life:" + Math.floor((this.life / this.maxlife) * 100) + "%" + "<br/>" + this.life + "/" + this.maxlife;
				}
			});
			var boss = new Boss(bosslife,initializeBounceBoss,onenterframeBounceBoss,bossid);
			game.rootScene.addChild(bosslife);
			game.rootScene.addChild(boss);
			bossid += 1;
			break;
		}
		case 1:
		{
			bosslife = new Label("Boss life:");
			bosslife.x = 250;
			bosslife.y = 452 - 16;
			bosslife.color = "#0000ff";
			bosslife.life = life;
			bosslife.maxlife = life;
			bosslife.endflag = endflag;
			bosslife.delete = false;
			bosslife.nextstage = next;
			bosslife.addEventListener(enchant.Event.ENTER_FRAME,function(){
				if(this.life <= 0)
				{
					if(this.endflag == true)
					{
						stageclearflag = true;
						stage = this.nextstage;
						this.remove();
					}
					else
					{
						time = timeline[timeindex][0] - 100;
						this.remove();
					}
				}
				else if(this.delete == true)
				{
					this.remove();
				}
				else
				{
					this.text = "Boss life:" + Math.floor((this.life / this.maxlife) * 100) + "%" + "<br/>" + this.life + "/" + this.maxlife;
				}
			});
			for(var i = 0; i < 2; i++)
			{
				var masterA = new Boss(bosslife,initializeBoxBossMasterA,onenterframeBoxBossMasterA,bossid);
				bossid += 1;
				var slaveA = new Boss(bosslife,initializeBoxBossSlaveA,onenterframeBoxBossSlaveA,bossid);
				bossid += 1;
				slaveA.master = masterA;
				game.rootScene.addChild(masterA);
				game.rootScene.addChild(slaveA);
			}
			for(var i = 0; i < 2; i++)
			{
				var masterB = new Boss(bosslife,initializeBoxBossMasterB,onenterframeBoxBossMasterB,bossid);
				bossid += 1;
				var slaveB = new Boss(bosslife,initializeBoxBossSlaveB,onenterframeBoxBossSlaveB,bossid);
				bossid += 1;
				slaveB.master = masterB;
				game.rootScene.addChild(masterB);
				game.rootScene.addChild(slaveB);
			}
			game.rootScene.addChild(bosslife);
			break;
		}
	}
}
function addOption()
{
	if(optionlevel < 10)
	{
		switch(optionlevel)
		{
			case 0:
			{
				var optionA = new Option(-32,0,fight,false);
				var optionB = new Option(32,0,fight,false);
				game.rootScene.addChild(optionA);
				game.rootScene.addChild(optionB);
				optionlevel += 1;
				break;
			}
			case 2:
			{
				var optionA = new Option(-16,-12,fight,false);
				var optionB = new Option(16,-12,fight,false);
				game.rootScene.addChild(optionA);
				game.rootScene.addChild(optionB);
				optionlevel += 1;
				break;
			}
			case 4:
			{
				var optionA = new Option(-16,12,fight,true);
				var optionB = new Option(16,12,fight,true);
				game.rootScene.addChild(optionA);
				game.rootScene.addChild(optionB);
				optionlevel += 1;
				break;
			}
			default:
			{
				optionlevel += 1;
				break;
			}
		}
	}
}
function shootFunc(owner)
{
	switch(shootlevel)
	{
		case 0:
		case 1:
		{
			var bullet = new Bullet(owner.x,owner.y - 8,0,(shootlevel + 1) * 10,(shootlevel + 1) * 15,0);
			game.rootScene.addChild(bullet);
			break;
		}
		case 2:
		{
			for(var i = 0;i < 2;i++)
			{
				var bullet = new Bullet((owner.x - 4) + (i * 8),owner.y - 8,0,(shootlevel + 1) * 10,(shootlevel + 1) * 15,0);
				game.rootScene.addChild(bullet);
			}
			var bullet = new Bullet(owner.x,owner.y + 8,0,(shootlevel + 1) * 10,(shootlevel + 1) * 15,2);
			game.rootScene.addChild(bullet);
			break;
		}
		case 3:
		case 4:
		{
			for(var i = 0;i < 3;i++)
			{
				var bullet = new Bullet((owner.x - 8) + (i * 8),owner.y - 8,0,(shootlevel + 1) * 10,(shootlevel + 1) * 15,0);
				game.rootScene.addChild(bullet);
			}
			for(var i = 0;i < 2;i++)
			{
				var bullet = new Bullet((owner.x - 4) + (i * 8),owner.y + 8,0,(shootlevel + 1) * 10,(shootlevel + 1) * 15,2);
				game.rootScene.addChild(bullet);
			}
			game.rootScene.addChild(bullet);
			break;
		}
		case 5:
		case 6:
		{
			for(var i = 0;i < 5;i++)
			{
				var bullet = new Bullet((owner.x - 16) + (i * 8),owner.y - 8,0,(shootlevel + 1) * 10,(shootlevel + 1) * 15,0);
				game.rootScene.addChild(bullet);
			}
			for(var i = 0;i < 3;i++)
			{
				var bullet = new Bullet((owner.x - 8) + (i * 8),owner.y + 8,0,(shootlevel + 1) * 10,(shootlevel + 1) * 15,2);
				game.rootScene.addChild(bullet);
			}
			break;
		}
		case 7:
		case 8:
		{
			for(var i = 0;i < 5;i++)
			{
				var bullet = new Bullet((owner.x - 16) + (i * 8),owner.y - 8,0,(shootlevel + 1) * 10,(shootlevel + 1) * 15,0);
				game.rootScene.addChild(bullet);
			}
			for(var i = 0;i < 5;i++)
			{
				var bullet = new Bullet((owner.x - 16) + (i * 8),owner.y + 8,0,(shootlevel + 1) * 10,(shootlevel + 1) * 15,2);
				game.rootScene.addChild(bullet);
			}
			break;
		}
		case 9:
		case 10:
		{
			for(var i = 0;i < 5;i++)
			{
				var bullet = new Bullet((owner.x - 16) + (i * 8),owner.y - 8,0,(shootlevel + 1) * 10,(shootlevel + 1) * 15,0);
				game.rootScene.addChild(bullet);
			}
			for(var i = 0;i < 5;i++)
			{
				var bullet = new Bullet((owner.x - 16) + (i * 8),owner.y + 8,0,(shootlevel + 1) * 10,(shootlevel + 1) * 15,2);
				game.rootScene.addChild(bullet);
			}
			break;
		}
	}
}
function initializeWallEnemy()
{
	switch(this.type)
	{
		case 0:
		{
			this.image = game.assets[folder + files[8]];
			this.life = 1000;
			this.score = 1;
			this.mode = 0;
			this.addy = 1;
			break;
		}
		case 1:
		{
			this.image = game.assets[folder + files[9]];
			this.frame = 5;
			this.life = 2000;
			this.score = 1;
			this.mode = 1;
			this.addy = 1;
			break;
		}
		case 2:
		{
			this.image = game.assets[folder + files[10]];
			this.frame = 6;
			this.life = 10000;
			this.score = 1;
			this.mode = 1;
			this.addy = 1;
			break;
		}
	}
}
function onenterframeWallEnemy()
{
	if((this.x < 0) || (this.x > 400) || (this.y < 0) || (this.y > 400))
	{
		game.rootScene.removeChild(this);
		this.remove();
	}
	else
	{
		this.y += this.addy;
	}
	if(fight.within(this,16))
	{
		var effect = new Effect(this.x,this.y,false);
		game.rootScene.addChild(effect);
		life += -1;
	}
	if(this.life <= 0)
	{
		score += this.score * this.level * this.level;
		var effect = new Effect(this.x,this.y,false);
		game.rootScene.addChild(effect);
		if(this.drop > -1)
		{
			var item = new Item(this.x,this.y,this.drop,1);
			game.rootScene.addChild(item)
		}
		game.rootScene.removeChild(this);
		this.remove();
	}
	if(time % 4 == 0)
	{
		if(this.frame == 5)
		{
			this.frame = 0;
		}
		else
		{
			this.frame += 1;
		}
	}
}
function initializeHomingEnemy()
{
	switch(this.type)
	{
		case 0:
		{
			this.image = game.assets[folder + files[2]];
			this.life = 100;
			this.frame = 2;
			this.score = 100;
			this.addx = 0;
			this.addy = 0;
			break;
		}
		case 1:
		{
			this.image = game.assets[folder + files[2]];
			this.life = 200;
			this.frame = 3;
			this.score = 200;
			this.addx = 0;
			this.addy = 0;
			break;
		}
	}
}
function onenterframeHomingEnemy()
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
	if(fight.within(this,8))
	{
		var effect = new Effect(this.x,this.y,false);
		game.rootScene.addChild(effect);
		this.remove();
		life += -1;
	}
	if(this.life < 0)
	{
		score += this.score * this.level;
		var effect = new Effect(this.x,this.y,false);
		game.rootScene.addChild(effect);
		if(this.drop > -1)
		{
			var item = new Item(this.x,this.y,this.drop,1);
			game.rootScene.addChild(item)
		}
		game.rootScene.removeChild(this);
		this.remove();
	}
}
function initializeDownEnemy()
{
	switch(this.type)
	{
		case 0:
		{
			this.image = game.assets[folder + files[2]];
			this.life = 100;
			this.frame = 0;
			this.score = 100;
			this.addx = 0;
			this.addy = 2;
			break;
		}
		case 1:
		{
			this.image = game.assets[folder + files[2]];
			this.life = 200;
			this.frame = 1;
			this.score = 200;
			this.addx = 0;
			this.addy = 2;
			break;
		}
	}
}
function onenterframeDownEnemy()
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
	if(fight.within(this,8))
	{
		var effect = new Effect(this.x,this.y,false);
		game.rootScene.addChild(effect);
		this.remove();
		life += -1;
	}
	if(this.life < 0)
	{
		score += this.score * this.level;
		var effect = new Effect(this.x,this.y,false);
		game.rootScene.addChild(effect);
		if(this.drop > -1)
		{
			var item = new Item(this.x,this.y,this.drop,1);
			game.rootScene.addChild(item)
		}
		game.rootScene.removeChild(this);
		this.remove();
	}
}
function initializeBounceBoss()
{
	this.x = Math.floor(Math.random() * 400);
	this.y = Math.floor(Math.random() * 400);
	this.addx = 4;
	this.addy = -4;
	this.image = game.assets[folder + files[6]];
	this.level = 1;
	this.score = 100;
	this.random = 0;
	this.addlevel = 0;
	this.sleepflag = false;
	this.sleeptime = 0;
	this.time = 0;
}
function onenterframeBounceBoss()
{
	if(this.age % 200 == 0 && this.sleepflag == false)
	{
		this.sleepflag = true;
	}
	if(this.sleepflag == true)
	{
		if(this.sleeptime < 60)
		{
			this.sleeptime += 1;
			for(var i = 0; i < 2; i++)
			{
				var bullet = new Bullet((this.x - 4) + (8 * i) + 8,this.y - 8,1,40,15,0);
				game.rootScene.addChild(bullet);
			}
			for(var i = 0; i < 2; i++)
			{
				var bullet = new Bullet(this.x + 24,(this.y - 4) + (8 * i) + 8,1,40,15,1);
				game.rootScene.addChild(bullet);
			}
			for(var i = 0; i < 2; i++)
			{
				var bullet = new Bullet((this.x - 4) + (8 * i) + 8,this.y + 24,1,40,15,2);
				game.rootScene.addChild(bullet);
			}
			for(var i = 0; i < 2; i++)
			{
				var bullet = new Bullet(this.x - 8,(this.y - 4) + (8 * i) + 8,1,40,15,3);
				game.rootScene.addChild(bullet);
			}
			var bulletNE = new Bullet(this.x + 24,this.y - 8,1,40,15,4);
			var bulletSE = new Bullet(this.x + 24,this.y + 24,1,40,15,5);
			var bulletSW = new Bullet(this.x - 8,this.y + 24,1,40,15,6);
			var bulletNW = new Bullet(this.x -8,this.y - 8,1,40,15,7);
			game.rootScene.addChild(bulletNE);
			game.rootScene.addChild(bulletSE);
			game.rootScene.addChild(bulletSW);
			game.rootScene.addChild(bulletNW);
		}
		else
		{
			this.sleepflag = false;
			this.sleeptime = 0;
		}
	}
	else
	{
		this.x += this.addx;
		this.y += this.addy;
	}
	this.random = Math.floor(Math.random() * 5)
	if(this.y > 400 - 32)
	{
		this.addy = -4 - this.addlevel;
		if(this.random == 0)
		{
			this.addy = this.addy * 2;
		}
		else if(this.random == 1)
		{
			this.addy = this.addy * 4;
		}
	}
	else if(this.y < 0)
	{
		this.addy = 4 + this.addlevel;
		if(this.random == 0)
		{
			this.addy = this.addy * 2;
		}
		else if(this.random == 1)
		{
			this.addy = this.addy * 4;
		}
	}
	if(this.x > 400 - 32)
	{
		this.addx = -4 - this.addlevel;
		if(this.random == 0)
		{
			this.addx = this.addx * 4;
		}
		else if(this.random == 1)
		{
			this.addx = this.addx * 2;
		}
	}
	else if(this.x < 0)
	{
		this.addx = 4 + this.addlevel;
		if(this.random == 0)
		{
			this.addx = this.addx * 4;
		}
		else if(this.random == 1)
		{
			this.addx = this.addx * 2;
		}
	}
	if(this.label.life <= 0)
	{
		score += this.score * this.level * this.level;
		this.remove();
	}
	if(fight.within(this,16))
	{
		var effect = new Effect(this.x,this.y,false);
		game.rootScene.addChild(effect);
		life += -1;
	}
	if(Math.floor((this.label.life / this.label.maxlife) * 100) < 20)
	{
		this.addlevel = -2;
		this.label.life += this.label.maxlife / 1000;
		for(var i = 0; i < 2; i++)
		{
			var bullet = new Bullet((this.x - 4) + (8 * i) + 8,this.y - 8,1,40,15,0);
			game.rootScene.addChild(bullet);
		}
		for(var i = 0; i < 2; i++)
		{
			var bullet = new Bullet(this.x + 24,(this.y - 4) + (8 * i) + 8,1,40,15,1);
			game.rootScene.addChild(bullet);
		}
		for(var i = 0; i < 2; i++)
		{
			var bullet = new Bullet((this.x - 4) + (8 * i) + 8,this.y + 24,1,40,15,2);
			game.rootScene.addChild(bullet);
		}
		for(var i = 0; i < 2; i++)
		{
			var bullet = new Bullet(this.x - 8,(this.y - 4) + (8 * i) + 8,1,40,15,3);
			game.rootScene.addChild(bullet);
		}
		var bulletNE = new Bullet(this.x + 24,this.y - 8,1,40,15,4);
		var bulletSE = new Bullet(this.x + 24,this.y + 24,1,40,15,5);
		var bulletSW = new Bullet(this.x - 8,this.y + 24,1,40,15,6);
		var bulletNW = new Bullet(this.x -8,this.y - 8,1,40,15,7);
		game.rootScene.addChild(bulletNE);
		game.rootScene.addChild(bulletSE);
		game.rootScene.addChild(bulletSW);
		game.rootScene.addChild(bulletNW);
	}
	else if(Math.floor((this.label.life / this.label.maxlife) * 100) < 30)
	{
		this.addlevel = 0;
	}
	else if(Math.floor((this.label.life / this.label.maxlife) * 100) < 50)
	{
		this.addlevel = 6;
	}
	else if(Math.floor((this.label.life / this.label.maxlife) * 100) < 100)
	{
		this.addlevel = 0;
	}
	if(this.label.life > this.label.maxlife)
	{
		this.label.life = this.label.maxlife;
	}
	if(this.age > 5000)
	{
		this.label.life = 0;
	}
}
function initializeBoxBossMasterA()
{
	this.x = Math.floor(Math.random() * 300) + 50;
	this.y = 0;
	this.addx = ((Math.floor(Math.random() * 400) % 4) + 2) * 2;
	this.addy = 0;
	this.image = game.assets[folder + files[6]];
	this.level = 1;
	this.score = 100;
	this.random = 0;
	this.addlevel = 0;
	this.sleepflag = false;
	this.sleeptime = 0;
	this.shootflag = false;
	this.shoottime = 0;
	this.time = 0;
	this.frame = 1;
}
function onenterframeBoxBossMasterA()
{
	if(this.label.life <= 0)
	{
		score += this.score * this.level * this.level;
	}
	else if(this.age > 5000)
	{
		this.label.life = 0;
		this.remove();
	}
	if(this.x < 0)
	{
		this.addx *= -1;
	}
	else if(this.x > 400 - 32)
	{
		this.addx *= -1;
	}
	if(this.age % 200 == 0 && this.sleepflag == false)
	{
		this.sleepflag = true;
	}
	if(this.sleepflag)
	{
		if(this.sleeptime < 10)
		{
			this.shootflag = false;
			this.sleeptime += 1;
		}
		else if(this.sleeptime < 40)
		{
			this.shootflag = true;
			this.sleeptime += 1;
		}
		else if(this.sleeptime < 50)
		{
			this.shootflag = false;
			this.sleeptime += 1;
		}
		else
		{
			this.sleepflag = false;
			this.shootflag = false;
			this.sleeptime = 0;
		}
		if(this.x < 0)
		{
			this.x = Math.floor(Math.random() * 300) + 50;
		}
		if(this.x > 400 - 32)
		{
			this.x = Math.floor(Math.random() * 300) + 50;
		}
	}
	else
	{
		this.x += this.addx;
	}
	if(this.shootflag)
	{
		var beam = new Beam(this.x + 8,this.y + 32,1,50,20,2);
		game.rootScene.addChild(beam); 
	}
	if(fight.within(this,16))
	{
		var effect = new Effect(this.x,this.y,false);
		game.rootScene.addChild(effect);
		life += -1;
	}
}
function initializeBoxBossMasterB()
{
	this.x = 0;
	this.y = Math.floor(Math.random() * 300) + 50;
	this.addx = 0;
	this.addy = ((Math.floor(Math.random() * 400) % 4) + 2) * 2;
	this.image = game.assets[folder + files[6]];
	this.level = 1;
	this.score = 100;
	this.random = 0;
	this.addlevel = 0;
	this.sleepflag = false;
	this.sleeptime = 0;
	this.time = 0;
	this.frame = 1;
}
function onenterframeBoxBossMasterB()
{
	if(this.label.life <= 0)
	{
		score += this.score * this.level * this.level;
	}
	else if(this.age > 5000)
	{
		this.label.life = 0;
		this.remove();
	}
	if(this.y < 0)
	{
		this.addy *= -1;
	}
	else if(this.y > 400 - 32)
	{
		this.addy *= -1;
	}
	if(this.age % 200 == 0 && this.sleepflag == false)
	{
		this.sleepflag = true;
	}
	if(this.sleepflag)
	{
		if(this.sleeptime < 10)
		{
			this.shootflag = false;
			this.sleeptime += 1;
		}
		else if(this.sleeptime < 40)
		{
			this.shootflag = true;
			this.sleeptime += 1;
		}
		else if(this.sleeptime < 50)
		{
			this.shootflag = false;
			this.sleeptime += 1;
		}
		else
		{
			this.sleepflag = false;
			this.shootflag = false;
			this.sleeptime = 0;
		}
		if(this.y < 0)
		{
			this.y = Math.floor(Math.random() * 300) + 50;
		}
		if(this.y > 400 - 32)
		{
			this.y = Math.floor(Math.random() * 300) + 50;
		}
	}
	else
	{
		this.y += this.addy;
	}
	if(this.shootflag)
	{
		var beam = new Beam(this.x + 32,this.y + 8,1,50,20,1);
		game.rootScene.addChild(beam); 
	}
	if(fight.within(this,16))
	{
		var effect = new Effect(this.x,this.y,false);
		game.rootScene.addChild(effect);
		life += -1;
	}
}
function initializeBoxBossSlaveA()
{
	this.x = Math.floor(Math.random() * 400);
	this.y = 400 - 32;
	this.image = game.assets[folder + files[6]];
	this.level = 1;
	this.score = 100;
	this.addlevel = 0;
	this.frame = 1;
}
function onenterframeBoxBossSlaveA()
{
	if(this.label.life <= 0)
	{
		score += this.score * this.level * this.level;
	}
	else if(this.age > 5000)
	{
		this.label.life = 0;
		this.remove();
	}
	else
	{
		this.x = this.master.x;
	}
	if(this.master.shootflag == true)
	{
		var beam = new Beam(this.x + 8,this.y - 16,1,50,20,0);
		game.rootScene.addChild(beam); 
	}
	if(fight.within(this,16))
	{
		var effect = new Effect(this.x,this.y,false);
		game.rootScene.addChild(effect);
		life += -1;
	}
}
function initializeBoxBossSlaveB()
{
	this.x = 400 - 32;
	this.y = Math.floor(Math.random() * 400);
	this.image = game.assets[folder + files[6]];
	this.level = 1;
	this.score = 100;
	this.addlevel = 0;
	this.frame = 1;
}
function onenterframeBoxBossSlaveB()
{
	if(this.label.life <= 0)
	{
		score += this.score * this.level * this.level;
	}
	else if(this.age > 5000)
	{
		this.label.life = 0;
		this.remove();
	}
	else
	{
		this.y = this.master.y;
	}
	if(this.master.shootflag == true)
	{
		var beam = new Beam(this.x - 16,this.y + 8,1,50,20,3);
		game.rootScene.addChild(beam); 
	}
	if(fight.within(this,16))
	{
		var effect = new Effect(this.x,this.y,false);
		game.rootScene.addChild(effect);
		life += -1;
	}
}