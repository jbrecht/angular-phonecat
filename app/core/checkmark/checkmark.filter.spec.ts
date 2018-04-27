'use strict';

describe('checkmark', function() {

  // TODO - get module() to compile in TS
  // beforeEach(module('core'));

  it('should convert boolean values to unicode checkmark or cross',
    inject(function(checkmarkFilter) {
      expect(checkmarkFilter(true)).toBe('\u2713');
      expect(checkmarkFilter(false)).toBe('\u2718');
    })
  );

});
