inlets = 1;
outlets = 1;

function Control(v, p, b, pg) {
	this.v = v;
	this.p = p;
	this.b = b;
	this.pg = pg;
	this.event = function() {}
	this.output = function(v) { return v }
    this.get = function() {
        return this.v;
    }
    this.set = function(input) {
        this.v = input;
        this.event(this.v)
    }
}

Control.prototype.draw = function(g) {}
Control.prototype.look = function() {}

var Toggle = function(v, p, b, pg) {
	Control.call(this, v, p, b, pg);
}

Toggle.prototype = Object.create(Control.prototype);

Toggle.prototype.draw = function(g) {
	if(this.pg()) {	
		//post(this.p[0], this.p[1], this.b[this.v])
		g.led(this.p[0], this.p[1], this.b[this.v]);
	}
}
	
Toggle.prototype.look = function(x, y, z) {
	if(this.pg()) {
		if(x == this.p[0] && y == this.p[1]) {
			if(z == 0) {
				var last = this.v;
				this.v = Math.abs(this.v - 1)
				this.event(this.v, last);
				
				return 1;
			}
		}
	}
}

Toggle.prototype.set = function(input) {
    this.v = input;
    this.event(this.v, null)
}

var Momentary = function(v, p, b, pg) {
	Toggle.call(this, v, p, b, pg);
}

Momentary.prototype = Object.create(Toggle.prototype);

Momentary.prototype.look = function(x, y, z) {
	if(this.pg()) {
		if(x == this.p[0] && y == this.p[1]) {
			var v = z
			this.event(v);
			this.v = v;
			
			return 1;
		}
	}
}

var Value = function(v, p, b, pg) {
	Control.call(this, v, p, b, pg);
}

Value.prototype = Object.create(Control.prototype);

Value.prototype.draw = function(g) {
	if(this.pg()) {
		var bb = this.b[0].slice();
		bb[this.v] = this.b[1];
		
		if(this.p[0].length) {
			for(var i = 0; i < this.p[0].length; i++) {
				g.led(this.p[0][i], this.p[1], bb[i]);
			}
		} 
		else {
			
			for(var i = 0; i < this.p[1].length; i++) {
				g.led(this.p[0], this.p[1][i], bb[i]);
			}
		}
	}
}

Value.prototype.look = function(x, y, z) {
	if(this.pg()) {
		if(this.p[0].length) {
			if(y == this.p[1]) {
				for(var i = 0; i < this.p[0].length; i++) {
					if(this.p[0][i] == x && z == 1) {
                        var last = this.v;
						var v = i;
						this.event(v, last);
						this.v = v;
						
						return 1;
					}
				}
			}
		}
		else {
			if(x == this.p[0]) {
				for(var i = 0; i < this.p[1].length; i++) {
					if(this.p[1][i] == y && z == 1) {
                        var last = this.v;
						var v = i;
						this.event(v, last);
						this.v = v;
						
						return 1;
					}
				}
			}
		}
	}
}

Toggle.prototype.set = function(input) {
    this.v = input;
    this.event(this.v, null)
}

var Toggles = function(v, p, b, pg) {
	Control.call(this, v, p, b, pg);
}

Toggles.prototype = Object.create(Control.prototype);

Toggles.prototype.draw = function(g) { 
	if(this.pg()) {
		var bb = this.b[0].slice();
		
		for(var i = 0; i < this.v.length; i++) {
			bb[this.v[i]] = this.b[1];
		}
		
		if(this.p[0].length) {
			for(var i = 0; i < this.p[0].length; i++) {
				g.led(this.p[0][i], this.p[1], bb[i]);
			}
		} 
		else {
			for(var i = 0; i < this.p[1].length; i++) {
				g.led(this.p[0], this.p[1][i], bb[i]);
			}
		}
	}
}

Toggles.prototype.look = function(x, y, z) {
	if(this.pg()) {
		if(this.p[0].length) {
			if(y == this.p[1]) {
				for(var i = 0; i < this.p[0].length; i++) {
					if(this.p[0][i] == x && z == 1) {
						var last = this.v.slice();
						var added = -1;
						var removed = -1;
						
						var thing = this.v.indexOf(i);
						
						if(thing == -1) {
							this.v.push(i);
							this.v.sort(function(a, b) { return a - b; });
							
							var added = i;
						}
						else {
							this.v.splice(thing, 1);
							
							var removed = i;
						}
						
						this.event(this.v, last, added, removed);
						
						return 1;
					}
				}
			}
		}
		else {
			if(x == this.p[0]) {
				for(var i = 0; i < this.p[1].length; i++) {
					if(this.p[1][i] == y && z == 1) {
						var last = this.v.slice();
						var added = -1;
						var removed = -1;
						
						var thing = this.v.indexOf(i);
						
						if(thing == -1) {
							this.v.push(i);
							this.v.sort(function(a, b) { return a - b; });
							
							added = i;
						}
						else {
							this.v.splice(thing, 1);
							
							removed = i;
						}
						
						this.event(this.v, last, added, removed);
						
						return 1;
					}
				}
			}
		}
	}
}

