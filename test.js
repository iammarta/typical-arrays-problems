const assert = require('assert');

const {
  min,
  max,
  avg,
} = require('./src')

describe('.min, should find min value in given array', () => {
 it('Should return 0 if no params passed, or array is empty', () => {
   assert.equal(min(), 0);
   assert.equal(min([]), 0);
 });
 it('Should return -38 for given array [2,-24,13,-11,16,-12,-16,24,13,-38,19,-16,19,3,2,32,0,-10,-19,-27]', () => {
   const minValue = min([2,-24,13,-11,16,-12,-16,24,13,-38,19,-16,19,3,2,32,0,-10,-19,-27]);

   assert.equal(minValue, -38);
 });
 it('Should return -37 for given array [33,-4,23,38,-22,-31,0,-33,18,24,29,-37,16,36,14,22,35,10,-22,22]', () => {
   const minValue = min([33,-4,23,38,-22,-31,0,-33,18,24,29,-37,16,36,14,22,35,10,-22,22]);

   assert.equal(minValue, -37);
 });
 it('Should return -35 for given array [27,27,-4,-10,17,34,-26,-4,19,22,34,14,5,20,-23,-1,-35,25,2,-35]', () => {
   const minValue = min([27,27,-4,-10,17,34,-26,-4,19,22,34,14,5,20,-23,-1,-35,25,2,-35]);

   assert.equal(minValue, -35);
 });
 it('Should return -33 for given array [32,34,-14,31,-20,22,-21,11,-33,20,8,36,37,14,21,23,-16,39,-29,37]', () => {
   const minValue = min([32,34,-14,31,-20,22,-21,11,-33,20,8,36,37,14,21,23,-16,39,-29,37]);

   assert.equal(minValue, -33);
 });
 it('Should return -37 for given array [-2,25,-37,-36,3,22,-30,6,33,-33,-12,-24,-37,-14,36,24,9,-10,-24,-22]', () => {
   const minValue = min([-2,25,-37,-36,3,22,-30,6,33,-33,-12,-24,-37,-14,36,24,9,-10,-24,-22]);

   assert.equal(minValue, -37);
 });
 it('Should return -36 for given array [30,9,-28,14,-11,36,35,-19,-4,38,-26,17,31,24,39,-36,15,-5,21,6]', () => {
   const minValue = min([30,9,-28,14,-11,36,35,-19,-4,38,-26,17,31,24,39,-36,15,-5,21,6]);

   assert.equal(minValue, -36);
 });
 it('Should return -39 for given array [-2,3,-9,34,20,-26,29,6,7,0,19,-21,-28,-18,-32,-28,-39,-37,19,-12]', () => {
   const minValue = min([-2,3,-9,34,20,-26,29,6,7,0,19,-21,-28,-18,-32,-28,-39,-37,19,-12]);

   assert.equal(minValue, -39);
 });
 it('Should return -34 for given array [33,8,9,18,22,10,-13,-16,-34,28,10,19,39,5,4,29,13,30,-13,16]', () => {
   const minValue = min([33,8,9,18,22,10,-13,-16,-34,28,10,19,39,5,4,29,13,30,-13,16]);

   assert.equal(minValue, -34);
 });
 it('Should return -39 for given array [29,28,-30,28,9,32,2,14,-15,33,-10,-34,-21,-18,-38,-11,-3,-39,-13,37]', () => {
   const minValue = min([29,28,-30,28,9,32,2,14,-15,33,-10,-34,-21,-18,-38,-11,-3,-39,-13,37]);

   assert.equal(minValue, -39);
 });
 it('Should return -39 for given array [36,37,35,-6,37,18,-29,23,5,3,38,-39,5,34,-17,6,-1,-2,0,-25]', () => {
   const minValue = min([36,37,35,-6,37,18,-29,23,5,3,38,-39,5,34,-17,6,-1,-2,0,-25]);

   assert.equal(minValue, -39);
 });
 it('Should return -37 for given array [9,17,8,0,38,-37,34,-35,-4,9,-20,36,-1,30,11,-21,30,-26,30,-18]', () => {
   const minValue = min([9,17,8,0,38,-37,34,-35,-4,9,-20,36,-1,30,11,-21,30,-26,30,-18]);

   assert.equal(minValue, -37);
 });
 it('Should return -32 for given array [1,-19,-26,-28,2,-32,35,3,32,13,34,10,-12,12,-25,-16,-22,37,6,-28]', () => {
   const minValue = min([1,-19,-26,-28,2,-32,35,3,32,13,34,10,-12,12,-25,-16,-22,37,6,-28]);

   assert.equal(minValue, -32);
 });
 it('Should return -31 for given array [-19,-2,37,-31,35,-25,-30,35,29,11,23,-6,-7,-22,-14,13,-10,20,-9,22]', () => {
   const minValue = min([-19,-2,37,-31,35,-25,-30,35,29,11,23,-6,-7,-22,-14,13,-10,20,-9,22]);

   assert.equal(minValue, -31);
 });
 it('Should return -39 for given array [27,-18,-39,-39,-9,16,-35,6,-6,-21,17,13,37,-30,27,11,-15,37,-38,-39]', () => {
   const minValue = min([27,-18,-39,-39,-9,16,-35,6,-6,-21,17,13,37,-30,27,11,-15,37,-38,-39]);

   assert.equal(minValue, -39);
 });
 it('Should return -38 for given array [11,-38,-16,-14,-9,36,-15,-27,-16,2,-11,-14,32,4,-7,-2,21,21,-22,-36]', () => {
   const minValue = min([11,-38,-16,-14,-9,36,-15,-27,-16,2,-11,-14,32,4,-7,-2,21,21,-22,-36]);

   assert.equal(minValue, -38);
 });
 it('Should return -32 for given array [9,5,-4,17,-4,-32,4,34,9,38,-32,22,20,33,-17,8,30,12,-17,32]', () => {
   const minValue = min([9,5,-4,17,-4,-32,4,34,9,38,-32,22,20,33,-17,8,30,12,-17,32]);

   assert.equal(minValue, -32);
 });
 it('Should return -38 for given array [-38,12,-25,-29,-29,-18,18,1,3,7,-27,22,32,5,16,0,-22,23,-37,9]', () => {
   const minValue = min([-38,12,-25,-29,-29,-18,18,1,3,7,-27,22,32,5,16,0,-22,23,-37,9]);

   assert.equal(minValue, -38);
 });
 it('Should return -37 for given array [13,-33,11,37,4,22,-28,-37,26,35,-25,-2,-30,31,-12,9,31,1,29,36]', () => {
   const minValue = min([13,-33,11,37,4,22,-28,-37,26,35,-25,-2,-30,31,-12,9,31,1,29,36]);

   assert.equal(minValue, -37);
 });
 it('Should return -39 for given array [-29,24,37,-28,-39,26,35,2,-22,16,-39,4,-7,34,-5,-16,-26,-16,-5,36]', () => {
   const minValue = min([-29,24,37,-28,-39,26,35,2,-22,16,-39,4,-7,34,-5,-16,-26,-16,-5,36]);

   assert.equal(minValue, -39);
 });
 it('Should return -38 for given array [-5,-38,-28,39,-9,-13,-18,16,-15,28,-10,27,3,36,12,7,29,25,0,-5]', () => {
   const minValue = min([-5,-38,-28,39,-9,-13,-18,16,-15,28,-10,27,3,36,12,7,29,25,0,-5]);

   assert.equal(minValue, -38);
 });
});

