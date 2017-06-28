
var expect = chai.expect;

  describe("Services displayed", function() {
    it("should be the same number as returned from API request", function() {
      var displayed_length= $('table tbody tr').length;
      expect(displayed_length).to.equal(resultsLength);
    });

  });