Toggles.prototype.set = function(input) {
    this.v = input;
    this.event(this.v, null, null, null)
}

var Momentaries = function(v, p, b, pg) {
	Toggles.call(this, v, p, b, pg);
}

Momentaries.prototype = Object.create(Toggles.prototype);

Momentaries.prototype.look = function(x, y, z) {
	if(this.pg()) {
		if(this.p[0].length) {
			if(y == this.p[1]) {
				for(var i = 0; i < this.p[0].length; i++) {
					if(this.p[0][i] == x) {
						var last = [];
						if(this.v) last = this.v.slice();
						var added = -1;
						var removed = -1;
						
						if(z == 1 && this.v.indexOf(i) == -1) {
							this.v.push(i);
							this.v.sort(function(a, b) { return a - b; });
							
							added = i;
						}
						else {
							this.v.splice(this.v.indexOf(i), 1);
							
							removed = i;
						}
						
						this.event(this.v, last, added, removed);
						
						return 1;
					}
				}
			}
		}
		else {
			if(x == this.p[0]) {
				for(var i = 0; i < this.p[1].length; i++) {
					if(this.p[1][i] == y && z == 1) {
						var last = this.v.slice();
						var added = -1;
						var removed = -1;
						
						if(z == 1 && this.v.indexOf(i) == -1) {
							this.v.push(i);
							this.v.sort(function(a, b) { return a - b; });
							
							added = i;
						}
						else {
							this.v.splice(this.v.indexOf(i), 1);
							
							removed = i;
						}
						
						this.event(this.v, last, added, removed);
						
						return 1;
					}
				}
			}
		}
	}
}

Momentaries.prototype.set = function(input) {
    this.v = input;
    this.event(this.v, null, null, null)
}

var Fader = function(v, p, b, pg) {
	Value.call(this, v, p, b, pg);
	
	this.pp = p[0].slice();
	this.bb = b[0];
	
	//var value = new Value(v, p, b, pg);
	this.p[0] = [];
	this.b[0] = [];
	
	for(var i = this.pp[0]; i <= this.pp[1]; i++) {
		this.p[0][i - this.pp[0]] = i;
		this.b[0][i] = this.bb;
	}
}

Fader.prototype = Object.create(Value.prototype);

Fader.prototype.draw = function(g) {
	if(this.pg()) {
		if(this.p[0].length) {
			for(var i = 0; i < this.p[0].length; i++) {
				if(i < this.v) this.b[0][i] = this.b[2];
				else this.b[0][i] = this.bb;
			}
		}
		else {
			for(var i = 0; i < this.p[1].length; i++) {
				if(i < this.v) this.b[0][i] = this.b[2];
				else this.b[0][i] = this.bb;
			}
		}
		Value.prototype.draw.call(this, g);
	}
}

var Crossfader = function(v, p, b, pg) {
	Fader.call(this, v, p, b, pg);
}

Crossfader.prototype = Object.create(Fader.prototype);

Crossfader.prototype.draw = function(g) {
	if(this.pg()) {
		if(this.p[0].length) {
			for(var i = 0; i < this.p[0].length; i++) {
				if((i > this.v && i <= Math.round(this.p[0].length - 1) / 2) || (i < this.v && i >= Math.round(this.p[0].length - 1) / 2)) this.b[0][i] = this.b[2];
				else this.b[0][i] = this.bb;
			}
		}
		else {
			for(var i = 0; i < this.p[1].length; i++) {
				if((i > this.v && i <= this.p[0].length / 2) || (i < this.v && i >= this.p[0].length / 2)) this.b[0][i] = this.b[2];
				else this.b[0][i] = this.bb;
			}
		}
		Value.prototype.draw.call(this, g);
	}
}

var Pattern = function(v, p, b, pg, f, index) {
    //v, time, r, pattern
    
	Toggle.call(this, v, p, b, pg);
	
	this.ispattern = 1;

	var time = 0;
	var r = 0;
	
	var pattern = {}
		
	var task = new Task(function() {
		if(time > 0) {
			for(t in pattern) {
				if((arguments.callee.task.iterations % time) == t) {
                    
                    //var args = JSON.parse(JSON.stringify(pattern[t]));
                    var args = [];
                    
                    for(var i = 0; i < pattern[t].length; i++) {
                        args[i] = pattern[t][i]
                    }
                    
                    post("update4", JSON.stringify(pattern[t]));
//                    
                    if(index != null) args[pattern[t].length] = index;
                    
					f.apply(null, args); //---------
				}
			}
		}
	}, this);
	task.interval = 1;
	
	this.event = function(v, last) {
		if(last == 2) { //v=0 r=0
			this.v = 0;
		}
		else if(v == 0 && last == 1) { //v=2
			this.v = 2;
		}
		
        if(this.v == 0) {
            time = 0;
			r = 0;
			pattern = {}
			task.cancel();
        }
        else if(this.v == 2) {
            time == 0 ? time = task.iterations : time = time;
			r = 0;
			task.cancel();
			task.repeat();
        }
        else if(this.v == 1) {
            r = 1;
			task.repeat();
        }
        
		this.draw(g);
	}
	
	this.store = function(h, i, j, k, v) {
		if(r) {
            post("update3", task.iterations, JSON.stringify(arguments));
            
			if(arguments.length = 5) {
                var v_copy;
                
                if(typeof v === 'object' && v !== null) {
                    v_copy = JSON.parse(JSON.stringify(v))
                } else v_copy = v;
                
                pattern[task.iterations] = [ h, i, j, k, v_copy ];
            } 
            else pattern[task.iterations] = [ h, i, j, k ];
		}
	}
    
    this.get = function() {
        return { v: this.v, time: time, pattern: pattern }
    }
    
    this.set = function(input) {
        this.v = input.v;
        time = input.time;
        pattern = input.pattern;
        
        this.event(this.v, null);
    }
}