describe('.max, should find max value in given array', () => {
 it('Should return 0 if no params passed, or array is empty', () => {
   assert.equal(max(), 0);
   assert.equal(max([]), 0);
 });
 it('Should return 39 for given array [34,26,21,-8,10,39,-14,20,20,27,1,1,27,-15,14,-8,20,17,5,-36]', () => {
   const maxValue = max([34,26,21,-8,10,39,-14,20,20,27,1,1,27,-15,14,-8,20,17,5,-36]);

   assert.equal(maxValue, 39);
 });
 it('Should return 39 for given array [27,33,35,-27,-26,17,15,-9,27,34,10,39,36,-13,10,-5,39,-37,27,-19]', () => {
   const maxValue = max([27,33,35,-27,-26,17,15,-9,27,34,10,39,36,-13,10,-5,39,-37,27,-19]);

   assert.equal(maxValue, 39);
 });
 it('Should return 36 for given array [19,0,24,14,21,2,22,-6,-1,2,8,33,32,-20,9,20,-16,36,-10,-36]', () => {
   const maxValue = max([19,0,24,14,21,2,22,-6,-1,2,8,33,32,-20,9,20,-16,36,-10,-36]);

   assert.equal(maxValue, 36);
 });
 it('Should return 30 for given array [-34,11,2,-25,-22,24,-8,3,-34,23,16,10,19,-32,11,-13,0,8,30,16]', () => {
   const maxValue = max([-34,11,2,-25,-22,24,-8,3,-34,23,16,10,19,-32,11,-13,0,8,30,16]);

   assert.equal(maxValue, 30);
 });
 it('Should return 30 for given array [0,-16,-31,30,-4,17,26,-3,-33,-29,10,-24,-4,29,-17,11,-4,14,17,9]', () => {
   const maxValue = max([0,-16,-31,30,-4,17,26,-3,-33,-29,10,-24,-4,29,-17,11,-4,14,17,9]);

   assert.equal(maxValue, 30);
 });
 it('Should return 39 for given array [22,30,39,0,38,27,30,12,0,2,-18,-1,18,23,29,22,22,32,15,-8]', () => {
   const maxValue = max([22,30,39,0,38,27,30,12,0,2,-18,-1,18,23,29,22,22,32,15,-8]);

   assert.equal(maxValue, 39);
 });
 it('Should return 33 for given array [20,-14,-25,-19,14,24,-38,-29,0,-22,-21,-32,33,21,11,12,30,15,-7,1]', () => {
   const maxValue = max([20,-14,-25,-19,14,24,-38,-29,0,-22,-21,-32,33,21,11,12,30,15,-7,1]);

   assert.equal(maxValue, 33);
 });
 it('Should return 37 for given array [-16,17,31,29,34,-8,-12,6,24,21,36,-7,-26,25,17,1,4,4,0,37]', () => {
   const maxValue = max([-16,17,31,29,34,-8,-12,6,24,21,36,-7,-26,25,17,1,4,4,0,37]);

   assert.equal(maxValue, 37);
 });
 it('Should return 36 for given array [-4,36,-27,18,31,6,10,2,24,-6,4,-12,-5,-23,8,-3,36,8,36,-8]', () => {
   const maxValue = max([-4,36,-27,18,31,6,10,2,24,-6,4,-12,-5,-23,8,-3,36,8,36,-8]);

   assert.equal(maxValue, 36);
 });
 it('Should return 39 for given array [7,7,-22,14,32,-11,-21,-23,26,23,35,21,19,39,20,15,-31,35,20,-14]', () => {
   const maxValue = max([7,7,-22,14,32,-11,-21,-23,26,23,35,21,19,39,20,15,-31,35,20,-14]);

   assert.equal(maxValue, 39);
 });
 it('Should return 35 for given array [35,9,17,6,-17,-16,12,15,21,-10,-16,-10,-27,3,-8,-3,31,20,27,-35]', () => {
   const maxValue = max([35,9,17,6,-17,-16,12,15,21,-10,-16,-10,-27,3,-8,-3,31,20,27,-35]);

   assert.equal(maxValue, 35);
 });
 it('Should return 39 for given array [24,17,-8,10,36,22,39,-24,36,-6,-29,7,36,33,-21,-22,-28,-19,16,-3]', () => {
   const maxValue = max([24,17,-8,10,36,22,39,-24,36,-6,-29,7,36,33,-21,-22,-28,-19,16,-3]);

   assert.equal(maxValue, 39);
 });
 it('Should return 37 for given array [16,18,-23,35,-8,-20,6,-9,6,37,-34,-3,-37,5,19,-15,19,3,17,-32]', () => {
   const maxValue = max([16,18,-23,35,-8,-20,6,-9,6,37,-34,-3,-37,5,19,-15,19,3,17,-32]);

   assert.equal(maxValue, 37);
 });
 it('Should return 38 for given array [-35,33,38,-37,30,-35,14,8,-9,23,26,-19,8,-30,36,-30,-33,-22,22,14]', () => {
   const maxValue = max([-35,33,38,-37,30,-35,14,8,-9,23,26,-19,8,-30,36,-30,-33,-22,22,14]);

   assert.equal(maxValue, 38);
 });
 it('Should return 39 for given array [-35,28,22,-34,39,-16,26,35,-23,29,39,-4,38,16,-7,-5,39,29,-32,21]', () => {
   const maxValue = max([-35,28,22,-34,39,-16,26,35,-23,29,39,-4,38,16,-7,-5,39,29,-32,21]);

   assert.equal(maxValue, 39);
 });
 it('Should return 38 for given array [-24,0,-33,35,20,28,-4,-30,22,-15,-14,-6,-23,38,24,-5,-4,33,-35,-29]', () => {
   const maxValue = max([-24,0,-33,35,20,28,-4,-30,22,-15,-14,-6,-23,38,24,-5,-4,33,-35,-29]);

   assert.equal(maxValue, 38);
 });
 it('Should return 35 for given array [20,-25,14,-35,35,-27,-37,-27,18,-5,27,-28,15,-8,29,-1,17,-28,4,11]', () => {
   const maxValue = max([20,-25,14,-35,35,-27,-37,-27,18,-5,27,-28,15,-8,29,-1,17,-28,4,11]);

   assert.equal(maxValue, 35);
 });
 it('Should return 36 for given array [2,-21,19,35,-24,-29,-25,-26,13,11,21,-38,25,-2,31,36,6,-23,-18,-1]', () => {
   const maxValue = max([2,-21,19,35,-24,-29,-25,-26,13,11,21,-38,25,-2,31,36,6,-23,-18,-1]);

   assert.equal(maxValue, 36);
 });
 it('Should return 38 for given array [0,-20,3,26,-30,18,23,0,10,14,13,-16,21,-35,-11,-33,38,-32,-34,35]', () => {
   const maxValue = max([0,-20,3,26,-30,18,23,0,10,14,13,-16,21,-35,-11,-33,38,-32,-34,35]);

   assert.equal(maxValue, 38);
 });
 it('Should return 39 for given array [13,30,32,-25,39,32,31,-34,15,-20,-10,27,24,-9,24,-30,-25,-7,30,10]', () => {
   const maxValue = max([13,30,32,-25,39,32,31,-34,15,-20,-10,27,24,-9,24,-30,-25,-7,30,10]);

   assert.equal(maxValue, 39);
 });
});

