// this syntax (seperate variables with comma and remove the following var
//is common when you have more than one variable being declared at a time

var Car = require('../src/car.js'),
expect = require('chai').expect;

describe('Car', function(){

  beforeEach(function(){
    myCar = new Car ("Fiat", "Panda", new Date().getFullYear(), "White");
    // create a new myCar object each time
  });

  describe('#year', function(){
    //think about using the new Date() and getFullYear functions
    it('should be the current year', function(){
      expect(myCar.year).to.equal(new Date().getFullYear());
    });
  });

  describe('#state', function(){
    it('should initially be off', function(){
      expect(myCar.state).to.equal("off");
    });
  });

  describe('#previousOwners', function(){
    it('should initially be empty', function(){
      expect(myCar.previousOwners.length).to.equal(0);
    });
  });

  describe('#currentOwner', function(){
    it('should initially be manufacturer', function(){
      expect(myCar.currentOwner).to.deep.equal(myCar.make);

    });
  });

  describe('#passengers', function(){
    it('should initially be empty', function(){
      expect(myCar.passengers.length).to.equal(0);

    });
  });

  describe('#sale', function(){

    it('should move currentOwner to previousOwners array', function(){
      myCar.sale("Bob");
      expect(myCar.previousOwners).to.contain("Fiat");
    });

    it('should update currentOwner with the new owner', function(){
      myCar.sale("Bob");
      expect(myCar.currentOwner).to.equal("Bob");  
    });
  });

  describe('#paint', function(){
    it('should update the color of myCar to blue', function(){
      myCar.paint("blue");
      expect(myCar.color).to.equal("blue");  

    });
  });

  describe('#start', function(){
    it('should update the state to on', function(){
      myCar.start();
      expect(myCar.state).to.equal("on");
    });
  });

  describe('#off', function(){
    it('should update the state to off', function(){
      myCar.off();
      expect(myCar.state).to.equal("off");
    });
  });

  describe('#park', function(){
    it('should make sure to only work when the car is off', function(){

    });

  });

  describe('#pickUp', function(){
    it('should add the passenger to the passengers array if car is on', function(){

    });

    it('should not modify the passengers array if car is off', function(){

    });
  });

  describe('#dropOff', function(){
    it('should remove passenger from the passengers array if car is on', function(){

    });

    it('should leave passenger in the passengers array if car is off', function(){

    });
  });

});