Pattern.prototype = Object.create(Toggle.prototype);

//var Recorder = function(v, p, b, pg) {
//	Toggle.call(this, v, p, b, pg);
//    
//    this.v = [ v, 0 ];
//    
//    this.timer = function() {
//        
//    }
//}
//
//Recorder.prototype = Object.create(Toggle.prototype);
//
//Recorder.prototype.look = function(x, y, z) {
//	if(this.pg()) {
//		if(x == this.p[0] && y == this.p[1]) {
//			if(z == 0) {
//                
//				var last = this.v;
//				this.v[0] = Math.abs(this.v[0] - 1)
//                
//                this.timer()
//                
//				this.event(this.v, last);
//				
//				return 1;
//			}
//		}
//	}
//}


var Glide = function(v, p, b, pg) {
    v = [v];
    
	Toggles.call(this, v, p, b, pg);
    
    // { origin: i, dest: i, time: t }
    this.v = { draw: this.v, transform: {} }
    
    this.timer_start = 0;
    this.timer = new Task(function() {
        this.v.transform.time = (max.time - this.timer_start) / 1000;
	}, this);
	this.timer.interval = 1;
    
    this.set = function(input) {
        if(this.v.transform.dest == null) {
            this.v.draw = [input];
            this.event({ origin: input, dest: input });
        }
    }

    this.get = function() {
        return this.v.draw[0];
    }
}

Glide.prototype = Object.create(Toggles.prototype);

Glide.prototype.look = function(x, y, z) {
	if(this.pg()) {
		if(this.p[0].length) {
			if(y == this.p[1]) {
				for(var i = 0; i < this.p[0].length; i++) {
					if(this.p[0][i] == x) {
						if(z == 1) {
                            
                            if(this.v.transform.origin == null) {
                                this.v.transform = {}
                                this.v.transform.origin = i;
                                
                                this.timer.repeat();
                                this.timer_start = max.time;
                                
                                this.v.draw = [i];
                            } else if(this.v.transform.origin != null) {
                                
                                this.v.transform.dest = i;
                                this.v.draw = [this.v.transform.origin, i];
                                
                                //this.v.draw.sort(function(a, b) { return a - b; });
                            } else {
                                //this.v.draw = [i];
                            }
						}                        
						else {
                            if(this.v.transform.dest != null && i == this.v.transform.dest) { //end of glide
                                this.event(this.v);
                                
                                //this.v.transform.time = 0;
                                this.v.draw = [this.v.transform.dest];
                                
                                this.timer.cancel();
                            } else if(this.v.transform.origin != null && i == this.v.transform.origin) {          
                               
                                if(this.v.transform.dest != null) { //end of glide
                                    this.v.draw = [this.v.transform.dest]; 
                                    
                                    this.event(this.v);
                                    
                                    //this.v.transform.time = 0;
                                } else { //no glide
                                    
                                    this.event(this.v);
                                    
                                    this.v.transform.time = 0;
                                    
                                }
                                
                                
                                this.v.transform.origin = null;
                                this.timer.cancel();
                            } else if(this.v.transform.dest == null && this.v.transform.origin == null) { //remote set
                                this.v.draw = [i];
                                this.timer.cancel();
                                
                                this.event(this.v);
                                
                                this.v.transform.time = 0;
                            } else { //no output
                                
                            }
                        }
                        
						return 1;
					}
				}
			}
		}
		else { //TODO
		}
	}
}

Glide.prototype.draw = function(g) { 
	if(this.pg()) {
		var bb = this.b[0].slice();
		
		for(var i = 0; i < this.v.draw.length; i++) {
			bb[this.v.draw[i]] = this.b[1];
		}
		
		if(this.p[0].length) {
			for(var i = 0; i < this.p[0].length; i++) {
				g.led(this.p[0][i], this.p[1], bb[i]);
			}
		} 
		else {
			for(var i = 0; i < this.p[1].length; i++) {
				g.led(this.p[0], this.p[1][i], bb[i]);
			}
		}
	}
}