describe('.avg, should calculate average value in given array', () => {
  it('Should return 0 if no params passed, or array is empty', () => {
    assert.equal(avg(), 0);
    assert.equal(avg([]), 0);
  });

  it('Should return -1.8 for given array [-39,30,-32,-9,3,-2,-11,-4,-32,39,0,-14,7,20,-12,22,-23,19,0,2]', () => {
    const avgValue = avg([-39,30,-32,-9,3,-2,-11,-4,-32,39,0,-14,7,20,-12,22,-23,19,0,2]);

    assert.equal(avgValue, -1.8);
  });
  it('Should return 10.4 for given array [21,38,-25,39,38,18,-12,38,-33,25,-12,-7,19,12,26,26,-28,21,-25,29]', () => {
    const avgValue = avg([21,38,-25,39,38,18,-12,38,-33,25,-12,-7,19,12,26,26,-28,21,-25,29]);

    assert.equal(avgValue, 10.4);
  });
  it('Should return 4.7 for given array [-29,-15,32,-21,-5,29,5,-1,1,24,36,24,-22,36,11,-2,-30,0,39,-18]', () => {
    const avgValue = avg([-29,-15,32,-21,-5,29,5,-1,1,24,36,24,-22,36,11,-2,-30,0,39,-18]);

    assert.equal(avgValue, 4.7);
  });
  it('Should return 8.1 for given array [-9,3,4,37,17,-2,35,-18,15,36,28,39,-7,28,18,6,-37,-18,2,-15]', () => {
    const avgValue = avg([-9,3,4,37,17,-2,35,-18,15,36,28,39,-7,28,18,6,-37,-18,2,-15]);

    assert.equal(avgValue, 8.1);
  });
  it('Should return 7.85 for given array [-26,35,-5,8,14,33,-25,23,-3,14,15,3,35,-2,-27,-3,-5,21,34,18]', () => {
    const avgValue = avg([-26,35,-5,8,14,33,-25,23,-3,14,15,3,35,-2,-27,-3,-5,21,34,18]);

    assert.equal(avgValue, 7.85);
  });
  it('Should return -0.65 for given array [12,-39,-2,-18,35,10,15,8,-32,-25,23,-37,-32,31,14,-30,37,-15,8,24]', () => {
    const avgValue = avg([12,-39,-2,-18,35,10,15,8,-32,-25,23,-37,-32,31,14,-30,37,-15,8,24]);

    assert.equal(avgValue, -0.65);
  });
  it('Should return 7.45 for given array [33,38,8,19,-9,16,-19,30,22,-16,-21,36,27,-1,-7,10,-28,-31,22,20]', () => {
    const avgValue = avg([33,38,8,19,-9,16,-19,30,22,-16,-21,36,27,-1,-7,10,-28,-31,22,20]);

    assert.equal(avgValue, 7.45);
  });
  it('Should return 10.35 for given array [21,29,10,-19,21,36,38,16,16,-36,-34,19,-12,-18,-25,26,38,15,27,39]', () => {
    const avgValue = avg([21,29,10,-19,21,36,38,16,16,-36,-34,19,-12,-18,-25,26,38,15,27,39]);

    assert.equal(avgValue, 10.35);
  });
  it('Should return 13.75 for given array [5,27,25,26,-2,29,-16,39,25,34,38,10,20,-5,-7,16,-32,6,23,14]', () => {
    const avgValue = avg([5,27,25,26,-2,29,-16,39,25,34,38,10,20,-5,-7,16,-32,6,23,14]);

    assert.equal(avgValue, 13.75);
  });
  it('Should return 5.75 for given array [0,10,31,-5,-23,26,-25,-17,-2,9,13,-17,-24,31,20,16,6,19,18,29]', () => {
    const avgValue = avg([0,10,31,-5,-23,26,-25,-17,-2,9,13,-17,-24,31,20,16,6,19,18,29]);

    assert.equal(avgValue, 5.75);
  });
  it('Should return -4.2 for given array [33,-33,-6,12,-37,12,-17,30,-19,-20,-33,-29,29,-12,-18,-35,10,17,34,-2]', () => {
    const avgValue = avg([33,-33,-6,12,-37,12,-17,30,-19,-20,-33,-29,29,-12,-18,-35,10,17,34,-2]);

    assert.equal(avgValue, -4.2);
  });
  it('Should return 10.8 for given array [-3,32,34,3,31,17,15,16,-32,27,-3,19,37,0,-29,8,-22,24,15,27]', () => {
    const avgValue = avg([-3,32,34,3,31,17,15,16,-32,27,-3,19,37,0,-29,8,-22,24,15,27]);

    assert.equal(avgValue, 10.8);
  });
  it('Should return 1.95 for given array [-26,27,21,2,15,-34,-17,38,-21,-24,-2,9,-23,20,37,-31,-1,17,31,1]', () => {
    const avgValue = avg([-26,27,21,2,15,-34,-17,38,-21,-24,-2,9,-23,20,37,-31,-1,17,31,1]);

    assert.equal(avgValue, 1.95);
  });
  it('Should return 5.4 for given array [37,30,22,2,7,17,20,-9,5,31,-28,-29,-14,19,23,-24,34,3,-19,-19]', () => {
    const avgValue = avg([37,30,22,2,7,17,20,-9,5,31,-28,-29,-14,19,23,-24,34,3,-19,-19]);

    assert.equal(avgValue, 5.4);
  });
  it('Should return -6.35 for given array [-26,-29,-30,-13,-33,27,-36,-5,20,-21,-15,4,-31,-7,18,28,4,35,-36,19]', () => {
    const avgValue = avg([-26,-29,-30,-13,-33,27,-36,-5,20,-21,-15,4,-31,-7,18,28,4,35,-36,19]);

    assert.equal(avgValue, -6.35);
  });
  it('Should return -5 for given array [30,26,28,-38,-39,16,-34,17,1,-14,-35,14,11,-3,-13,-19,-9,-13,3,-29]', () => {
    const avgValue = avg([30,26,28,-38,-39,16,-34,17,1,-14,-35,14,11,-3,-13,-19,-9,-13,3,-29]);

    assert.equal(avgValue, -5);
  });
  it('Should return 6.15 for given array [10,-9,6,11,-31,8,23,-24,16,11,35,-28,16,12,34,35,2,7,22,-33]', () => {
    const avgValue = avg([10,-9,6,11,-31,8,23,-24,16,11,35,-28,16,12,34,35,2,7,22,-33]);

    assert.equal(avgValue, 6.15);
  });
  it('Should return -6.65 for given array [37,-37,-13,-39,-24,-26,-26,-21,32,-35,-18,-39,3,15,11,-1,37,0,-26,37]', () => {
    const avgValue = avg([37,-37,-13,-39,-24,-26,-26,-21,32,-35,-18,-39,3,15,11,-1,37,0,-26,37]);

    assert.equal(avgValue, -6.65);
  });
  it('Should return 1.35 for given array [0,1,13,22,4,-11,-35,-38,-8,8,16,23,27,-11,-12,-18,35,-7,16,2]', () => {
    const avgValue = avg([0,1,13,22,4,-11,-35,-38,-8,8,16,23,27,-11,-12,-18,35,-7,16,2]);

    assert.equal(avgValue, 1.35);
  });
  it('Should return 7.1 for given array [34,6,11,33,0,-10,10,3,22,-18,6,4,-21,32,23,18,-33,23,0,-1]', () => {
    const avgValue = avg([34,6,11,33,0,-10,10,3,22,-18,6,4,-21,32,23,18,-33,23,0,-1]);

    assert.equal(avgValue, 7.1);
  });
});
