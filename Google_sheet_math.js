
//find the dot product of two vectors
function dot_product(a,b) {
  Array.prototype.sum = function(selector) {
    if (typeof selector !== 'function') {
      selector = function(item) {
        return item;
      }
    }
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
      sum += selector(this[i]);
    }
    return sum;
  };
  var c = new Array(a.length);
  
  for (var i=0;i<a.length;i++){
    c[i] = a[i]*b[i]
  }
  return c.sum()
}


//find the length of a vector
function getlength(a) {
  return a.length
}


// find a value in a vector
function ifI(findThis,inThisVec) {
  var found = new Array(inThisVec.length);
  for (var i=0;i<inThisVec.length;i++){
    if (findThis == inThisVec[i]) {
      found.push([ inThisVec.indexOf(findThis) ,findThis])
      
    }
    
  }
  return found
}


//find the area of a circle
function cir_area(r) {
  return 3.14159265359*r^2
}


// FE Mathematics

// distance between two points in 2d
function pt_dis2d(x1,x2,y1,y2) {
  return ((y2-y1)^2+(x2-x1)^2)^(0.5)
}

// distance between two points in 3d
function pt_dis3d(x1,x2,y1,y2,z1,z2) {
  return ((y2-y1)^2+(x2-x1)^2+(z2-z1)^2)^(0.5)
}

// FE mechanics of materials
// shear modulus
function shear_modulus(E,v) {
  return E/(2*(1+v))
}

// displacement
function sdelta(P,L,A,E) {
  sdelta = (P*L)/(A*E)
}

// Thermal Deformation
function t_sdelta(alpha,L,T,To) {
  return alpha*L*(T-To)
}

// stress and strain
function pstress(sigx,sigy,tauxy) {
  a = (sigx + sigy)/2 + ((sigx-sigy)/2)^2 + tauxy^2)^(0.5)
  b = (sigx + sigy)/2 - ((sigx-sigy)/2)^2 + tauxy^2)^(0.5)
  return [a,b]
}

//elastic beam stress from moment
function M_to_sig(M,y,I) {
  return M*y/I
}

//elastic beam moment from stress
function sig_to_M(sig,y,I) {
  return sig*I/y
}

// elastic euler buckling load of a slender column
function euler_buckle(E,I,L) {
  return 3.14159265359^2*E*I/L^2
}

// elastic spring energy
function elastic_spring_energy(k,x) {
  return 0.5*k*x^2
}


// FE probability and Statistics

//weigthed arithmetic mean
function mean_weighted(w_vec,X_vec) {
    Array.prototype.sum = function(selector) {
    if (typeof selector !== 'function') {
      selector = function(item) {
        return item;
      }
    }
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
      sum += selector(this[i]);
    }
    return sum;
  };
  var c = new Array(w_vec.length);
  for (var i = 0; i < w_vec.length; i++) {
    c[i] = w_vec[i]*X_vec[i]
  }
  return c.sum()/w_vec.sum()
}

// statistical z value
function z_value(X_bar, mu, sigma, n) {
  (X_bar - mu)/(sigma/(n)^(0.5))
}


//dynamics
//velocity with constant acceleration
function vel(ao,t,to,vo) {
  return ao*(t - to) + vo
}

// distance with constant acceleration
function dis(ao,t,to,vo,so) {
  ao*(t-to)^2/2 + vo*(t-to) + so
}

// potential energy in gravity field
function U_grav(m,g,h) {
  return m*g*h
}






