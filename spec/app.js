describe("MyClass tests", function() {

    var obj = null;
    var name = 'gehan';
    var email = 'gehan@conversocial.com';

    beforeEach(function() {
        obj = new MyClass(name, email);
    });

    it('returns passed in name', function() {
        var actual = obj.getName();
        expect(actual).toBe('gehans');
    });

});
